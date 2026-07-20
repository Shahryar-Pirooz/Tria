<script setup lang="ts">
import type { WindowBoard } from '@/types/WindowBoard';

const {title , has3Btn} = defineProps<WindowBoard>()
</script>
<template>
  <div class="flex flex-col flex-nowrap w-fit font-jetbrains-mono">
    <div class="inline-flex gap-5 w-full justify-start items-center h-fix px-4 py-2 bg-sidebar text-foreground text-xs border border-border rounded-t-xl">
      <div v-if="has3Btn" class="flex flex-row gap-1">
        <div class="size-3 bg-rose-400 rounded-full"></div>
        <div class="size-3 bg-amber-400 rounded-full"></div>
        <div class="size-3 bg-lime-400 rounded-full"></div>
      </div>
      <div>{{ title }}</div>
    </div>
    <div class="flex flex-col w-full bg-sidebar/90 border border-border rounded-b-xl px-4 py-2 text-foreground">
      <slot></slot>
    </div>
  </div>
</template>
