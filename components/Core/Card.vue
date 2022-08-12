<template>
  <div>
    <div class='text-center'>
      <h3 class='my-3 text-3xl md:text-4xl'>
        {{ card.card_question }}
      </h3>
      <div v-if="card.card_image !== ''" class='flex max-w-2xl justify-center'>
        <img
          :src='card.card_image'
          alt='card image'
          class='rounded-box max-h-[512px] object-cover object-fill object-center shadow-lg'
          loading='lazy'
        />
      </div>

      <div
        v-if="
          answers?.length === 4 &&
          card.card_image !== '' &&
          card.card_type === 2
        "
        class='grid max-w-2xl grid-cols-2 grid-rows-2 gap-4 pt-5 pb-10'
      >
        <div v-for='ans in answers' :key='ans'>
          <div
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
            class='hoveranimation btn btn-primary w-full normal-case'
            @click='buttonAnswer(ans)'
          >
            {{ ans }}
          </div>
        </div>
      </div>
      <div
        v-else-if='answers?.length === 4 && card.card_type === 2'
        class='mx-auto flex max-w-2xl flex-col justify-center space-y-4 py-10 md:space-y-6'
      >
        <div v-for='ans in answers' :key='ans'>
          <div
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
            class='btn btn-primary w-full normal-case'
            @click='buttonAnswer(ans)'
          >
            {{ ans }}
          </div>
        </div>
      </div>
      <div v-else>
        <div v-show='card.card_case || card.card_spaces' class='flex w-full space-x-3 pt-10 pb-5 justify-center'>
          <div v-if='card.card_case' class='badge badge-lg badge-accent'>
            <Icon-lucide-alert-circle class='mr-2' />
            Case Sensitive
          </div>
          <div v-if='card.card_spaces' class='badge badge-lg badge-warning'>
            <Icon-lucide-alert-octagon class='mr-2' />
            Space sensitive
          </div>
        </div>
        <div class='flex w-full space-x-3 pt-10 pb-5'>
          <form class='w-full' @submit.prevent='formAnswer'>
            <input
              v-model='answer'
              aria-label='Answer'
              class='input-neutral input input-bordered input-ghost w-full'
              placeholder='Answer'
              type='text'
            />
          </form>
          <button
            class='hoveranimation btn btn-primary'
            type='button'
            @click='formAnswer'
          >
            <Icon-lucide-arrow-right />
          </button>
        </div>
      </div>
    </div>
    <div>
      <TransitionRoot
        :show='showingResult'
        class='modal modal-open modal-middle bg-opacity-0'
        enter='transition-opacity transition-transform duration-500 ease-in-out'
        enter-from='opacity-0 scale-50'
        enter-to='opacity-100 scale-100'
      >
        <div v-if='isCorrect' class='modal-box border-4 border-success'>
          <h3 class='text-lg md:text-xl lg:text-2xl font-bold'>Success !</h3>
          <div class='py-4 text-md md:text-lg lg:text-xl'>Keep going !</div>
        </div>

        <div v-else class='modal-box border-4 border-error'>
          <h3 class='text-lg md:text-xl lg:text-2xl font-bold'>Error !</h3>
          <div class='py-4 text-md md:text-lg lg:text-xl'>
            The right answer was : <span
            class='underline decoration-4 decoration-solid font-bold decoration-primary'>{{ correctAnswer }}</span>
          </div>
        </div>
      </TransitionRoot>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { postResponse } from '~/api/card.api'
import { TransitionRoot } from '@headlessui/vue'
import { Card } from '~/types'
import { PropType } from '@vue/runtime-core'

const props = defineProps({
  card: {
    type: Object as PropType<Card>,
    required: true
  },
  answers: {
    type: Array,
    required: false,
    default: []
  }
})

let answer = ref('')
let showingResult = ref(false)
let isCorrect = ref(false)
let correctAnswer = ref('')
const emit = defineEmits(['nextCardEvent'])

const buttonAnswer = function(button_answer: string) {
  answer.value = button_answer
  postAnswer()
}
const formAnswer = function() {
  if (answer.value !== '') {
    postAnswer(true)
  }
}

async function postAnswer(isText: boolean = false) {
  let result = await postResponse(props.card.ID, answer.value, false)
  correctAnswer.value = props.card.card_answer
  showingResult.value = true
  isCorrect.value = result.data.validate
  if (result.success) {
    setTimeout(function() {
      emit('nextCardEvent', result.data.validate)
      answer.value = ''
      showingResult.value = false
    }, 2000)
  }
}
</script>

<style scoped></style>
