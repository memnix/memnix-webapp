<template>
  <Html :lang="locale">
    <Body class="transition-colors duration-300">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { LanguageManager } from '~/utils/lang'
import { themeChange } from 'theme-change'

onMounted(() => {})

const languageManager = LanguageManager()
const locale = useState<string>('locale.setting')

useHead({
  title: 'Memnix app',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: true,
    },
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'theme-color',
      content: '#ffffff',
    },
  ],
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'description',
      content: 'A spaced repetition learning app',
    },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: 'Memnix App' },
    {
      name: 'og:description',
      content: 'A spaced repetition learning app',
    },
    {
      name: 'og:image',
      content: '/icon.png',
    },
    { name: 'og:url', content: 'https://memnix.app' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Memnix App' },
    {
      name: 'twitter:description',
      content: 'A spaced repetition learning app.',
    },
    {
      name: 'twitter:image',
      content: '/icon.png',
    },
    { name: 'twitter:url', content: 'https://memnix.app' },
    { name: 'googlebot', content: 'notranslate' },
    { name: 'theme-color', content: '#E9AF98' },
  ],
})
</script>
