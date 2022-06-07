<template>
  <div id="app-layout">
    <main>
      <UtilsHeader />
      <slot />
      <UtilsFooter  />
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'static',
})
</script>

<style scoped></style>
