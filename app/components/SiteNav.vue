<template lang="pug">
nav(class="w-full z-100 sticky top-8 px-4")
  div(class="container flex items-center h-full items-center py-4 pl-8 backdrop-blur rounded-full bg-gray-500/20 dark:bg-gray-800/50")
    Logo
    .flex-1

    ul(class="justify-end font-archivo items-center h-full md:flex hidden")
      li(v-for="link in navigations")
        NuxtLink(class="px-8 block text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white" :to="link.href") {{ link.name}}
    
    MobileNav(class="md:hidden")

    button(class="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-gray-300 dark:hover:bg-gray-700" @click="toggleDarkMode")
      Icon(:icon="isDark ? 'carbon:sun' : 'carbon:moon'" class ="  text-gray-700 dark:text-gray-200 text-xl")
</template>
<script setup lang="ts">
import { navigations } from '~/utils/constants'
import { Icon } from "@iconify/vue";
const { isDark, toggleDarkMode } = useDarkMode()

</script>