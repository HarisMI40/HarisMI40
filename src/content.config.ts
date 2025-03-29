import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const postsCollection = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    // updated: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional(),
    author: z.string().optional()
    // image: z.string().optional().default(''),
    // tags: z.array(z.string()).optional().default([]),
    // category: z.string().optional().default(''),
    // lang: z.string().optional().default(''),
  }),
})
export const collections = {
  posts: postsCollection,
}
