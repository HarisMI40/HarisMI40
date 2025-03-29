import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date(),
    // updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(''),
    // image: z.string().optional().default(''),
    // tags: z.array(z.string()).optional().default([]),
    // category: z.string().optional().default(''),
    // lang: z.string().optional().default(''),
  }),
})
export const collections = {
  posts: postsCollection,
}
