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
        NuxtLink(to="/diary"  class="text-black/8 hover:underline cursor-text") Diary
</template>
<script setup lang="ts">
import { Icon  } from "@iconify/vue";

</script>
<style>

</style>