<script setup lang="ts">
import AppButton from '../AppButton.vue'
</script>

<template>
  <div class="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-8">
    <h2 class="text-center text-5xl font-black leading-tight tracking-tight md:text-6xl">
      One secret.
      <br />

      <span
        class="bg-linear-to-r from-brand via-brand-middle to-brand-accent bg-clip-text text-transparent"
      >
        Every password.
      </span>
    </h2>

    <p class="text-center text-lg text-content-muted">
      No account needed. No email. Just open Tria and start.
    </p>

    <AppButton icon="ri-arrow-right-line" :is-accent="true">
      <a href="#passwordGenerator"> Start using Tria </a>
    </AppButton>

    <p class="font-mono text-xs text-content-muted">web app · open source</p>
  </div>
</template>
