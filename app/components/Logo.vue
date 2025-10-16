<template lang="pug">
TooltipProvider(
  :delayDuration="30"
)
  TooltipRoot
    TooltipTrigger(as-child)
      .text-2xl.items-center.flex.gap-4.cursor-pointer
        NuxtLink.font-archivo(to="/") SOS Blog
    TooltipPortal
      TooltipContent(
        side="bottom"
        align="start"
        class="slide-down-and-fade z-1001")
        div.p-5.shadow-md.font-mono.text-white.rounded-md.z-1001(class="bg-black/80")
            p 
              span.underline S
              | ekai ni 
            p 
              span.underline O
              | re no
            p 
              span.underline S
              | onzai o shoumei suru
</template>

<script setup lang="ts">
import { TooltipRoot, TooltipContent, TooltipProvider, TooltipTrigger ,TooltipPortal} from 'radix-vue'
</script>

<style>
.slide-down-and-fade{
  @apply data-[state=delayed-open]:animate-scale-in ; 
}
</style>