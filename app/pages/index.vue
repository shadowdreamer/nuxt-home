<template lang="pug">
.grid.grid-cols-1.gap-4
  NuxtLink.post-link.group(v-for="post in home" :key="post.path" :to="post.path" )
    .back.bg-texture.-z-1.border.border-takane33
    .overflow-hidden.bg-white.border.border-gray-300.z-1.front
      .p-4
        h2.text-lg.font-bold.mb-1.transition-colors {{ post.title }}
        p.text-sm.text-gray-600.truncate.mb-2 {{ post.description }}
        .text-xs.flex.items-center.text-sm.text-gray-500
          span(v-if="post.meta.date") {{ post.meta.date }}
</template>
<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection('blog')
  .order('path', 'DESC')
  .all()
);
</script>
<style lang="postcss">
.post-link{
  @apply relative;
  .back{
    @apply absolute top-0 left-0 w-full h-full transition-all;
   }
  &:hover {
    .front{
      @apply transition-all;
      transform: translate(-8px,8px);
    }
    .back{
      @apply transition-all;
     
    }
  }
}
</style>
