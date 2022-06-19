<template>
  <label class="swap swap-rotate mr-3 text-secondary lg:mr-4 hoveranimation">
    <input type="checkbox" class="hidden" data-toggle-theme="memnix,dark" />
    <Icon-lucide-sun class="fill-current" style="font-size: 2em" :class='theme.value === "memnix" ? "swap-off": "swap-on"'/>
    <Icon-lucide-moon class=" fill-current" style="font-size: 2em" :class='theme.value === "dark" ? "swap-on": "swap-off"'/>
  </label>
</template>

<script setup lang='ts'>
import { themeChange } from 'theme-change'

let theme = ref("memnix")

onMounted(() => {
  themeChange(false)
  theme.value = localStorage.getItem("theme")
  console.log(theme.value)
})

</script>

<style scoped>

</style>