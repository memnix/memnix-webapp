<template>
  <div class="text-center">
    <h3 class="my-3 text-xl md:text-2xl lg:text-3xl">
      {{ card.card_question }}
    </h3>
    <div class="max-w-2xl flex justify-center">
      <img
        :src="card.card_image"
        class="rounded-box object-cover object-fill object-center shadow-lg"
        loading="lazy"

      />
    </div>

    <div class="grid max-w-2xl grid-cols-2 grid-rows-2 gap-4 pt-10 pb-5">
      <div class="hoveranimation btn btn-primary w-full">One</div>
      <div class="hoveranimation btn btn-primary w-full">One</div>
      <div class="hoveranimation btn btn-primary w-full">One</div>
      <div class="hoveranimation btn btn-primary w-full">One</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '~/types'

const props = defineProps({
  card: {
    type: Object,
    required: true,
    default: () =>
      <Card>{
        ID: 0
      },
  },
})

</script>

<style scoped></style>