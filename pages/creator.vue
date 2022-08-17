<template>
  <section class='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12'>
    <div class='text-center pb-12'>

      <h1 class='font-bold text-3xl md:text-4xl lg:text-5xl font-heading'>
        Deck editor
      </h1>
      <h2 class='text-base font-bold text-primary'>
        Create & edit your own decks
      </h2>
    </div>
    <div v-if='!loading' class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      <div
        v-for='_ in 6'
        class='h-32 w-28 animate-pulse md:h-48 md:w-44 lg:h-72 lg:w-72'
      >
        <div class='flex flex-col justify-center'>
          <div class='rounded-box bg-neutral relative'>
            <svg class='animate-spin h-7 w-7 absolute inset-0 m-auto' viewBox='0 0 24 24'>
              <circle class='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'></circle>
              <path class='opacity-75'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    fill='currentColor'></path>
            </svg>
            <div
              class='h-24 w-24 object-cover md:h-40 md:w-40 lg:h-64 lg:w-64'
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
      <CoreDeck v-for='deck in decks' :deck='deck.Deck' />
      <div
        class='hoveranimation flex w-full flex-col justify-center hover:cursor-pointer '
      >
          <div class='mx-auto'>
            <Icon-lucide-plus-circle class='my-auto text-4xl'/>
          </div>

        <div class='text-center'>
          <span class='md:text-md text-xs lg:text-lg'> Create a deck</span>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang='ts' setup>
import { getEditorDecks } from '~/api/deck.api'
import { DeckEditorList } from '~/types'

definePageMeta({ layout: 'connected', middleware: ['auth'] })

let decks = ref(<DeckEditorList>[])
let loading = ref(false)

onMounted(async () => {
  decks.value = await getEditorDecks().then((res) => {
    loading.value = true
    return <DeckEditorList>res || []
  })

  console.log(decks.value)
})
</script>

<style scoped>

</style>