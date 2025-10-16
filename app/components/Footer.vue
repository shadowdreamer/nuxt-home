<template lang="pug">

footer.text-gray-400.container.py-10
  div(class="w-full md:w-[75%] max-w-[1444px] mx-auto text-sm flex md:flex-row-reverse justify-between flex-wrap")
    SideProfile
    div
      .mb-2.font-mono
        | CC BY-NC-SA 4.0 2021~{{ new Date().getFullYear() }}  © CureDovahkiin  
      a.font-mono.mb-2.inline-flex.items-center(class="hover:underline" href="mailto:hi@dovahkiin.top") 
        Icon.size-4.mr-2(icon="carbon:email")
        span hi@dovahkiin.top   
      
 
      
      p.font-mono 
        | Hand made with Nuxt.js & Tailwindcss Powered on NuxtHub. 
        span(@click="handleTripleClick()" class="text-black/8 cursor-text select-none") Diary
</template>
<script setup lang="ts">
import { Icon  } from "@iconify/vue";
// click 3 times junp to /diary
let clickCount = 0
const handleTripleClick = () => {
  clickCount++
  if (clickCount === 3) {
    navigateTo('/diary')
    clickCount = 0
  }
  setTimeout(() => (clickCount = 0), 500)
}

</script>
<style>

</style>