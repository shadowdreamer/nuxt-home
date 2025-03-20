import { defineContentConfig, defineCollection } from '@nuxt/content'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content'
  ],

  devtools: {
    enabled: false,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        // { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      title:' Fishing',
      script:[
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "" },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
  css: [
    '~/styles/global.css',
    '~/styles/blog.css',
  ],

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  compatibilityDate: '2024-08-14',
  nitro:{
    routeRules: {
      "/": { prerender: true },
      "/about": { prerender: true },
      "/blog/**": { prerender: true },
    },
    prerender: {
      crawlLinks: true 
    }
  },
  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    
  },
  runtimeConfig: {
    public: {
      commitHash: process.env.NITRO_COMMIT_HASH || 'unknown'
    }
  }
})
