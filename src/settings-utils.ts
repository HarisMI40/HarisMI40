import type * as hast from "hast"
import type { RehypePlugin, RemarkPlugin } from "@astrojs/markdown-remark";
import { h } from "hastscript";
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit'

export function createHeadingAnchor(node: hast.Element): hast.Element {
  let x
  try {
    x = parseInt(node.tagName.charAt(1))
  } catch (e) {
    x = 1
  }
  return h('span', { class: 'anchor-text', 'data-pagefind-ignore': true }, ["#".repeat(x)])
}

export const remarkDescription: RemarkPlugin = (options?: { maxChars?: number }) => {
  const maxChars = options && options.maxChars || 200
  return function(tree, { data }) {
    const firstPara = tree.children.find((x) => x.type === "paragraph")
    if (firstPara && data.astro?.frontmatter) {
      let description = toString(firstPara)
      if (description.length > maxChars) {
        const lastSpace = description.slice(0, maxChars).lastIndexOf(' ')
        description = description.slice(0, lastSpace) + "…"
      }
      data.astro.frontmatter.description = description;
    }
  }
}

export const remarkReadingTime: RemarkPlugin = (_options?) => {
  return function(tree, { data }) {
    if (data.astro?.frontmatter) {
      const textOnPage = toString(tree);
      const readingTime = getReadingTime(textOnPage);
      // readingTime.text will give us minutes read as a friendly string,
      // i.e. "3 min read"
      data.astro.frontmatter.minutesRead = readingTime.text;
    }
  };
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
  function transformer(tree: hast.Root) {
    if (!Array.isArray(tree?.children)) return tree
    visit(tree, { tagName: 'p' }, (el, index, parent) => {
      if (!Array.isArray(tree?.children) || parent?.type !== 'root') return
      const isImgElement = (el: hast.ElementContent): el is hast.Element => {
        return 'tagName' in el && el.tagName === 'img'
      }
      const images = el.children.filter(isImgElement).map(buildFigure)
      if (images.length === 0) return
      if (index) tree.children[index] = images
    })
    tree.children = tree.children.flat()

    return tree
  }
  return transformer
}
