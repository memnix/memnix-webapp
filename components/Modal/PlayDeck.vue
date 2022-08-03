<template>
  <div class="modal modal-open h-screen">
    <div class="modal-box h-screen max-h-screen w-screen !max-w-none">
      <div class="flex flex-col items-center px-5 pt-2 md:pt-5 lg:px-20">
        <div class="hoveranimation absolute left-0 top-[0.5rem]">
          <button
            class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
            @click="$emit('closeModalPlayDeck')"
          >
            <Icon-lucide-arrow-left />
          </button>
        </div>
        <CoreCard
          :card="card"
          :answers="answers"
          class="sm:pt-10 md:pt-4 lg:pt-3"
          @nextCardEvent="nextCardEvent"
        />
        <progress
          class="progress progress-primary max-w-xl"
          :value="progress"
          max="100"
        ></progress>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardResponse } from '~/types'
import { useTodayStore } from '~/stores/todays'

const store = useTodayStore()
let cardList
let card = ref(<Card>null)
let answers = ref(<string[]>[])
let card_index = 0
let progress = ref(0)
const emit = defineEmits(['closeModalPlayDeck'])

const selectCard = function () {
  if (cardList === null || cardList.length === 0) {
    store.deleteDeck(store.getIndex)
    emit('closeModalPlayDeck')
    return
  }
  if (card_index >= cardList.length) {
    card_index = 0
  }

  const cardResponse = <CardResponse>cardList[card_index]
  card.value = cardResponse.Card
  answers.value = cardResponse.Answers
}

cardList = store.getCurrentDeck

let rate = 100 / cardList.length
selectCard()

const nextCardEvent = function (validate: boolean) {
  if (validate) {
    progress.value += rate
    if (cardList.length === 1) {
      store.deleteDeck(store.getIndex)
      emit('closeModalPlayDeck')
      return
    } else {
      cardList.splice(card_index, 1)
    }
  } else {
    card_index++
  }
  selectCard()
}
</script>

<style scoped></style>
