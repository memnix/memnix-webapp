<template>
  <label class='swap swap-rotate mr-3 text-secondary lg:mr-4 hoveranimation'>
    <input class='hidden' data-toggle-theme='memnix,dark' type='checkbox' />
    <Icon-lucide-sun :class='theme.value === "memnix" ? "swap-off": "swap-on"' class='fill-current'
                     style='font-size: 2em' />
    <Icon-lucide-moon :class='theme.value === "dark" ? "swap-on": "swap-off"' class=' fill-current'
                      style='font-size: 2em' />
  </label>
</template>

<script lang='ts' setup>
import { themeChange } from 'theme-change'

let theme = ref('memnix')

onMounted(() => {
  themeChange(false)
  theme.value = localStorage.getItem('theme')
})

</script>

<style scoped>

</style>