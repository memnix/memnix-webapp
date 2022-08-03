<template>
  <div
    class="flex flex-col items-center justify-center px-6"
    :class="props.white ? 'bg-base-200' : 'bg-base-100'"
  >
    <div class="mt-6 w-full">
      <div class="flex flex-row items-center justify-between">
        <h1 class="md:text-xl">{{ title }}</h1>
      </div>
      <CoreDeckCarousel
        :deckList="deckList"
        :type="type"
        @refreshToday="emit('refreshToday')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CarouselType, DeckList, SubDeckList } from '~/types'
import { PropType } from '@vue/runtime-core'

const emit = defineEmits(['refreshToday'])

const props = defineProps({
  deckList: {
    type: Array as PropType<DeckList | SubDeckList>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  white: {
    type: Boolean,
    required: true,
    default: true,
  },
  type: {
    type: Number as PropType<CarouselType>,
    required: true,
  },
})
</script>

<style scoped></style>
