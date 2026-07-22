<script lang="ts"></script>
<template>
  <div id="steps" class="relative -top-16 invisible"></div>
  <div
    class="container flex max-w-5xl flex-col gap-6 border-t border-contrast/7 px-2 py-32 md:mx-auto"
  >
    <div class="flex flex-col flex-nowrap space-y-2">
      <h3 class="uppercase text-sm font-jetbrains-mono">how it work</h3>
      <h2 class="text-4xl font-black text-content md:text-5xl">Three steps.</h2>
      <h2 class="text-4xl font-black text-content-muted md:text-5xl">Zero compromises.</h2>
    </div>
    <div class="grid grid-cols-1 grid-rows-3 py-8 text-content-muted md:grid-cols-3 md:grid-rows-1">
      <div class="flex flex-col space-y-5 rounded-lg px-10 py-5 hover:bg-surface">
        <span class="font-jetbrains-mono text-4xl font-bold text-step">01</span>
        <span class="text-lg font-bold text-content">Set a master secret</span>
        <span class="text-justify"
          >Choose one strong passphrase you'll remember. It never leaves your device ever. Tria
          never sees it, stores it, or transmits it.</span
        >
      </div>
      <div
        class="flex flex-col space-y-5 rounded-lg border-y border-x-0 border-contrast/7 px-10 py-5 hover:bg-surface md:border-x md:border-y-0"
      >
        <span class="font-jetbrains-mono text-4xl font-bold text-step">02</span>
        <span class="text-lg font-bold text-content">Open any site</span>
        <span class="text-justify"
          >Navigate to a site. Tria reads the domain and runs a cryptographic derivation function
          with your secret as the key.</span
        >
      </div>
      <div class="flex flex-col space-y-5 rounded-lg px-10 py-5 hover:bg-surface">
        <span class="font-jetbrains-mono text-4xl font-bold text-step">03</span>
        <span class="text-lg font-bold text-content">Get your password</span>
        <span class="text-justify"
          >A deterministic, strong password appears instantly. Same inputs always produce the same
          output — no storage required.</span
        >
      </div>
    </div>
  </div>
</template>
