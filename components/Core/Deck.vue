<template>
  <div
    class="hoveranimation flex w-full flex-col justify-center hover:cursor-pointer"
  >
    <div class="rounded-box relative mx-auto">
      <img
        :src="deck.deck_banner"
        alt="deck image url"
        class="h-24 w-24 object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
      />

      <span
        v-if="number_badge !== 0"
        class="badge badge-sm badge-secondary absolute -top-2 -right-1 md:badge-md lg:badge-lg"
        >{{number_badge}}</span
      >
    </div>

    <div class="text-center">
      <span class="md:text-md text-xs lg:text-lg">{{ deck.deck_name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  deck: {
    type: Object,
    required: true,
  },
  number_badge: {
    type: Number,
    required: false,
    default: 0,
  },
})
</script>

<style scoped></style>
