<template>
  <div class="carousel-center carousel rounded-box space-x-1 pt-4">
    <div
      class="carousel-item relative h-32 w-28 md:h-48 md:w-44 lg:h-72 lg:w-72"
      v-for="value in deckList"
    >
      <div v-if="daily">
        <!--        
        <NuxtLink :to="'/play?deck=' + value.ID">
          <CoreDeck :deck="value" />
        </NuxtLink>
        -->
        <CoreDeck :deck="value" @click="setIsOpenFull(true)" />
      </div>
      <div v-else>
        <CoreDeck :deck="value" @click="setIsOpen(true)" />
      </div>
    </div>
  </div>
  <div
    class="modal h-screen"
    :class="isOpenFull ? 'modal-open' : ''"
  >
    <div class="h-screen w-screen modal-box max-h-screen !max-w-none	">
        <div class="flex flex-col items-center px-5 pt-2 md:pt-5 lg:px-20">
          <div class="hoveranimation absolute left-0 top-[0.5rem]">
            <button class="btn btn-ghost text-xl md:text-2xl lg:text-3xl" @click="setIsOpenFull(false)">
            <Icon-lucide-arrow-left  />
            </button>
          </div>
            <CoreCard :card="card" />
          <progress
            class="progress progress-primary max-w-xl"
            value="40"
            max="100"
          ></progress>
        </div>
    </div>
  </div>
  <div
    class="modal modal-bottom sm:modal-middle"
    :class="isOpen ? 'modal-open' : ''"
  >
    <div class="modal-box">
      <h3 class="text-lg font-bold">Subscribe to this deck ?</h3>
      <p class="py-4">You will be able to play it</p>
      <div class="modal-action">
        <label @click="setIsOpen(false)" class="btn">Yes</label>
        <label @click="setIsOpen(false)" class="btn">No</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '~/types'

const isOpen = ref(false)
function setIsOpen(value) {
  isOpen.value = value
}

const isOpenFull = ref(false)
function setIsOpenFull(value) {
  isOpenFull.value = value
}

const props = defineProps({
  deckList: {
    type: Array,
    required: true,
  },
  daily: {
    type: Boolean,
    default: false,
    required: true,
  },
})

let card = <Card>{
  ID: 1,
  card_question: "What's the best linux distro ?",
  card_image: 'https://api.lorem.space/image/movie?w=512&h=512&hash=500B67FB',
}

</script>

<style scoped></style>
