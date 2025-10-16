<template lang="pug">

.grid.grid-cols-1.gap-4(class="w-full md:w-[75%] max-w-[1444px] mx-auto")
  div
    h1.text-3xl.font-bold.mb-2 博客
    p.text-lg.text-gray-600.mb-4 我的文章
  SideContentLink(v-for="post in home" :key="post.path" :post="post" )
  //- NuxtLink.post-link.group(v-for="post in home" :key="post.path" :to="post.path" )
  //-   .back.bg-texture.-z-1.border.border-takane33
  //-   .overflow-hidden.border.z-1.front(class="bg-white dark:bg-gray-800 dark:border-gray-700")
  //-     .p-4
  //-       h2.text-lg.font-bold.mb-1.transition-colors {{ post.title }}
  //-       p.text-sm.text-gray-600.truncate.mb-2 {{ post.description }}
  //-       .text-xs.flex.items-center.text-sm.text-gray-500
  //-         span(v-if="post.meta.date") {{ post.meta.date }}
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
      transform: translate(-8px,-8px);
    }
    .back{
      @apply transition-all;
     
    }
  }
}
</style>
