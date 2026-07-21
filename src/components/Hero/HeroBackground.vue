<script setup lang="ts">
</script>

<template>
  <div
    class="
      relative
      isolate
      min-h-screen
      overflow-hidden
      bg-background
      bg-[linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)]
      bg-size-[40px_40px]
    "
  >
    <!-- Dark vignette -->
    <div
      class="
        pointer-events-none
        absolute
        inset-0
        z-0
        bg-[radial-gradient(ellipse_at_center,rgba(8,8,8,0.98),rgba(8,8,8,1))]
      "
    ></div>

    <!-- Blue glow -->
    <div
      class="
        pointer-events-none
        absolute
        inset-0
        z-0
        bg-[radial-gradient(ellipse_at_center,rgba(56,140,231,0.09)_0%,transparent_70%)]
      "
    ></div>

    <!-- Content -->
    <div class="relative z-10 py-20">
      <slot />
    </div>
  </div>
</template>
