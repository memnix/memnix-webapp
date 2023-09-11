<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  useHead({
    script: [
      {
        src: "https://umami.memnix.app/script.js",
        "data-website-id": "ba949ed3-9c0b-4c8c-901a-33eebcb67d49",
        async: true,
      },
    ],
  })
</script>