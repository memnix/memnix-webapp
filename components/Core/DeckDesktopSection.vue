<template>
  <div
    :class="props.white ? 'bg-base-200' : 'bg-base-100'"
    class='flex flex-col items-center justify-center px-6'
  >
    <div class='mt-6 w-full'>
      <div class='flex flex-row items-center justify-between'>
        <h1 class='md:text-xl'>{{ title }}</h1>
      </div>
      <CoreDeckDesktopCarousel
        v-if='deckList.length >= 7'
        :deckList='deckList'
        :type='type'
        @refreshToday="emit('refreshToday')"
      />
      <CoreDeckCarousel
        v-else
        :deckList='deckList'
        :type='type'
        @refreshToday="emit('refreshToday')"
      />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { CarouselType, DeckList, SubDeckList } from '~/types'
import { PropType } from '@vue/runtime-core'

const emit = defineEmits(['refreshToday'])

const props = defineProps({
  type: {
    type: Number as PropType<CarouselType>,
    required: true
  },
  deckList: {
    type: Array as PropType<DeckList | SubDeckList>,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  white: {
    type: Boolean,
    required: true,
    default: true
  }
})
</script>

<style scoped></style>
