import type { Element } from "hast";
import { h } from "hastscript";

export function createHeadingAnchor(node: Element): Element {
  let x
  try {
    x = parseInt(node.tagName.charAt(1))
  } catch (e) {
    x = 1
  }
  return h('span', { class: 'anchor-text', 'data-pagefind-ignore': true }, ["#".repeat(x)])
}
