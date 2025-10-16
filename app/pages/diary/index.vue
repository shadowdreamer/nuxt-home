<template lang="pug">
.grid.grid-cols-1.gap-4(class="w-full md:w-[75%] max-w-[1444px] mx-auto")
  div
    h1.text-2xl.font-bold.mb-2 YOU FIND ME
    p.text-sm.text-gray-600.mb-4 这里是我一直埋在心底的想法与经历，对能点到这里的你说下谢谢
  SideContentLink(v-for="post in home" :key="post.path" :post="post" )

</template>
<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection('diary')
  .order('path', 'DESC')
  .all()
);
</script>
<style >
.post-link{
  @apply relative;
  .back{
    @apply absolute top-0 left-0 w-full h-full transition-all;
   }
  &:hover {
    .front{
      @apply transition-all;
      transform: translate(-8px,8px), scale(0.8,0.8);
    }
    .back{
      @apply transition-all;
     
    }
  }
}
</style>
