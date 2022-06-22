<template>
  <Html :lang="locale" >
    <Body
      class="transition-colors duration-300 "
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { LanguageManager } from '~/utils/lang'
import { themeChange } from 'theme-change'

onMounted(() => {
})

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
  ],
})
</script>
