<template>
  <Html :lang="locale">
  <Body
    class=" duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
  >
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </Body>
  </Html>
</template>

<script lang="ts" setup>
import { LanguageManager } from '~/utils/lang'
const languageManager = LanguageManager()
const locale = useState<string>('locale.setting')
</script>