<template lang="pug">
.grid.grid-cols-1.gap-8
  NuxtLink(v-for="post in home" :key="post.path" :to="post.path").group
    .overflow-hidden.bg-white.border.border-gray-300
      .p-6
        h2.text-xl.font-bold.mb-2.transition-colors {{ post.title }}
        p.text-gray-600.truncate.mb-4 {{ post.description }}
        .flex.items-center.text-sm.text-gray-500
          span(v-if="post.meta.date") {{ post.meta.date }}
</template>
<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection('blog')
  .order('path', 'DESC')
  .all()
);
</script>
<style></style>
