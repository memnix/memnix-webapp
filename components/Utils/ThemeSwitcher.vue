<template>
  <label class="swap swap-rotate mr-3 text-secondary lg:mr-4">
    <input type="checkbox" class="hidden" data-toggle-theme="memnix,dark" />
    <Icon-lucide-sun class="fill-current" style="font-size: 2em" :class='theme.value === "memnix" ? "swap-off": "swap-on"'/>
    <Icon-lucide-moon class=" fill-current" style="font-size: 2em" :class='theme.value === "dark" ? "swap-on": "swap-off"'/>
  </label>
</template>

<script setup lang='ts'>

let theme = ref("memnix")
onMounted(() => {
  theme.value = localStorage.getItem("theme")
})

</script>

<style scoped>

</style>