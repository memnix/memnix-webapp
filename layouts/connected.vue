<template>
  <div id="app-layout">
    <main>
      <slot />
      <UtilsBottomNavigation />
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'connected',
})
</script>

<style scoped></style>
