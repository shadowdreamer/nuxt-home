<template lang="pug">
nav#app-nav.w-full.border-b.border-gray-300.mb-8
  .main-container.flex.items-center.border-r.border-l.border-gray-300
    Logo.mx-4
    .flex-1
    ul.flex.justify-end.divide-x.divide-gray-300
      li(class="hover:bg-slate-100" v-for="link in navigations")
        NuxtLink.px-8.py-4.block(:to="link.href") {{ link.name}}
</template>
<script setup lang="ts">

</script>
<style>

</style>