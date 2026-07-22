<script setup lang="ts">
import type { WindowBoard } from '@/types/WindowBoard'

const { title, has3Btn } = defineProps<WindowBoard>()
</script>
<template>
  <div class="flex flex-col flex-nowrap w-fit font-jetbrains-mono">
    <div
      class="inline-flex h-fix w-full items-center justify-start gap-5 rounded-t-xl border border-contrast/7 bg-window px-4 py-2 text-xs text-content"
    >
      <div v-if="has3Btn" class="flex flex-row gap-1">
        <div class="size-3 rounded-full bg-window-close"></div>
        <div class="size-3 rounded-full bg-window-minimize"></div>
        <div class="size-3 rounded-full bg-window-maximize"></div>
      </div>
      <div>{{ title }}</div>
    </div>
    <div
      class="flex w-full flex-col rounded-b-xl border border-contrast/7 bg-window/90 px-4 py-2 text-content"
    >
      <slot></slot>
    </div>
  </div>
</template>
