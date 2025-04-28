<template lang="pug">
.py-12(v-if="data")
  p.mb-8.text-gray-500.text-sm {{data?.meta.date}}
  ContentRenderer(v-if="data" :value="data" class='blog') 

</template>
<script setup lang="ts">
definePageMeta({
  layout:'blog'
})
const route = useRoute()
const { data,execute } = await useAsyncData(route.path, () => {
  return queryCollection('resume').path(route.path).first()
} )
useSeoMeta({
  title: ()=>data.value?.title || 'blog',
  description : ()=>data.value?.description || 'blog',
})

onMounted(() =>{
  if(!data.value)execute().then(()=>{
    if(!data.value){
      navigateTo('/404')
    }
  })
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