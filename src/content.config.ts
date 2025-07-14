import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const postsCollection = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    // updated: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    // image: z.string().optional().default(''),
    // category: z.string().optional().default(''),
    // lang: z.string().optional().default(''),
  }),
})

const homeCollection = defineCollection({
  loader: glob({ pattern: ["home.md", "home.mdx"], base: "./src/content" }),
  schema: z.object({
    avatar: z.string().optional(),
    githubCalendar: z.boolean().optional().default(false)
  })
})

const addendumCollection = defineCollection({
  loader: glob({ pattern: ["addendum.md", "addendum.mdx"], base: "./src/content" }),
  schema: z.object({
    avatar: z.string().optional()
  })
})

export const collections = {
  posts: postsCollection,
  home: homeCollection,
  addendum: addendumCollection
}
