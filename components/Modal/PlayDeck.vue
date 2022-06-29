<template>
  <div class="modal h-screen modal-open">
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
      <CoreCard :card="card" />
      <progress
        class="progress progress-primary max-w-xl"
        value="40"
        max="100"
      ></progress>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { CardResponse } from '~/types'

const props = defineProps({
  cardList : {
    type: Array,
    required: true,
  }
})

let cardResponse = <CardResponse>props.cardList[0]
let card = cardResponse.card

</script>

<style scoped></style>
