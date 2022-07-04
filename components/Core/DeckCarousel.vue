<template>
  <div class="carousel-center carousel rounded-box space-x-1 pt-4">
    <div
      class="carousel-item relative h-32 w-28 md:h-48 md:w-44 lg:h-72 lg:w-72"
      v-for="value in deckList" :key="value.id"
    >
      <div v-if="type === CarouselType.Today">
        <CoreDeck
          :deck="value"
          @click="openModalPlayDeck(value.ID)"
          :number_badge="store.getNumberOfCard(value.ID)"
        />
      </div>
      <div v-else-if="type === CarouselType.ToPlay">
        <NuxtLink :to="'/play?deck=' + value.Deck.ID">
          <CoreDeck :deck="value.Deck" />
        </NuxtLink>
      </div>
      <div v-else>
        <CoreDeck :deck="value.Deck" @click="setIsOpen(true)" />
      </div>
    </div>
  </div>
  <ModalPlayDeck
    v-if="modalPlayDeck"
    :cardList="cardList"
    @closeModalPlayDeck="closeModalPlayDeck"
  />

  <div
    class="modal modal-bottom sm:modal-middle"
    :class="isOpen ? 'modal-open' : ''"
  >
    <div class="modal-box">
      <h3 class="text-lg font-bold">Subscribe to this deck ?</h3>
      <p class="py-4">You will be able to play it</p>
      <div class="modal-action">
        <label @click="setIsOpen(false)" class="btn">No</label>
        <label @click="setIsOpen(false)" class="btn">Yes</label>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardResponseList, CarouselType } from '~/types'
import { useTodayStore } from '~/stores/todays'

const isOpen = ref(false)
const store = useTodayStore()
const emit = defineEmits(['refreshToday'])

function setIsOpen(value) {
  isOpen.value = value
}

const modalPlayDeck = ref(false)

function closeModalPlayDeck() {
  emit('refreshToday')
  modalPlayDeck.value = false
}
function openModalPlayDeck(value) {
  const store = useTodayStore()
  store.setIndex(value)
  cardList.value = store.getCurrentDeck
  
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

let cardList = ref(<CardResponseList>[])
</script>

<style scoped></style>
