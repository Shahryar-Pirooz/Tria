<script setup lang="ts">
import type { AppButton } from "@/types/AppButton";
const {isAccent , icon} = defineProps<AppButton>()
const style = isAccent ? "bg-foreground text-background" : "bg-foreground/0 hover:bg-foreground/10 text-foreground"
</script>

<template>
  <button class="w-full
  cursor-pointer
  inline-flex
  gap-2
  border
  px-4
  py-2
  rounded-lg
  text-sm
  transition-all
  duration-500
  active:scale-95
  select-none"
  :class="style"
  >
  <v-icon :name="icon"/>
      <slot></slot>
  </button>
</template>
