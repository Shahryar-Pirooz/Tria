<script setup lang="ts">
import type { AppButton } from '@/types/AppButton'
const { isAccent, icon } = defineProps<AppButton>()
const style = isAccent ? 'bg-content text-page' : 'bg-content/0 text-content hover:bg-content/10'
</script>

<template>
  <div
    class="cursor-pointer inline-flex max-w-md gap-2 border px-4 py-2 rounded-lg text-sm transition-all duration-500 active:scale-95 select-none"
    :class="style"
  >
    <v-icon v-if="icon && icon !== ''" :name="icon" />
    <slot></slot>
  </div>
</template>
