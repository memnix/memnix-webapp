<template>
  <div class="flex w-full flex-col justify-center">
    <div
      class="rounded-box relative mx-auto h-24 w-24 object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
    >
      <img
        :src="deck.deck_banner"
        width="512px"
        height="512px"
      />

      <span
        class="badge badge-sm badge-secondary absolute -top-2 -right-1 md:badge-md lg:badge-lg"
        >99+</span
      >
    </div>

    <div class="text-center">
      <span class="md:text-md text-xs lg:text-lg">{{ deck.deck_name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Deck } from '~/types'
const props = defineProps({
  deck: {
    type: Object,
    default: () =>
      <Deck>{
        deck_name: 'Python',
        deck_banner:
          'https://api.lorem.space/image/furniture?w=512&h=512&hash=8B7BCDC2',
      },
    required: true,
  },
})
</script>

<style scoped></style>
