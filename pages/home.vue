<template>
  <section class="bg-base-100" v-if="loaded">
    <div v-show="isMobile === true">
      <CoreDeckMobileSection
        :deckList="todayDeckList"
        :white="true"
        title="Daily decks"
        :type="CarouselType.Today"
        @refreshToday="refreshToday"
      />
      <CoreDeckMobileSection
        :deckList="availableDeckList"
        :white="false"
        title="Featured decks"
        :type="CarouselType.ToSubscribe"
        @refreshToday="refreshToday"
      />
      <CoreDeckMobileSection
        :deckList="myDecksList"
        :white="true"
        title="My decks"
        :type="CarouselType.ToPlay"
        @refreshToday="refreshToday"
      />
      <CoreDeckMobileSection
        :deckList="availableDeckList"
        :white="false"
        title="You might like"
        :type="CarouselType.ToSubscribe"
        @refreshToday="refreshToday"
      />
    </div>
    <div v-show="!isMobile">
      <CoreDeckDesktopSection
        :deckList="todayDeckList"
        :white="true"
        title="Daily decks"
        :type="CarouselType.Today"
        @refreshToday="refreshToday"
      />
      <CoreDeckDesktopSection
        :deckList="availableDeckList"
        :white="false"
        title="Featured decks"
        :type="CarouselType.ToSubscribe"
        @refreshToday="refreshToday"
      />
      <CoreDeckDesktopSection
        :deckList="myDecksList"
        :white="true"
        title="My decks"
        :type="CarouselType.ToPlay"
        @refreshToday="refreshToday"
      />
      <CoreDeckDesktopSection
        :deckList="availableDeckList"
        :white="false"
        title="You might like"
        :type="CarouselType.ToSubscribe"
        @refreshToday="refreshToday"
      />
    </div>
  </section>
  <section v-else>
    <h1>Loading...</h1>
  </section>
</template>

<script lang="ts" setup>
import {
  CarouselType,
  Deck,
  DeckList,
  SubDeckList,
  TodayResponse,
} from '~/types'
import { getAvailableDeck, getDeck, getSubDeck } from '~/api/deck.api'
import { todays } from '~/api/card.api'
import { useTodayStore } from '~/stores/todays'
import { useApiStore } from '~/stores/api'

definePageMeta({ layout: 'connected', middleware: ['auth'] })

let isMobile = ref(false)
let loaded = ref(false)
let myDecksList = ref(<SubDeckList>[])
let todayDeckList = ref(<DeckList>[])
let availableDeckList = ref(<SubDeckList>[])

async function refreshToday() {
  const apiStore = useApiStore()

  loaded.value = false
  if (apiStore.refreshMyDecks) {
    myDecksList.value = await getSubDeck().then((res) => {
      apiStore.refreshMyDecks = false
      return <SubDeckList>res.data || []
    })
  }

  if (apiStore.refreshAvailableDecks) {
    availableDeckList.value = await getAvailableDeck().then((res) => {
      apiStore.refreshAvailableDecks = false
      return <SubDeckList>res.data || []
    })
  }

  if (apiStore.refreshToday) {
    const data: TodayResponse = await todays()
    todayDeckList.value = []
    await handleData(data).then(() => {
      loaded.value = true
      apiStore.refreshToday = false
    })
  }

  loaded.value = true
}

onMounted(async () => {
  const apiStore = useApiStore()

  const data: TodayResponse = await todays()

  myDecksList.value = await getSubDeck().then((res) => {
    if (apiStore.refreshMyDecks) {
      apiStore.refreshMyDecks = false
    }
    return <SubDeckList>res.data || []
  })

  availableDeckList.value = await getAvailableDeck().then((res) => {
    if (apiStore.refreshAvailableDecks) {
      apiStore.refreshAvailableDecks = false
    }
    return <SubDeckList>res.data || []
  })

  await handleData(data).then(() => (loaded.value = true))

  isMobile.value = screen.width <= 768
  window.addEventListener('resize', () => {
    isMobile.value = screen.width <= 768
  })
})

const handleData = async function (todayResponse: TodayResponse) {
  const data = todayResponse.data
  const store = useTodayStore()
  for (let i = 0; i < data.count; i++) {
    const deck = await getDeck(data.decks_responses[i].deck_id)
    store.setDeck(
      data.decks_responses[i].deck_id,
      data.decks_responses[i].cards
    )
    todayDeckList.value.push(<Deck>deck.data)
  }
}
</script>
