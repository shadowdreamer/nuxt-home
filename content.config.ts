import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
 
    }),
    diary: defineCollection({
      type: 'page',
      source: 'diary/**/*.md',
 
    }),
    resume: defineCollection({
      type: 'page',
      source: 'resume.md',
 
    })
  },
})