<template>
  <footer class="border-t border-white/6 px-6 py-10 mt-10">
    <div
      class="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:justify-between"
    >
      <!-- Brand -->
      <div class="flex flex-col gap-2">
        <span
          class="bg-linear-to-r from-[#388ce7] via-[#399fd9] to-[#3bdea8] bg-clip-text text-lg font-black text-transparent"
        >
          Tria
        </span>

        <p class="text-sm text-white/35">
          One secret. Every password.
        </p>
      </div>
    </div>

    <div
      class="mx-auto mt-8 flex max-w-5xl flex-col gap-3 border-t border-white/4 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>
        No accounts. No password database. No cloud sync.
      </p>

      <p class="font-mono">
        © {{ new Date().getFullYear() }} Tria
      </p>
    </div>
  </footer>
</template>
