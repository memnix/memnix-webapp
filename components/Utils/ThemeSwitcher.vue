<template>
  <label class="hoveranimation swap-rotate swap mr-3 text-secondary lg:mr-4">
    <input class="hidden" data-toggle-theme="memnix,dark" type="checkbox" />
    <Icon-lucide-sun
      :class="theme.value === 'dark' ? 'swap-on' : 'swap-off'"
      class="fill-current"
      style="font-size: 2em"
    />
    <Icon-lucide-moon
      :class="theme.value === 'memnix' ? 'swap-off' : 'swap-on'"
      class="swap-on fill-current"
      style="font-size: 2em"
    />
  </label>
</template>

<script lang="ts" setup>
import { themeChange } from 'theme-change'

let theme = ref('memnix')

onMounted(() => {
  themeChange(false)
  let data = localStorage.getItem('theme')
  theme.value = data ? data : 'memnix'
})
</script>

<style scoped></style>
