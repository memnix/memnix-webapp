<template>
  <Carousel
    :items-to-show="numberOfItems"
    :mouse-drag="false"
    snap-align="start"
    class="h40 rounded-box z-0 py-2 md:h-64 lg:h-80"
  >
    <Slide v-for="deck in deckList" :key="deck">
      <div class="z-5 py-4" v-if="type === CarouselType.Today">
        <CoreDeck
          :deck="deck"
          @click="openModalPlayDeck(deck.ID)"
          :number_badge="store.getNumberOfCard(deck.ID)"
        />
      </div>
      <div class="z-5 py-4" v-else-if="type === CarouselType.ToPlay">
        <NuxtLink :to="'/play?deck=' + deck.Deck.ID">
          <CoreDeck :deck="deck.Deck" />
        </NuxtLink>
      </div>
      <div class="z-5 py-4" v-else>
        <CoreDeck
          :deck="deck.Deck"
          @click="openModalSubConfirmation(deck.Deck)"
        />
      </div>
    </Slide>
    <template #addons>
      <Navigation class="mx-5" />
    </template>
  </Carousel>
  <ModalPlayDeck
    v-if="modalPlayDeck"
    :cardList="cardList"
    @closeModalPlayDeck="closeModalPlayDeck"
  />
  <ModalSubConfirmation
    v-if="modalSubConfirmation"
    :deck="selectedDeck"
    @closeModalSubConfirmation="closeModalSubConfirmation"
  />
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { CardResponseList, CarouselType, DeckList, SubDeckList } from '~/types'
import { useTodayStore } from '~/stores/todays'
import { useApiStore } from '~/stores/api'
import { PropType } from '@vue/runtime-core'

const isOpen = ref(false)
const emit = defineEmits(['refreshToday'])
const modalSubConfirmation = ref(false)
const selectedDeck = ref({})

let numberOfItems = ref(7)
const store = useTodayStore()

function openModalSubConfirmation(deck) {
  selectedDeck.value = deck
  modalSubConfirmation.value = true
}

function closeModalSubConfirmation() {
  selectedDeck.value = {}
  modalSubConfirmation.value = false
  emit('refreshToday')
}

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

const modalPlayDeck = ref(false)

function closeModalPlayDeck() {
  const apiStore = useApiStore()
  apiStore.refreshToday = true
  emit('refreshToday')
  modalPlayDeck.value = false
}

function openModalPlayDeck(value) {
  store.setIndex(value)
  modalPlayDeck.value = true
}

onMounted(() => {
  computeNumber()
  window.addEventListener('resize', () => {
    computeNumber()
  })
})

const props = defineProps({
  type: {
    type: Number as PropType<CarouselType>,
    required: true,
  },
  deckList: {
    type: Array as PropType<DeckList | SubDeckList>,
    required: true,
  },
})

let cardList = ref(<CardResponseList>[])
</script>

<style scoped></style>
