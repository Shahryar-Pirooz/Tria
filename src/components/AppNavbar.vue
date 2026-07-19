<script setup lang="ts">
import { useId, ref } from 'vue'
import logo from '@/assets/images/logo.svg'
import AppButton from './AppButton.vue'
import type { AppNavbar } from '@/types/AppNavbar.js';

const props = defineProps<AppNavbar>()
const id = useId()
const items = ref([
  { id, text: 'how it works', link: '#' },
  { id, text: 'security', link: '#' },
  { id, text: 'why Tria?', link: '#' },
])
const isMenuOpen = ref(false)
const openMenuHandler = ()=>{
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header
    class="z-50 px-4 inset-x-0 flex py-4 items-center transition-all duration-500"
    :class="!props.isScrolled ? 'noScroll' : 'scroll'"
  >
    <div class="max-w-5xl w-full mx-auto flex flex-row justify-between">
      <div>
        <img class="max-w-10 md:max-w-20" :src="logo" alt="logo">
      </div>
      <div class="hidden md:block flex-1 text-muted-foreground">
        <ul class="flex flex-row flex-nowrap justify-center h-full space-x-4 items-center">
          <li
            class="select-none hover:cursor-pointer hover:text-foreground active:scale-95"
            v-for="item in items"
            :key="item.id"
          >
            <a :href="item.link">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
      <div class="hidden max-w-36 md:flex flex-row flex-nowrap space-x-4 justify-end items-center">
        <AppButton :is-accent="true">try it free</AppButton>
      </div>
      <!-- SMALL SCREEN -->
      <div @click="openMenuHandler" class="h-full md:hidden">
        <v-icon
    v-if="isMenuOpen"
    name="ri-close-line"
    scale="1.2"
  />

  <v-icon
    v-else
    name="ri-menu-3-line"
    scale="1.2"
  />
      </div>
    </div>
  </header>
  <div class="flex-col scroll inset-x-0 top-10 z-50 py-8 px-4 flex transition-all duration-300 overflow-hidden md:hidden" :class="isMenuOpen?'flex':'hidden'">
           <div class="flex-1 text-muted-foreground">
        <ul class="flex flex-col flex-nowrap justify-start h-full space-y-4 items-start">
          <li
            class="select-none hover:cursor-pointer hover:text-foreground active:scale-95"
            v-for="item in items"
            :key="item.id"
          >
            <a :href="item.link">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
      <div class="flex-1 w-full mt-4">
        <AppButton :is-accent="true">try it free</AppButton>
      </div>
        </div>
</template>

<style>
.no-scroll {
  position: relative;
}
.scroll {
  position: fixed;
  background: rgba(8, 8, 8, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
