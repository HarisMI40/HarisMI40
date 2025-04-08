// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import expressiveCode from "astro-expressive-code";
import siteConfig from './src/site.config'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import icon from 'astro-icon';
import { createHeadingAnchor, remarkDescription, remarkReadingTime, rehypeTitleFigure } from './src/settings-utils';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [remarkDescription, { maxChars: 200 }],
      remarkReadingTime,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: {
            className: ['heading-anchor', 'inline-block', 'text-accent/90', 'mr-2'],
          },
          content: createHeadingAnchor,
        },
      ],
      rehypeTitleFigure,
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
    icon()
  ]
});
