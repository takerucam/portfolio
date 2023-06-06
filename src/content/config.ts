import { z, defineCollection } from 'astro:content'

const blogsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string().url(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
})

const photosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    camera: z.string(),
    setting: z.string(),
    lens: z.string(),
    location: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string().url(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  blogs: blogsCollection,
  photos: photosCollection,
}
