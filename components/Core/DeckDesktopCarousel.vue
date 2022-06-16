<template>
  <Carousel
    :items-to-show="numberOfItems"
    :mouse-drag="false"
    snap-align="start"
    class="h40 rounded-box z-0 py-2 md:h-64 lg:h-80"
  >
    <Slide v-for="deck in deckList" :key="deck">
      <div class="z-5 py-4">
        <CoreDeck :deck="deck" />
      </div>
    </Slide>
    <template #addons>
      <Navigation class="mx-5" />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

let numberOfItems = ref(7)

const computeNumber = () => {
  const number = window.innerWidth / 256
  if (number > 7.5) {
    numberOfItems.value = 7.5
  }
  else if (number > 4) {
    numberOfItems.value = number - 1
  } else {
    numberOfItems.value = number
  }
}

onMounted(() => {
  computeNumber()
  window.addEventListener('resize', ()=> {
    computeNumber()
  })
})

const props = defineProps({
  deckList: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped></style>
