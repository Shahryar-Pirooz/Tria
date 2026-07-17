<script setup lang="ts">
import { useId, ref } from 'vue'

const props = defineProps({ isScrolled: Boolean })
const id = useId()
const items = ref([
  { id, text: 'how it works', link: '#' },
  { id, text: 'security', link: '#' },
  { id, text: 'why Tria?', link: '#' },
])
</script>

<template>
  <header
    class="inset-x-0 flex justify-center py-4 transition-all duration-500"
    :class="!props.isScrolled ? 'noScroll' : 'scroll'"
  >
    <div class="max-w-5xl w-full mx-auto flex flex-row justify-between">
      <div class="flex-1">Tria</div>
      <div class="flex-1 flex flex-row flex-nowrap justify-center text-muted-foreground">
        <ul class="flex flex-row space-x-4">
          <li
            class="select-none hover:cursor-pointer hover:text-primary active:scale-95"
            v-for="item in items"
            :key="item.id"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="flex-1 flex flex-row flex-nowrap justify-end">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  </header>
</template>

<style>
.no-scroll {
  position: relative;
}
.scroll {
  position: fixed;
  background: rgba(8, 8, 8, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
