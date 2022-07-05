<template>
  <div class="max-h-screen" v-if="loaded">
    <div class="flex flex-col items-center px-5 pt-2 md:pt-5 lg:px-20">
      <div class="hoveranimation absolute left-0 top-[0.5rem]">
        <NuxtLink
          class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
          to="/home"
        >
          <Icon-lucide-arrow-left />
        </NuxtLink>
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
  <section v-else>
    <h1>Loading...</h1>
  </section>
</template>

<script setup lang="ts">
import { Card, CardResponse, TrainingCardsList } from '~/types'
import { themeChange } from 'theme-change'
import { getTrainingCards } from '~/api/card.api'

const route = useRoute()
let cardList
let answers = ref(<string[]>[])
let card_index = 0
let progress = ref(0)
let card = ref(<Card>null)
let loaded = ref(false)
let rate = 0

const selectCard = function () {
  if (card_index >= cardList.length || cardList.length === 0) {
     return navigateTo('/home')
  }

  const cardResponse = <CardResponse>cardList[card_index]
  card.value = cardResponse.Card
  answers.value = cardResponse.Answers === null ? [] : cardResponse.Answers
}

const loadCards = async function () {
  cardList = await getTrainingCards(route.query['deck']).then((res) => {
    rate = 100 / res.count
    return <TrainingCardsList>res.data || []
  })
  selectCard()
  loaded.value = true
}

const nextCardEvent = function (validate: boolean) {
  if (validate) {
    progress.value += rate
  }
  card_index++

  selectCard()
}

onMounted(() => {
  themeChange(false)
  loadCards()
})
</script>

<style scoped></style>
