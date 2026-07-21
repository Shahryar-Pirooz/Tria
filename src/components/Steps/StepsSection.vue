<script lang="ts"></script>
<template>
  <div id="steps" class="relative -top-16 invisible"></div>
  <div class="container mx-auto max-w-5xl py-32 flex flex-col gap-6 border-t border-border">
    <div class="flex flex-col flex-nowrap space-y-2">
      <h3 class="uppercase text-sm font-jetbrains-mono">how it work</h3>
      <h2 class="text-4xl md:text-5xl font-black text-foreground">Three steps.</h2>
      <h2 class="text-4xl md:text-5xl font-black text-muted-foreground">Zero compromises.</h2>
    </div>
    <div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 text-muted-foreground py-8">
      <div class="flex flex-col px-10 py-5 space-y-5 hover:bg-card rounded-lg border-x border-border">
        <span class="font-jetbrains-mono text-4xl font-bold text-switch-background">01</span>
        <span class="font-bold text-foreground text-lg">Set a master secret</span>
        <span class="text-justify">Choose one strong passphrase you'll remember. It never leaves your device ever. Tria never sees it, stores it, or transmits it.</span>
      </div>
      <div class="flex flex-col px-10 py-5 space-y-5 hover:bg-card rounded-lg border-x border-border">
        <span class="font-jetbrains-mono text-4xl font-bold text-switch-background">02</span>
        <span class="font-bold text-foreground text-lg">Open any site</span>
        <span class="text-justify">Navigate to a site. Tria reads the domain and runs a cryptographic derivation function with your secret as the key.</span>
      </div>
      <div class="flex flex-col px-10 py-5 space-y-5 hover:bg-card rounded-lg border-x border-border">
        <span class="font-jetbrains-mono text-4xl font-bold text-switch-background">03</span>
        <span class="font-bold text-foreground text-lg">Get your password</span>
        <span class="text-justify">A deterministic, strong password appears instantly. Same inputs always produce the same output — no storage required.</span>
      </div>
    </div>
  </div>
</template>
