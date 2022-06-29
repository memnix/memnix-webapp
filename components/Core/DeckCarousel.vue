<template>
  <div class="carousel-center carousel rounded-box space-x-1 pt-4">
    <div
      class="carousel-item relative h-32 w-28 md:h-48 md:w-44 lg:h-72 lg:w-72"
      v-for="value in deckList"
    >
      <div v-if="type === CarouselType.Today">
        <CoreDeck :deck="value" @click="openModalPlayDeck" />
      </div>
      <div v-else-if="type === CarouselType.ToPlay">
        <NuxtLink :to="'/play?deck=' + value.ID">
          <CoreDeck :deck="value" />
        </NuxtLink>
      </div>
      <div v-else>
        <CoreDeck :deck="value" @click="setIsOpen(true)" />
      </div>
    </div>
  </div>
  <ModalPlayDeck v-if="modalPlayDeck" :cardList='cardList' @closeModalPlayDeck='closeModalPlayDeck'/>

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
import { CardResponse, CardResponseList, CarouselType, LearningStage, Card, } from '~/types'

const isOpen = ref(false)
function setIsOpen(value) {
  isOpen.value = value
}

const modalPlayDeck = ref(false)
function closeModalPlayDeck() {
  modalPlayDeck.value = false
}
function openModalPlayDeck() {
  modalPlayDeck.value = true
}

const props = defineProps({
  deckList: {
    type: Array,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
})

let cardList = <CardResponseList>[
  <CardResponse>{
    card: <Card>{
      ID: 1,
      card_question: 'What\'s the best linux distro ?',
      card_image: 'https://api.lorem.space/image/movie?w=512&h=512&hash=500B67FB',
    },
    answers: ['toto', 'titi', 'tata', 'tutu'],
    learning_stage: LearningStage.StageLearning
  },
]


</script>

<style scoped></style>
