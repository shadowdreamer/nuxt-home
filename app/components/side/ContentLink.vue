<template lang="pug">
NuxtLink.post-link.group(:to="post.path" )
  .back.bg-texture.-z-1.border.border-takane33
  .overflow-hidden.border.z-1.front(class="bg-white dark:bg-gray-900 dark:border-gray-700")
    .p-4
      h2.text-lg.font-bold.mb-1.transition-colors {{ post.title }}
      p.text-sm.text-gray-600.truncate.mb-2 {{ post.description }}
      .text-xs.flex.items-center.text-sm.text-gray-500
        span(v-if="post.meta.date") {{ post.meta.date }}
</template>
<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";

defineProps<{
  post:BlogCollectionItem
}>( )
</script>
<style>

</style>