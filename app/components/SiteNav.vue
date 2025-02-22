<template lang="pug">
nav#app-nav.w-full
  Container.flex.py-6
    Logo
    .flex-1
    ul.flex.justify-end
      li.ml-8(v-for="link in navigations")
        NuxtLink(:to="link.href") {{ link.name}}
</template>
<script setup lang="ts">

</script>
<style>

</style>