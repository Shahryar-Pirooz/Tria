<script setup lang="ts">
import WindowBoard from '../Window/WindowBoard.vue'
</script>

<template>
  <div id="math" class="relative top-32"></div>
  <section class="container px-px lg:mx-auto flex flex-col lg:flex-row max-w-5xl gap-10 lg:gap-16">
    <!-- Explanation -->
    <div class="flex px-2 flex-col justify-center text-center lg:text-start">
      <p class="mb-6 font-jetbrains-mono text-xs uppercase tracking-[0.2em] text-brand">The Math</p>
      <h2 class="text-4xl font-black tracking-tight text-content">One secret.</h2>
      <h2
        class="bg-linear-to-r from-brand to-brand-accent bg-clip-text text-4xl font-black text-transparent"
      >
        Every password.
      </h2>

      <p class="mt-8 text-sm leading-7 text-content-muted">
        Tria does not store your passwords. It derives them. The same secret, username, and domain
        always produce the same result.
      </p>

      <div class="mt-10 space-y-6 text-center lg:text-start">
        <div class="flex lg:gap-4 flex-col lg:flex-row">
          <span class="font-jetbrains-mono text-sm text-brand-accent">01</span>
          <div>
            <h3 class="font-medium text-content">Derive</h3>

            <p class="mt-1 text-sm leading-6 text-content-muted">
              Argon2id transforms your master secret into a cryptographic key.
            </p>
          </div>
        </div>

        <div class="flex lg:gap-4 flex-col lg:flex-row">
          <span class="font-jetbrains-mono text-sm text-brand-accent">02</span>
          <div>
            <h3 class="font-medium text-content">Separate</h3>

            <p class="mt-1 text-sm leading-6 text-content-muted">
              Your domain and username determine which account-specific value is generated.
            </p>
          </div>
        </div>

        <div class="flex lg:gap-4 flex-col lg:flex-row">
          <span class="font-jetbrains-mono text-sm text-brand-accent">03</span>
          <div>
            <h3 class="font-medium text-content">Generate</h3>

            <p class="mt-1 text-sm leading-6 text-content-muted">
              HMAC-SHA-256 produces deterministic bytes that become your password.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Code -->
    <div class="w-full inline-flex justify-center">
      <WindowBoard title="password_generator.ts" :has3-btn="false" class="min-w-0">
        <div class="min-w-0 overflow-x-auto">
          <pre
            class="min-w-max font-jetbrains-mono text-xs leading-7 sm:text-sm"
          ><code><span class="text-brand">async function</span> <span class="text-brand-accent">derive</span>(
  secret: <span class="text-brand">string</span>,
  username: <span class="text-brand">string</span>,
  domain: <span class="text-brand">string</span>
  ) { <span class="text-brand">const</span> key = <span class="text-brand">await</span> <span class="text-brand-accent">argon2id</span>(
  secret, <span class="text-content-muted">'tria/v1/master-key'</span>
)

<span class="text-brand">const</span> account = <span class="text-content-muted">`${domain}:${username}`</span>

<span class="text-brand">const</span> bytes = <span class="text-brand-accent">hmacSha256</span>(
key,
account
)

<span class="text-brand">return</span> <span class="text-brand-accent">generatePassword</span>(
bytes, <span class="text-brand">18</span>
)
}</code></pre>
        </div>
      </WindowBoard>
    </div>
  </section>
</template>
