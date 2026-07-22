<script setup lang="ts">
import { ref } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/Hero/HeroSection.vue'
import StepsSection from './components/Steps/StepsSection.vue'
import MathSection from './components/math/MathSection.vue'
import ComparisonSection from './components/Comparison/ComparisonSection.vue'
const isScroll = ref(false)
window.addEventListener('scroll', () => {
  isScroll.value = window.scrollY !== 0
})
</script>

<template>
  <AppNavbar :is-scrolled="isScroll" />
  <div class="text-primary" ref="body">
    <HeroSection/>
    <StepsSection/>
    <MathSection/>
    <ComparisonSection/>
  </div>
</template>

<style>
* {
  scroll-behavior: smooth;
}
</style>
