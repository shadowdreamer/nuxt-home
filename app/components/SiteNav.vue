<template lang="pug">
nav#app-nav.w-full.mb-8.backdrop-blur
  .main-container.flex.items-center
    Logo.mx-4
    .flex-1
    ul.flex.justify-end.font-archivo
      li(v-for="link in navigations")
        NuxtLink.px-8.py-4.block(:to="link.href") {{ link.name}}
</template>
<script setup lang="ts">

</script>
<style>

</style>