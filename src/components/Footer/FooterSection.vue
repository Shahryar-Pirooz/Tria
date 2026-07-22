<template>
  <footer class="mt-10 border-t border-contrast/6 px-6 py-10">
    <div
      class="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:justify-between"
    >
      <!-- Brand -->
      <div class="flex flex-col gap-2">
        <span
          class="bg-linear-to-r from-brand via-brand-middle to-brand-accent bg-clip-text text-lg font-black text-transparent"
        >
          Tria
        </span>

        <p class="text-sm text-contrast/35">One secret. Every password.</p>
      </div>
    </div>

    <div
      class="mx-auto mt-8 flex max-w-5xl flex-col gap-3 border-t border-contrast/4 pt-6 text-xs text-contrast/25 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>No accounts. No password database. No cloud sync.</p>

      <p class="font-mono">© {{ new Date().getFullYear() }} Tria</p>
    </div>
  </footer>
</template>
