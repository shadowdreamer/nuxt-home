<template lang="pug">
Giscus(
  id="comments"
  repo="shadowdreamer/nuxt-home"
  repo-id="R_kgDON4978A"
  category="Announcements"
  category-id="DIC_kwDON4978M4CoDr8"
  mapping="pathname"
  strict="0"
  reactions-enabled="1"
  emit-metadata="0"
  input-position="top"
  :theme="isDark ? 'dark' : 'light'"
  lang="zh-CN"
  loading="lazy"
  crossorigin="anonymous"
)
</template>
<script setup lang="ts">
import Giscus from "@giscus/vue";
const isProd = import.meta.env.PROD;
import ScrollTrigger from "gsap/ScrollTrigger";
const { isDark } = useDarkMode();
onMounted(()=>{
  function handleMessage(event: MessageEvent) {
    if (event.origin !== 'https://giscus.app') return;
    if (!(typeof event.data === 'object' && event.data.giscus)) return;

    const giscusData = event.data.giscus;
    // Do whatever you want with it, e.g. `console.log(giscusData)`.
    // You'll need to make sure that `giscusData` contains the message you're
    // expecting, e.g. by using `if ('discussion' in giscusData)`.
    ScrollTrigger.refresh();
    console.log(giscusData);
    
  }

  window.addEventListener('message', handleMessage);
  // Some time later...
  window.removeEventListener('message', handleMessage);
})
</script>
<style>

</style>