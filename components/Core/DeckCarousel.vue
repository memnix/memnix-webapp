<template>
  <div class="carousel-center carousel rounded-box space-x-1 pt-4">
    <div
      class="carousel-item relative h-32 w-28 md:h-48 md:w-44 lg:h-72 lg:w-72"
      v-for="value in deckList" :key="value.ID"
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
        <CoreDeck :deck="value.Deck" @click="openModalSubConfirmation(value.Deck)" />
      </div>
    </div>
  </div>
  <ModalPlayDeck
    v-if="modalPlayDeck"
    :cardList="cardList"
    @closeModalPlayDeck="closeModalPlayDeck"
  />

  <ModalSubConfirmation
    v-if="modalSubConfirmation"
    :deck='selectedDeck'
    @closeModalSubConfirmation="closeModalSubConfirmation"/>
</template>

<script setup lang="ts">
import { CardResponseList, CarouselType, DeckList, SubDeckList } from '~/types'
import { useTodayStore } from '~/stores/todays'
import { useApiStore } from '~/stores/api'
import { PropType } from '@vue/runtime-core'

const modalSubConfirmation = ref(false)
const selectedDeck = ref({})
const store = useTodayStore()
const emit = defineEmits(['refreshToday'])


function openModalSubConfirmation(deck) {
  selectedDeck.value = deck
  modalSubConfirmation.value = true
}

function closeModalSubConfirmation() {
  emit('refreshToday')
  selectedDeck.value = {}
  modalSubConfirmation.value = false
}

const modalPlayDeck = ref(false)

function closeModalPlayDeck() {
  const apiStore = useApiStore()
  apiStore.refreshToday = true
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
    type: Array as PropType<DeckList | SubDeckList> ,
    required: true,
  },
  type: {
    type: Number as PropType<CarouselType>,
    required: true,
  },
})

let cardList = ref(<CardResponseList>[])
</script>

<style scoped></style>
