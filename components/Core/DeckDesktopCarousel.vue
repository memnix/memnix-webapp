<template>
  <Carousel
    :items-to-show="numberOfItems"
    :mouse-drag="false"
    snap-align="start"
    class="h40 rounded-box z-0 py-2 md:h-64 lg:h-80"
  >
    <Slide v-for="deck in deckList" :key="deck">
      <div class="z-5 py-4" v-if="daily">
        <NuxtLink :to="'/play?deck=' + deck.ID">
        <CoreDeck :deck="deck" />
        </NuxtLink>
      </div>
      <div class="z-5 py-4" v-else>
        <CoreDeck :deck="deck"  @click="setIsOpen(true)" />
      </div>
    </Slide>
    <template #addons>
      <Navigation class="mx-5" />
    </template>
  </Carousel>
  <div class="modal modal-bottom sm:modal-middle" :class='isOpen ? "modal-open"	: ""'>
    <div class="modal-box">
      <h3 class="font-bold text-lg">Subscribe to this deck ?</h3>
      <p class="py-4">You will be able to play it</p>
      <div class="modal-action">
        <label @click="setIsOpen(false)" class="btn">Yes</label>
        <label @click="setIsOpen(false)" class="btn">No</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'


const isOpen = ref(false)

let numberOfItems = ref(7)

const computeNumber = () => {
  const number = window.innerWidth / 256
   if (number > 7.5) {
    numberOfItems.value = 7.5
  } else if (number > 4) {
    numberOfItems.value = number - 1
  } else {
    numberOfItems.value = number
  }
}

function setIsOpen(value) {
  isOpen.value = value
}

onMounted(() => {
  computeNumber()
  window.addEventListener('resize', () => {
    computeNumber()
  })
})

const props = defineProps({
  daily: {
    type: Boolean,
    default: false,
    required: true,
  },
  deckList: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped></style>
