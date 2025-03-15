<template lang="pug">
Container.py-12
  .grid.grid-cols-1.md_grid-cols-2.lg_grid-cols-3.gap-8
    NuxtLink(v-for="post in home" :key="post.path" :to="post.path").group
      .overflow-hidden.rounded-xl.shadow-lg.transition-all.duration-300.hover_shadow-xl.bg-white
        .p-6
          h2.text-xl.font-bold.mb-2.group-hover_text-takane.transition-colors {{ post.title }}
          p.text-gray-600.line-clamp-2.mb-4 {{ post.description }}
          .flex.items-center.text-sm.text-gray-500
            //- Add date if available
            span(v-if="post.meta.date") {{ post.meta.date }}
</template>
<script setup lang="ts">
const { data } = useAsyncData("posts", async () => $fetch("/api/ping"));
const { data: home } = await useAsyncData(() =>
  queryCollection('blog')
  .all()
);
onMounted(() =>{
  console.log(home)
})
</script>
<style></style>
