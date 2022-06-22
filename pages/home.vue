<template>
  <section class="bg-base-100">
    <div v-show="isMobile === true">
      <CoreDeckMobileSection
        :deckList="deckList"
        :white="true"
        title="Daily decks"
      />
      <CoreDeckMobileSection
        :deckList="deckList"
        :white="false"
        title="Featured decks"
      />
      <CoreDeckMobileSection
        :deckList="deckList"
        :white="true"
        title="My decks"
      />
      <CoreDeckMobileSection
        :deckList="deckList"
        :white="false"
        title="You might like"
      />
    </div>
    <div v-show="!isMobile">
      <CoreDeckDesktopSection
        :deckList="deckList"
        :white="true"
        title="Daily decks"
        :daily="true"
      />
      <CoreDeckDesktopSection
        :deckList="deckList"
        :white="false"
        title="Featured decks"
      />
      <CoreDeckDesktopSection
        :deckList="deckList"
        :white="true"
        title="My decks"
      />
      <CoreDeckDesktopSection
        :deckList="deckList"
        :white="false"
        title="You might like"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Deck, DeckList } from '~/types'

definePageMeta({ layout: 'connected' })

let isMobile = ref(false)

onMounted(() => {
  isMobile.value = screen.width <= 768
  window.addEventListener('resize', () => {
    isMobile.value = screen.width <= 768
  })
})

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
