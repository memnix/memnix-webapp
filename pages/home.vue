<template>
  <section class="bg-base-200">
    <div class="flex flex-col items-center justify-center bg-base-200 px-6">
      <div class="w-full mt-5">
        <div class="flex flex-row items-center justify-between">
          <h1 class="md:text-xl">Daily decks</h1>
          <a href="" class="btn btn-primary btn-xs md:btn-sm">
            <span class="text-white">View all</span>
          </a>
        </div>
        <CoreDeckCarousel :deckList='deckList' />
      </div>

    </div>
    <div class="flex flex-col items-center justify-center bg-base-100 px-6">
      <div class="w-full mt-5">
        <div class="flex flex-row items-center justify-between">
          <h1 class="md:text-xl">Trendings deck</h1>
          <a href="" class="btn btn-primary btn-xs md:btn-sm">
            <span class="text-white">View all</span>
          </a>
        </div>
        <CoreDeckCarousel :deckList='deckList' />
      </div>

    </div>
    <div class="flex flex-col items-center justify-center bg-base-100 px-6">
      <div class="w-full mt-5">
        <div class="flex flex-row items-center justify-between">
          <h1 class="md:text-xl">You might also like</h1>
          <a href="" class="btn btn-primary btn-xs md:btn-sm">
            <span class="text-white">View all</span>
          </a>
        </div>
          <Carousel :items-to-show="5" :wrap-around="true" class="h-32 md:h-48 lg:h-72 ">
            <Slide v-for="deck in deckList" :key="slide">
              <div class="carousel__item">

              <CoreDeck :deck='deck'/>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center bg-base-100 px-6">
      <div class="w-full mt-5">
        <div class="flex flex-row items-center justify-between">
          <h1 class="md:text-xl">You might also like</h1>
          <a href="" class="btn btn-primary btn-xs md:btn-sm">
            <span class="text-white">View all</span>
          </a>
        </div>
        <Carousel :items-to-show="5" :wrap-around="true" class="h-32 md:h-48 lg:h-72 mx-6">
          <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center bg-base-200 px-6">
      <div class="w-full mt-5">
        <div class="flex flex-row items-center justify-between">
          <h1 class="md:text-xl">My decks</h1>
          <a href="" class="btn btn-primary btn-xs md:btn-sm">
            <span class="text-white">View all</span>
          </a>
        </div>
        <CoreDeckCarousel :deckList='deckList' />
      </div>

    </div>
    <div class="flex flex-col items-center justify-center bg-base-100 px-6">
      <div class="w-full mt-5">
        <div class="flex flex-row items-center justify-between">
          <h1 class="md:text-xl">You might also like</h1>
          <a href="" class="btn btn-primary btn-xs md:btn-sm">
            <span class="text-white">View all</span>
          </a>
        </div>
        <CoreDeckCarousel :deckList='deckList' />
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { Deck, DeckList } from '~/types'

definePageMeta({ layout: 'connected' })
const page = ref(0)

const deckList = <DeckList>[
  <Deck>{
    deck_name: 'Python',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=8B7BCDC2',
  },
  <Deck>{
    deck_name: 'Unix',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=500B67FB',
  },
  <Deck>{
    deck_name: 'Java',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=A89D0DE6',
  },
  <Deck>{
    deck_name: 'Golang',
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
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=B0E33EF4',
  },
  <Deck>{
    deck_name: 'Kotlin',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=2D297A22',
  },
  {
    deck_name: 'Python',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=8B7BCDC2',
  },
  <Deck>{
    deck_name: 'Unix',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=500B67FB',
  },
  <Deck>{
    deck_name: 'Java',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=A89D0DE6',
  },
  <Deck>{
    deck_name: 'Golang',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=225E6693',
  },
  <Deck>{
    deck_name: 'Rust',
    deck_banner:
      'https://api.lorem.space/image/movie?w=512&h=512&hash=7F5AE56A',
  },
]
</script>
