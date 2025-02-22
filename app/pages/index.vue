<template lang="pug">
.text-red-300 {{ data }}
</template>
<script setup lang="ts">
const {data} = useAsyncData('posts', async () => $fetch('/api/ping'))
</script>
<style>

</style>