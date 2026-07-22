
<script setup lang="ts">
const comparisons = [
  {
    feature: 'Stores a password database',
    traditional: true,
    tria: false,
  },
  {
    feature: 'Can be breached or leaked',
    traditional: true,
    tria: false,
  },
  {
    feature: 'Requires cloud sync',
    traditional: true,
    tria: false,
  },
  {
    feature: 'Works fully offline',
    traditional: false,
    tria: true,
  },
  {
    feature: 'Zero infrastructure to attack',
    traditional: false,
    tria: true,
  },
  {
    feature: 'Passwords derived, never stored',
    traditional: false,
    tria: true,
  },
]
</script>
<template>
  <div id="comparison" class="relative -top-16 invisible"></div>
  <div class="container px-2 md:mx-auto max-w-5xl py-32 flex flex-col gap-6">
    <div class="flex flex-col flex-nowrap space-y-2">
      <h3 class="uppercase text-sm font-jetbrains-mono text-muted-foreground">Comparison</h3>
      <h2 class="text-4xl md:text-5xl font-black text-foreground">Why stateless wins.</h2>
    </div>
    <div class="overflow-hidden rounded-2xl border border-white/6">
    <!-- Header -->
    <div
      class="grid grid-cols-3 border-b border-white/6 bg-[#0c0c0c] px-6 py-4"
    >
      <span />

      <span
        class="text-center font-mono text-xs font-semibold text-white/30"
      >
        Traditional
      </span>

      <span
        class="text-center font-mono text-xs font-semibold text-[#388ce7]"
      >
        Tria
      </span>
    </div>

    <!-- Rows -->
    <div
      v-for="(item, index) in comparisons"
      :key="item.feature"
      class="grid grid-cols-3 items-center px-6 py-4 transition-colors duration-200"
      :class="[
        index < comparisons.length - 1
          ? 'border-b border-white/4'
          : '',
        index % 2 === 0 ? 'bg-[#080808]' : 'bg-[#090909]',
      ]"
    >
      <span class="text-sm text-white/60">
        {{ item.feature }}
      </span>

      <div class="flex justify-center">
        <span
          class="rounded-full px-2.5 py-1 font-mono text-xs font-bold"
          :class="
            item.traditional
              ? 'bg-[#d4183d]/10 text-[#d4183d]'
              : 'bg-white/4 text-white/20'
          "
        >
          {{ item.traditional ? 'yes' : 'no' }}
        </span>
      </div>

      <div class="flex justify-center">
        <span
          class="rounded-full px-2.5 py-1 font-mono text-xs font-bold"
          :class="
            item.tria
              ? 'bg-[#3bdea8]/10 text-[#3bdea8]'
              : 'bg-white/4 text-white/20'
          "
        >
          {{ item.tria ? 'yes' : 'no' }}
        </span>
      </div>
    </div>
  </div>
  </div>
</template>
