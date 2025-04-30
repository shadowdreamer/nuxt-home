<template lang="pug">
.border.border-gray-300.p-4.w-64.flex-grow-0
  .flex.gap-4.justify-end.mb-4
    a.flex.flex-col.items-center.gap-1.p-2.rounded-md.w-14(
      class="hover:bg-gray-100"
       v-for="item in socials" target="_blank" :href="item.href")
      Icon.size-6(:icon="item.logo")
      .text-xs {{ item.name }}

  a.text-xs.text-right.mb-2.flex.items-center.gap-1.justify-end(
    class="hover:underline"
     href="mailto:hire@dovahkiin.top") 
    icon.size-4(icon="carbon:email")
    span hire@dovahkiin.top    
  div.text-xs.text-right @CureDovahkiin
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

const socials = [
  { name: 'Github', href:'https://github.com/shadowdreamer', logo:'carbon:logo-github'}, 
  // { name: 'Mail', href:'mailto:hire@dovahkiin.top', logo:'carbon:email'}, 
  // { name: 'weibo', href:'https://weibo.com/u/1771195675', logo:'fa-brands:weibo'},  
]
</script>
<style>

</style>