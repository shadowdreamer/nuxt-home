<template lang="pug">
div
  DropdownMenuRoot(v-model:open="isOpen")
    DropdownMenuTrigger#mobile-menu-button(class=" smd:hidden p-2 rounded-md text-gray-700 dark:text-gray-300" as-child)
      button(type="button" aria-label="Toggle mobile menu")
        svg.w-6.h-6(v-if="!isOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
        svg.w-6.h-6(v-else fill="none" stroke="currentColor" viewBox="0 0 24 24")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")
    
    DropdownMenuPortal
      DropdownMenuContent(
        align="end"
        side="bottom"
        :side-offset="5"
        class="smd:hidden min-w-[240px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mt-2 mr-4"
      )
        div.flex.flex-col.py-2
          template(v-for="(link, index) in navigations" :key="link.href")
            DropdownMenuItem(
              as-child
              :class="['focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none cursor-pointer']"
            )
              NuxtLink(
                :to="link.href"
                class="block py-3 px-4 text-base hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                @click="closeMenu"
              ) 
                span {{ link.name }}
            hr.my-1(v-if="index < navigations.length - 1" class="border-gray-200 dark:border-gray-700")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  DropdownMenuRoot, 
  DropdownMenuTrigger, 
  DropdownMenuPortal, 
  DropdownMenuContent,
  DropdownMenuItem
} from 'radix-vue'

const isOpen = ref(false)

// Watch for route changes to close menu
const route = useRoute()
watch(() => route.fullPath, () => {
  closeMenu()
})

const closeMenu = () => {
  isOpen.value = false
}

// Close menu when escape key is pressed
useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
})
</script>

<style scoped>
/* Custom animation classes */
 
</style>