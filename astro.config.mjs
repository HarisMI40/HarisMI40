// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import expressiveCode from "astro-expressive-code";
import siteConfig from './src/site.config'
import { h } from 'hastscript'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: {
            className: ['heading-anchor', 'inline-block', 'text-accent/90', 'mr-2'],
          },
          content: (node) => {
            let x
            try {
              x = parseInt(node.tagName.charAt(1)) - 1
            } catch (e) {
              x = 1
            }
            return h('span', { class: 'anchor-text', 'data-pagefind-ignore': true }, ["#".repeat(x)])
          }
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap(),
    expressiveCode({
      themes: [siteConfig.theme.name],
      defaultProps: {
        wrap: false,
      },
      plugins: [
        pluginLineNumbers()
      ],
    }),
    mdx(), // Must come after expressive-code integration
  ]
});
