<template lang="pug">
nav#app-nav.w-full.mb-8.backdrop-blur.z-10001
  .container.flex.items-center.h-full.items-center
    Logo.mx-4(class="")
    .flex-1
    ul.flex.justify-end.font-archivo.items-center.h-full
      li(v-for="link in navigations")
        NuxtLink.px-8.py-4.block(:to="link.href") {{ link.name}}
</template>
<script setup lang="ts">

</script>
<style>

</style>