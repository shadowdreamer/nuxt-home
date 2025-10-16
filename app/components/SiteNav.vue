<template lang="pug">
nav.w-full.z-100.sticky.top-8.px-4
  .container.flex.items-center.h-full.items-center(class="py-4 backdrop-blur rounded-full bg-gray-500/20")
    Logo.mx-2 
    .flex-1
    ul.justify-end.font-archivo.items-center.h-full(class="md:flex hidden")
      li(v-for="link in navigations")
        NuxtLink.px-8.block(:to="link.href" class="text-black/60 hover:text-black") {{ link.name}}
    MobileNav(class="md:hidden")
</template>
<script setup lang="ts">
</script>
<style>

</style>