<script setup lang="ts">
import AppButton from '../AppButton.vue'
import WindowBoard from '../Window/WindowBoard.vue'
import HeroBackground from './HeroBackground.vue'
import { motion } from 'motion-v'
import type { Data } from '@/types/Data.js'
import { reactive, ref } from 'vue'
import passwordGenerator from '@/utils/password_generator'
import { useClipboard } from '@vueuse/core'

const data = reactive<Data>({
  domain: '',
  name: '',
  masterCode: '',
})

const output = ref('')
const isGenerating = ref(false)
const error = ref('')
const copied = ref(false)
const inputBaseClasses =
  'rounded-xl border border-contrast/7 bg-field px-4 py-2 text-sm outline-none transition-colors'
useClipboard({ source: output.value })
const generatePassword = async (): Promise<void> => {
  error.value = ''
  isGenerating.value = true

  try {
    const pass = await passwordGenerator(data.name, data.masterCode, data.domain)
    output.value = pass
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to generate password'
  } finally {
    isGenerating.value = false
  }
}
</script>

<template>
  <HeroBackground>
    <div class="flex flex-col justify-center items-center container mx-auto pt-16 md:p-16 gap-6">
      <motion.div
        :initial="{ y: 40, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{
          duration: 1.1,
        }"
        class="inline-flex items-center space-x-4 rounded-4xl bg-brand/40 px-3 py-px text-brand ring-2 ring-brand"
      >
        <div class="size-2 rounded-full bg-brand shadow-[0_0_8px_2px] shadow-brand/50"></div>
        <span class="text-center text-sm font-jetbrains-mono"
          >Stateless · No database · Open source</span
        >
      </motion.div>
      <motion.div
        :initial="{ y: 40, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{
          delay: 0.2,
          duration: 1.1,
        }"
      >
        <h1 class="text-center text-5xl font-black text-content md:text-7xl">
          <span>Passwords derived.</span><br /><span
            class="bg-linear-to-r from-brand to-brand-accent bg-clip-text text-5xl text-transparent md:text-7xl"
            >Never stored.</span
          >
        </h1>
      </motion.div>
      <motion.div
        :initial="{ y: 40, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{
          delay: 0.3,
          duration: 1,
        }"
      >
        <p class="text-center text-lg text-content-muted md:text-2xl">
          Tria generates your passwords on the fly from a single<br />secret you keep in your head.
          No vault. No sync. Nothing to breach.
        </p>
      </motion.div>
      <motion.div
        :initial="{ y: 40, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{
          delay: 0.4,
          duration: 1,
        }"
      >
        <AppButton :is-accent="false" icon="ri-github-line">View Source</AppButton>
      </motion.div>
    </div>
    <div id="passwordGenerator" class="relative -top-32 invisible">1</div>
    <div class="grid place-items-center my-10 mx-2">
      <motion.div
        :initial="{ y: -40, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{
          delay: 0.1,
          duration: 1,
        }"
      >
        <WindowBoard title="tria · derive" has3-btn>
          <form class="flex w-full flex-col" @submit.prevent="generatePassword">
            <div class="border-b border-contrast/7">
              <p class="p-4 text-xs/7 italic text-content-muted lg:text-sm">
                f(
                <span class="rounded bg-brand/20 px-2 not-italic text-brand"> secret </span> ,
                <span class="rounded bg-info/20 px-2 not-italic text-info"> username </span>
                ,
                <span class="rounded bg-brand-accent/20 px-2 not-italic text-brand-accent">
                  domain
                </span>
                ) →
                <span class="not-italic text-content"> Password </span>
              </p>
            </div>
            <div class="flex flex-col gap-4 p-4">
              <div class="flex flex-col gap-3 lg:flex-row">
                <div class="flex flex-1 flex-col gap-1">
                  <label for="secret" class="text-sm text-content-muted"> Secret </label>
                  <input
                    id="secret"
                    v-model="data.masterCode"
                    :class="[inputBaseClasses, 'text-brand caret-brand focus:border-brand']"
                    type="password"
                    name="secret"
                    autocomplete="current-password"
                    placeholder="Your secret"
                    required
                  />
                </div>
                <div class="flex flex-1 flex-col gap-1">
                  <label for="username" class="text-sm text-content-muted"> Username </label>
                  <input
                    id="username"
                    v-model="data.name"
                    :class="[inputBaseClasses, 'text-info caret-info focus:border-info']"
                    type="text"
                    name="username"
                    autocomplete="username"
                    placeholder="Your username"
                    required
                  />
                </div>
                <div class="flex flex-1 flex-col gap-1">
                  <label for="domain" class="text-sm text-content-muted"> Domain </label>
                  <input
                    id="domain"
                    v-model="data.domain"
                    :class="[
                      inputBaseClasses,
                      'text-brand-accent caret-brand-accent focus:border-brand-accent',
                    ]"
                    type="text"
                    name="domain"
                    autocomplete="url"
                    placeholder="facebook.com"
                    required
                  />
                </div>
              </div>
              <div
                class="flex min-w-0 max-w-full items-center gap-3 overflow-hidden rounded-xl border border-contrast/7 bg-field px-4 py-2 text-sm"
              >
                <button
                  type="submit"
                  class="shrink-0 cursor-pointer text-brand transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="isGenerating"
                >
                  {{ isGenerating ? 'Deriving...' : 'Generate' }}
                </button>

                <output
                  class="min-w-0 flex-1 break-all text-right text-content-muted selection:bg-transparent selection:text-brand"
                  aria-live="polite"
                >
                  {{ isGenerating ? 'Deriving password...' : output }}
                </output>
              </div>

              <p v-if="error" class="text-center text-sm text-danger" role="alert">
                {{ error }}
              </p>
            </div>
            <span class="pb-3 text-center text-xs text-content-muted">
              Nothing is stored · Nothing is sent · Try a different domain
            </span>
          </form>
        </WindowBoard>
      </motion.div>
      <motion.div
        :initial="{ opacity: 0, right: -10 }"
        :animate="{ opacity: 1, right: 100 }"
        v-if="copied"
        class="fixed right-4 bottom-4 z-50 w-fit rounded-2xl bg-window p-4 text-content shadow shadow-brand/50"
        >Copied!</motion.div
      >
    </div>
  </HeroBackground>
</template>
