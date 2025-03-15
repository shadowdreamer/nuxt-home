<template lang="pug">
.py-12
  h2 {{data?.title}}
  ContentRenderer(v-if="data" :value="data" class='blog')
</template>
<script setup lang="ts">
definePageMeta({
  layout:'blog'
})
const route = useRoute()
const { data,execute } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
} )

onMounted(() =>{
  if(!data.value)execute();
})
</script>
<style>

</style>