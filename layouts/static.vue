<template>
  <div id='app-layout'>
    <main>
      <UtilsHeader />
      <slot />
      <UtilsFooter />
    </main>
  </div>
</template>

<script lang='ts' setup>

useHead({
    link:
      [
        {
          rel: 'preconnect',
          href: 'https://www.youtube.com/'
        },
        {
          rel: 'preconnect',
          href: 'https://s.ytimg.com'
        }
      ]
  }
)

definePageMeta({
  layout: 'static'
})
</script>

<style scoped></style>
