<template lang="pug">
SiteNav
main(class='main-container mx-auto')
  .flex.gap-8.items-start
    NuxtPage
    SideProfile
Footer
</template>
<script setup lang="ts">
usePinNavi();

</script>
<style>

</style>