import type * as hast from "hast"
import type { RehypePlugin, RemarkPlugin } from "@astrojs/markdown-remark"
import { h } from "hastscript"
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export const remarkDescription: RemarkPlugin = (options?: { maxChars?: number }) => {
  const maxChars = options && options.maxChars || 200
  return function (tree, { data }) {
    if (data.astro?.frontmatter?.description) {
      // If description is already set, do not override it
      return
    }
    const firstPara = tree.children.find((x) => {
      x.type === "paragraph" && x.children.length > 0 && x.children[0].type === "text"
    })
    if (firstPara && data.astro?.frontmatter) {
      let description = toString(firstPara)
      if (description.length > maxChars) {
        const lastSpace = description.slice(0, maxChars).lastIndexOf(' ')
        description = description.slice(0, lastSpace) + "…"
      }
      data.astro.frontmatter.description = description
    }
  }
}

export const remarkReadingTime: RemarkPlugin = (_options?) => {
  return function (tree, { data }) {
    if (data.astro?.frontmatter) {
      const textOnPage = toString(tree)
      const readingTime = getReadingTime(textOnPage)
      // readingTime.text will give us minutes read as a friendly string,
      // i.e. "3 min read"
      data.astro.frontmatter.minutesRead = readingTime.text
    }
  }
}

export const rehypeTitleFigure: RehypePlugin = (_options?) => {
  function buildFigure(el: hast.Element) {
    const title = `${el.properties?.title || ''}`
    if (!title) return el
    const figure = h('figure', [
      h('img', { ...el.properties }),
      h('figcaption', title),
    ])
    return figure
  }
  function isElement(content: hast.RootContent): content is hast.Element {
    return content.type === "element"
  }
  function transformTree(node: hast.Root | hast.Element) {
    if (node.children) {
      node.children = node.children.map((child) => {
        if (isElement(child)) {
          if (child.tagName === "img") {
            return buildFigure(child)
          } else {
            transformTree(child) // Recursively process child nodes
          }
        }
        return child
      })
    }
  }
  return function (tree: hast.Root) {
    transformTree(tree) // Start the recursive transformation
  }
}
