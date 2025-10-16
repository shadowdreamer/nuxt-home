<template lang="pug">
.py-12
  h2.text-2xl.font-semibold.mb-2 404 - Page Not Found
  p.mb-8.text-gray-500.text-sm Sorry, the page you are looking for does not exist.
  NuxtLink(to="/" class="hover:underline text-gray-500 font-medium flex items-center") 
    Icon.size-4.mr-2(icon="feather:arrow-left")
    | Go back to home
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
 
</script>
<style>

</style>