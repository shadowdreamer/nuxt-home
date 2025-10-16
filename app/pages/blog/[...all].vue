<template lang="pug">
.pt-20.pb-10(v-if="data" class="w-full md:w-[75%] max-w-[1444px] mx-auto")
  NuxtLink(to="/" class="mb-6 hover:underline text-gray-800 font-medium flex items-center") 
    Icon.size-4.mr-2(icon="carbon:arrow-left")
    | Back to blog list
  h2.text-2xl.font-semibold.mb-2 {{data?.title}}
  p.mb-8.text-gray-500.text-sm {{data?.meta.date}}
  ContentRenderer(v-if="data" :value="data" class='blog') 

</template>
<script setup lang="ts">
definePageMeta({
  layout:'blog'
})
import { Icon } from "@iconify/vue";

const route = useRoute()
const { data,execute } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
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