<script setup lang="ts">
import type { AppButton } from "@/types/AppButton";
const {isAccent} = defineProps<AppButton>()
const style = isAccent ? "bg-foreground text-background" : "bg-background text-foreground"
</script>

<template>
  <Button class="w-full px-4 py-2 rounded-lg text-sm transition-all duration-500 active:scale-95 select-none" :class="style" >
      <slot></slot>
  </Button>
</template>
