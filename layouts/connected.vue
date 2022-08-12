<template>
  <div id='app-layout'>
    <main>
      <HeaderConnected class='sticky top-0 z-10' />
      <slot class='z-0' />
      <UtilsBottomNavigation />
    </main>
  </div>
</template>

<script lang='ts' setup>
import HeaderConnected from '~/components/Utils/HeaderConnected.vue'

definePageMeta({
  layout: 'connected'
})

useHead({
  bodyAttrs: {
    class: 'no-scrollbar'
  }
})
</script>

<style scoped></style>
