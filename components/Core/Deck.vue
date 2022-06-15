<template>
  <div class='flex flex-col w-full justify-center'>

  <img
    :src="deck.deck_banner"
    class="rounded-box object-cover w-24 h-24 md:w-40 md:h-40 lg:w-64 lg:h-64 mx-auto"
    width='512px'
    height='512px'
  />
  <div class="text-center">
    <span class="text-xs">{{ deck.deck_name }}</span>
  </div>
  </div>
</template>

<script setup lang='ts'>
import { Deck } from '~/types'
const props = defineProps({
  deck: {
    type: Object,
    default: () => <Deck>{
      deck_name: 'Python',
      deck_banner: 'https://api.lorem.space/image/furniture?w=512&h=512&hash=8B7BCDC2',
    },
    required: true,
  },
})

</script>

<style scoped>

</style>