import type { Element } from "hast";
import type { Root } from "mdast"
import type { RemarkPage } from "@types"
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

export function remarkDescription(_options: Object) {
  return function(tree: Root, { data }: RemarkPage): undefined {
    const firstPara = tree.children.find((x) => x.type === "paragraph")
    if (firstPara) {
      let paraString = toString(firstPara)
      if (paraString.length > 400) {
        paraString = paraString.slice(0, 400) + "…"
      }
      data.astro.frontmatter.description = paraString;
    }
  }
}

export function remarkReadingTime() {
  return function(tree: Root, { data }: RemarkPage) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
