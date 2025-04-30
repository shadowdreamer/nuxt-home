<template lang="pug">
NuxtLink.text-2xl.items-center.flex.gap-4(to="/") 
  .font-noto-emoji {{ emojis[getRandomIndex(emojis.length-1)] }}
  .font-archivo Fishing Blog
</template>
<script setup lang="ts">
const emojis = ["🫡","😲",'🤑','🫣',"😜"]
</script>
<style>

</style>