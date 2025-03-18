<template >
<div>
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" stroke-width="0.5"/>
      </pattern>
      <!-- 定义径向渐变蒙版 -->
      <radialGradient id="fadeGradient" cx="2" cy="2" r="50">
        <stop offset="60%" stop-color="white"/>
        <stop offset="100%" stop-color="black"/>
      </radialGradient>
      <!-- 蒙版应用径向渐变 -->
      <mask id="circleMask" >
        <rect :x="mouseWithExtractor.x-25" :y="mouseWithExtractor.y-25" width="50" height="50" fill="url(#fadeGradient)"/>
      </mask>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" mask="url(#circleMask)"/>
  </svg>

</div>
</template>
<script setup lang="ts">
import type { UseMouseEventExtractor } from '@vueuse/core'
import { useMouse, useParentElement } from '@vueuse/core'
import { reactive } from 'vue'

const parentEl = useParentElement()

const extractor: UseMouseEventExtractor = (event) => {
  if (event instanceof MouseEvent)
    return [event.offsetX, event.offsetY]
  else
    return null
}
const mouseWithExtractor = reactive(useMouse({ target: parentEl, type: extractor }))
</script>
<style>

</style>