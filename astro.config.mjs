// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import expressiveCode from "astro-expressive-code";
import siteConfig from './src/site.config'

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon', 'text-accent/90', 'ml-2', 'hover:underline'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
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
    }),
    mdx(), // Must come after expressive-code integration
  ]
});
