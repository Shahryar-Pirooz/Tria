<script setup lang="ts"></script>

<template>
  <div
    class="relative isolate overflow-hidden bg-page bg-[linear-gradient(to_right,var(--color-content)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-content)_1px,transparent_1px)] bg-size-[40px_40px]"
  >
    <!-- Dark vignette -->
    <div class="pointer-events-none absolute inset-0 z-0 hero-vignette"></div>

    <!-- Blue glow -->
    <div class="pointer-events-none absolute inset-0 z-0 hero-glow"></div>

    <!-- Content -->
    <div class="relative z-10 py-20">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.hero-vignette {
  background: radial-gradient(
    ellipse at center,
    oklch(from var(--color-page) l c h / 0.98),
    var(--color-page)
  );
}

.hero-glow {
  background: radial-gradient(
    ellipse at center,
    oklch(from var(--color-brand) l c h / 0.09) 0%,
    transparent 70%
  );
}
</style>
