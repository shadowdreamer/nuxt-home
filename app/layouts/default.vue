<template lang="pug">
SiteNav
main(class='container mx-auto')
  .flex.gap-8.items-start.relative
    
    NuxtPage
    SideProfile.sticky.top-20
Footer
</template>
<script setup lang="ts">
usePinNavi();

</script>
<style>

</style>