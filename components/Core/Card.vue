<template>
  <div class="text-center">
    <h3 class="my-3 text-3xl md:text-4xl lg:text-5xl">
      {{ card.card_question }}
    </h3>
    <div class="flex max-w-2xl justify-center" v-if="card.card_image !== ''">
      <img
        :src="card.card_image"
        class="rounded-box object-cover object-fill object-center shadow-lg"
        loading="lazy"
        alt="card image"
      />
    </div>

    <div
      class="grid max-w-2xl grid-cols-2 grid-rows-2 gap-4 py-10"
      v-if="answers.length === 4 && card.card_image !== ''"
    >
      <div class="hoveranimation btn btn-primary w-full">{{ answers[0] }}</div>
      <div class="hoveranimation btn btn-primary w-full">{{ answers[1] }}</div>
      <div class="hoveranimation btn btn-primary w-full">{{ answers[2] }}</div>
      <div class="hoveranimation btn btn-primary w-full">{{ answers[3] }}</div>
    </div>
    <div
      class="mx-auto flex max-w-2xl flex-col justify-center space-y-4 py-10 md:space-y-6"
      v-else-if="answers.length === 4"
    >
      <div class="hoveranimation btn btn-primary btn-lg w-full">
        {{ answers[0] }}
      </div>
      <div class="hoveranimation btn btn-primary btn-lg w-full">
        {{ answers[1] }}
      </div>
      <div class="hoveranimation btn btn-primary btn-lg w-full">
        {{ answers[2] }}
      </div>
      <div class="hoveranimation btn btn-primary btn-lg w-full">
        {{ answers[3] }}
      </div>
    </div>
    <div v-else>
      <div class="flex w-full space-x-3 pt-10 pb-5">
        <input
          aria-label="Answer"
          class="input-neutral input input-bordered input-ghost w-full"
          placeholder="Answer"
          type="text"
          v-model="answer"
        />
        <button class="hoveranimation btn btn-primary" type="button" @click="">
          <Icon-lucide-arrow-right />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  answers: {
    type: Array,
    required: false,
    default: [],
  },
})

let answer = ref('')
</script>

<style scoped></style>
