<script setup lang="ts">
import AppButton from '../AppButton.vue';
import HeroBackground from './HeroBackground.vue';

</script>

<template>
  <HeroBackground>
    <div class="flex flex-col justify-center items-center container mx-auto p-16 gap-6">
      <div class="inline-flex space-x-4 ring-2 ring-ring rounded-4xl px-3 py-px bg-primary/40 text-primary items-center">
        <div class="size-2 rounded-full bg-primary shadow-[0_0_8px_2px] shadow-primary/50"></div>
        <span class="text-center text-sm">Stateless · No database · Open source</span>
      </div>
       <h1 class="text-center text-foreground text-7xl font-black"><span>Passwords derived.</span><br/><span class="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Never stored.</span></h1>
       <p class="text-muted-foreground text-center text-2xl">Tria generates your passwords on the fly from a single<br/>secret you keep in your head. No vault. No sync. Nothing to breach.</p>
      <div>
        <AppButton :is-accent="false" icon="ri-github-line">View Source</AppButton>
      </div>
      </div>
  </HeroBackground>
</template>
