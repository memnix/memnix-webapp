<template>
  <div class="carousel-center carousel rounded-box space-x-1 pt-4">
    <div
      class="carousel-item relative h-32 w-28 md:h-48 md:w-44 lg:h-72 lg:w-72"
      v-for="value in deckList"
    >
      <CoreDeck :deck="value" />

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
