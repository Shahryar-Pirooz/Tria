<script setup lang="ts">
import AppButton from '../AppButton.vue'
</script>

<template>
  <section class="mx-auto max-w-5xl px-6 py-28">
    <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <!-- Content -->
      <div class="flex flex-col gap-6">
        <span class="font-mono text-xs font-semibold uppercase tracking-widest text-content-muted">
          Trust
        </span>

        <h2 class="text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Don't trust us.
          <br />

          <span class="text-content-muted"> Read the code. </span>
        </h2>

        <p class="text-base leading-relaxed text-content-muted">
          Tria is fully open source. Every line of the derivation logic, every UI interaction, every
          browser extension — public and auditable. Security through obscurity isn't security.
        </p>

        <div class="w-full max-w-xl">
          <AppButton icon="ri-github-line" :is-accent="false">
            <a href="https://github.com/Shahryar-Pirooz/Tria" class=""> github.com/tria </a>
          </AppButton>
        </div>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 gap-3">
        <div
          class="flex flex-col gap-2 rounded-xl border border-contrast/5 bg-panel p-6 transition-colors duration-200"
        >
          <span class="gradient-text text-2xl font-black"> 0 </span>

          <div>
            <p class="text-sm font-semibold text-content">bytes stored</p>

            <p class="text-xs text-contrast/35">on any server</p>
          </div>
        </div>

        <div
          class="flex flex-col gap-2 rounded-xl border border-contrast/5 bg-panel p-6 transition-colors duration-200"
        >
          <span class="gradient-text text-2xl font-black"> 100% </span>

          <div>
            <p class="text-sm font-semibold text-content">client-side</p>

            <p class="text-xs text-contrast/35">derivation</p>
          </div>
        </div>

        <div
          class="flex flex-col gap-2 rounded-xl border border-contrast/5 bg-panel p-6 transition-colors duration-200"
        >
          <span class="gradient-text text-2xl font-black"> MIT </span>

          <div>
            <p class="text-sm font-semibold text-content">licensed</p>

            <p class="text-xs text-contrast/35">fully open</p>
          </div>
        </div>

        <div
          class="flex flex-col gap-2 rounded-xl border border-contrast/5 bg-panel p-6 transition-colors duration-200"
        >
          <span class="gradient-text text-2xl font-black"> Argon2id </span>

          <div>
            <p class="text-sm font-semibold text-content">HMAC-SHA-256</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(
    120deg,
    var(--color-brand) 0%,
    var(--color-brand-middle) 45%,
    var(--color-brand-accent) 100%
  );

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
