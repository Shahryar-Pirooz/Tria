<script setup lang="ts">
import { ref } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/Hero/HeroSection.vue'
const isScroll = ref(false)
window.addEventListener('scroll', () => {
  isScroll.value = window.scrollY !== 0
})
</script>

<template>
  <AppNavbar :is-scrolled="isScroll" />
  <div class="text-primary" ref="body">
    <HeroSection/>
  </div>
</template>

<style scoped></style>
