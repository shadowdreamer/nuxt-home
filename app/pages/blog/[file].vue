<template lang="pug">
.py-12
  h2.text-2xl.font-semibold.mb-8 {{data?.title}}
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
useSeoMeta({
  title: ()=>data.value?.title || 'blog',
  description : ()=>data.value?.description || 'blog',
})

onMounted(() =>{
  if(!data.value)execute();
  openAtagBlank()
})
function openAtagBlank(){
  document.querySelectorAll('.blog a').forEach((item:any)=>{
    item.target = '_blank'
  })
}
</script>
<style>

</style>