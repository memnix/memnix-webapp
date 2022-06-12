<template>
  <div id="app-layout">
    <main>
      <UtilsHeader />
      <slot />
      <UtilsFooter />
    </main>
  </div>
</template>

<script setup lang="ts">

useHead({
    link:
      [
        {
          rel: 'preconnect',
          href: 'https://www.youtube.com/',
        },
        {
          rel: 'preconnect',
          href: 'https://s.ytimg.com'
        }
      ]
  }
)

definePageMeta({
  layout: 'static',
})
</script>

<style scoped></style>
