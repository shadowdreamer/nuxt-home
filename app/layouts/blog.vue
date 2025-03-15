<template lang="pug">
SiteNav
main(class='main-container mx-auto')
  NuxtPage
  ClientOnly
    Giscus(
      id="comments"
      repo="shadowdreamer/nuxt-home"
      repo-id="R_kgDON4978A"
      category="Announcements"
      category-id="DIC_kwDON4978M4CoDr8"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme="light"
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
    )
</template>
<script setup lang="ts">
import Giscus from "@giscus/vue";
const isProd = import.meta.env.PROD;
</script>
<style></style>
