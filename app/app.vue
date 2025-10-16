<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <slot />
  </NuxtLayout>
</template>

<script setup>
// 初始化深色模式
if (import.meta.client) {
  const { isDark } = useDarkMode()
  
  // 监听深色模式变化
  watch(isDark, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })
}
</script>
