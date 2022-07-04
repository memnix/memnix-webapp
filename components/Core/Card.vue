<template>
  <div>
  <div class="text-center">
    <h3 class="my-3 text-3xl md:text-4xl">
      {{ card.card_question }}
    </h3>
    <div class="flex max-w-2xl justify-center" v-if="card.card_image !== ''">
      <img
        :src="card.card_image"
        class="rounded-box max-h-[512px] object-cover object-fill object-center shadow-lg"
        loading="lazy"
        alt="card image"
      />
    </div>

    <div
      class="grid max-w-2xl grid-cols-2 grid-rows-2 gap-4 pt-5 pb-10"
      v-if="
        answers?.length === 4 && card.card_image !== '' && card.card_type === 2
      "
    >
      <div v-for="ans in answers" :key='ans'>
        <div
          class="hoveranimation btn btn-primary w-full normal-case"
          @click="buttonAnswer(ans)"
          :class="
            showingResult
              ? ans === answer
                ? ans === card.card_answer
                  ? 'btn-disabled bg-success text-success-content'
                  : 'btn-disabled bg-error text-error-content'
                : ans === card.card_answer
                ? 'btn-disabled bg-success text-success-content'
                : 'btn-disabled'
              : 'hoveranimation'
          "
        >
          {{ ans }}
        </div>
      </div>
    </div>
    <div
      class="mx-auto flex max-w-2xl flex-col justify-center space-y-4 py-10 md:space-y-6"
      v-else-if="answers?.length === 4 && card.card_type === 2"
    >
      <div v-for="ans in answers" :key='ans'>
        <div
          class="btn btn-primary w-full normal-case"
          @click="buttonAnswer(ans)"
          :class="
            showingResult
              ? ans === answer
                ? ans === card.card_answer
                  ? 'btn-disabled bg-success text-success-content'
                  : 'btn-disabled bg-error text-error-content'
                : ans === card.card_answer
                ? 'btn-disabled bg-success text-success-content'
                : 'btn-disabled'
              : 'hoveranimation'
          "
        >
          {{ ans }}
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex w-full space-x-3 pt-10 pb-5">
        <form @submit.prevent="formAnswer" class="w-full">
          <input
            aria-label="Answer"
            class="input-neutral input input-bordered input-ghost w-full"
            placeholder="Answer"
            type="text"
            v-model="answer"
          />
        </form>
        <button
          class="hoveranimation btn btn-primary"
          type="button"
          @click="formAnswer"
        >
          <Icon-lucide-arrow-right />
        </button>
      </div>
    </div>
  </div>
  <div
    class="modal modal-bottom sm:modal-middle"
    :class="isOpen ? 'modal-open' : ''"
  >
    <div class="modal-box">
      <div v-if="isCorrect">
        <h3 class="text-lg font-bold">Success !</h3>
        <div class="py-4">Keep going !</div>
      </div>
      <div v-else>
        <h3 class="text-lg font-bold">Error !</h3>
        <div class="py-4">
          The right answer was : <b>{{ card.card_answer }}</b>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { postResponse } from '~/api/deck.api'

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

const isOpen = ref(false)
let answer = ref('')
let showingResult = ref(false)
let isCorrect = ref(false)
const emit = defineEmits(['nextCardEvent'])

const buttonAnswer = function (button_answer: string) {
  answer.value = button_answer
  postAnswer()
}
const formAnswer = function () {
  if (answer.value !== '') {
    postAnswer(true)
  }
}

function setIsOpen(value) {
  isOpen.value = value
}

async function postAnswer(isText: boolean = false) {
  let result = await postResponse(props.card.ID, answer.value, false)
  showingResult.value = true
  if (isText) {
    setIsOpen(true)
    isCorrect.value = result.data.validate
  }
  if (result.success) {
    setTimeout(function () {
      answer.value = ''
      emit('nextCardEvent', result.data.validate)
      showingResult.value = false
      isCorrect.value = false
      setIsOpen(false)
    }, 2000)
  }
}
</script>

<style scoped></style>
