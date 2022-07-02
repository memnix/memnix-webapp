<template>
  <section class="bg-base-100" v-if="loaded">
    <div v-show="isMobile === true">
      <CoreDeckMobileSection
        :deckList="todayDeckList"
        :white="true"
        title="Daily decks"
        :type="CarouselType.Today"

      />
      <CoreDeckMobileSection
        :deckList="availableDeckList"
        :white="false"
        title="Featured decks"
        :type="CarouselType.ToSubscribe"

      />
      <CoreDeckMobileSection
        :deckList="myDecksList"
        :white="true"
        title="My decks"
        :type="CarouselType.ToPlay"

      />
      <CoreDeckMobileSection
        :deckList="availableDeckList"
        :white="false"
        title="You might like"
        :type="CarouselType.ToSubscribe"

      />
    </div>
    <div v-show="!isMobile">
      <CoreDeckDesktopSection
        :deckList="todayDeckList"
        :white="true"
        title="Daily decks"
        :type="CarouselType.Today"
      />
      <CoreDeckDesktopSection
        :deckList="availableDeckList"
        :white="false"
        title="Featured decks"
        :type="CarouselType.ToSubscribe"

      />
      <CoreDeckDesktopSection
        :deckList="myDecksList"
        :white="true"
        title="My decks"
        :type="CarouselType.ToPlay"

      />
      <CoreDeckDesktopSection
        :deckList="availableDeckList"
        :white="false"
        title="You might like"
        :type="CarouselType.ToSubscribe"

      />
    </div>
  </section>
  <section v-else>
    <h1>Loading...</h1>
  </section>
</template>

<script lang="ts" setup>
import { CarouselType, Deck, DeckList, SubDeckList, TodayResponse } from '~/types'
import { getAvailableDeck, getDeck, getSubDeck, todays } from '~/api/deck.api'
import { useTodayStore } from '~/stores/todays'

definePageMeta({ layout: 'connected', middleware: ['auth'] })

let isMobile = ref(false)
let loaded = ref(false)
let myDecksList = ref(<SubDeckList>[])
let todayDeckList = ref(<DeckList>[])
let availableDeckList = ref(<SubDeckList>[])


onMounted(async () => {
  const data: TodayResponse = await todays()

  myDecksList.value = await getSubDeck().then((res) => {
    return <SubDeckList>res.data || []
  })

  availableDeckList.value = await getAvailableDeck().then((res) => {
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


const deckList = <DeckList>[
  <Deck>{
    deck_name: 'Python',
    ID: 0,
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=8B7BCDC2',
  },
  <Deck>{
    deck_name: 'Unix',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=500B67FB',
  },
  <Deck>{
    deck_name: 'Java',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=A89D0DE6',
  },
  <Deck>{
    deck_name: 'Golang',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=225E6693',
  },
  <Deck>{
    deck_name: 'Rust',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=7F5AE56A',
  },
  <Deck>{
    deck_name: 'Lisp',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=B0E33EF4',
  },
  <Deck>{
    deck_name: 'Kotlin',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=2D297A22',
  },
  {
    deck_name: 'Python',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=8B7BCDC2',
  },
  <Deck>{
    deck_name: 'Unix',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=500B67FB',
  },
  <Deck>{
    deck_name: 'Java',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=A89D0DE6',
  },
  <Deck>{
    deck_name: 'Golang',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=225E6693',
  },
  <Deck>{
    deck_name: 'Rust',
    ID: 0,

    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=7F5AE56A',
  },
]
</script>
