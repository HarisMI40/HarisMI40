import type { Element } from "hast";
import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { h } from "hastscript";
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function createHeadingAnchor(node: Element): Element {
  let x
  try {
    x = parseInt(node.tagName.charAt(1))
  } catch (e) {
    x = 1
  }
  return h('span', { class: 'anchor-text', 'data-pagefind-ignore': true }, ["#".repeat(x)])
}

export const remarkDescription: RemarkPlugin = (options?: { maxChars?: number }) => {
  const maxChars = options && options.maxChars || 400
  return function(tree, { data }) {
    const firstPara = tree.children.find((x) => x.type === "paragraph")
    if (firstPara && data.astro?.frontmatter) {
      let paraString = toString(firstPara)
      if (paraString.length > maxChars) {
        const lastSpace = paraString.slice(0, maxChars).lastIndexOf(' ')
        paraString = paraString.slice(0, lastSpace) + "…"
      }
      data.astro.frontmatter.description = paraString;
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
