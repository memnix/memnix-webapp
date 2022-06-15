<template>
  <div class="carousel-center carousel rounded-box space-x-1 pt-4 md:pt-4">
    <div
      class="carousel-item relative h-32 w-28 md:h-48 md:w-44 lg:h-72 lg:w-72"
      v-for="value in deckList"
    >
      <CoreDeck :deck="value" />
      <span
        class="badge badge-sm badge-secondary absolute -top-2 right-0 md:badge-md lg:badge-lg"
        >99+</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  deckList: {
    type: Array,
    required: true,
  },
})


</script>

<style scoped></style>
