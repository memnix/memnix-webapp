<template>
  <div class="modal modal-open h-screen">
    <div class="modal-box relative bg-base-200">
      <div class="hoveranimation absolute right-2 top-[0.5rem]">
        <button
          class="btn btn-ghost text-xl md:text-xl lg:text-2xl"
          @click="closeModalEditCardForm"
        >
          <Icon-lucide-x />
        </button>
      </div>
      <form class="w-full" @submit.prevent="submitUpdateCardRequest">
        <div class="space-y-4">
          <div class="form-control mx-auto w-full max-w-md pt-2">
            <label class="label">
              <span class="label-text">Question *</span>
            </label>
            <input
              class="input input-bordered w-full max-w-md"
              placeholder="Question"
              v-model="state.question"
              type="text"
              @blur="v$.$touch()"
              :class="v$.question.$error ? 'input-error' : ''"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">Type *</span>
            </label>
            <input
              class="input input-bordered w-full max-w-md"
              placeholder="Deck's description"
              v-model="state.type"
              type="text"
              @blur="v$.$touch()"
              :class="v$.type.$error ? 'input-error' : ''"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">MCQ *</span>
            </label>
            <input
              class="input input-bordered w-full max-w-md"
              placeholder="MCQ"
              v-model="state.mcq"
              type="text"
              @blur="v$.$touch()"
              :class="v$.mcq.$error ? 'input-error' : ''"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">Answer *</span>
            </label>
            <input
              class="input input-bordered w-full max-w-md"
              placeholder="Answer"
              v-model="state.answer"
              type="text"
              @blur="v$.$touch()"
              :class="v$.answer.$error ? 'input-error' : ''"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">Image</span>
            </label>
            <input
              class="input input-bordered w-full max-w-md"
              placeholder="Image url"
              v-model="state.imageURL"
              type="text"
              @blur="v$.$touch()"
              :class="v$.imageURL.$error ? 'input-error' : ''"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">Format *</span>
            </label>
            <input
              class="input input-bordered w-full max-w-md"
              placeholder="Format"
              v-model="state.format"
              type="text"
              @blur="v$.$touch()"
              :class="v$.format.$error ? 'input-error' : ''"
            />
          </div>
          <div class="flex flex-row space-x-3">
            <label class="label">
              <span class="label-text">Case sensitive *</span>
            </label>
            <Switch
              v-model="state.isCaseSensitive"
              :class="state.isCaseSensitive ? 'bg-secondary' : 'bg-neutral'"
              class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="
                  state.isCaseSensitive ? 'translate-x-9' : 'translate-x-0'
                "
                class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
              />
            </Switch>
            <div class="divider divider-horizontal"></div>
            <label class="label">
              <span class="label-text">Space sensitive*</span>
            </label>
            <Switch
              v-model="state.isSpacesSensitive"
              :class="state.isSpacesSensitive ? 'bg-secondary' : 'bg-neutral'"
              class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="
                  state.isSpacesSensitive ? 'translate-x-9' : 'translate-x-0'
                "
                class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
              />
            </Switch>
          </div>
          <div class="form-control mx-auto w-full max-w-md pt-2">
            <button
              class="hoveranimation btn btn-primary w-full"
              type="submit"
              @click="submitUpdateCardRequest"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import { Card, McqList } from '~/types'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { Switch } from '@headlessui/vue'

const props = defineProps({
  card: {
    type: Object as PropType<Card>,
    required: true,
  },
  mcqs: {
    type: Array as PropType<McqList>,
    required: true,
  },
})

const emit = defineEmits(['closeModalEditCardForm'])

function closeModalEditCardForm() {
  emit('closeModalEditCardForm')
}

const state = reactive({
  question: props.card.card_question,
  answer: props.card.card_answer,
  mcq: '',
  type: props.card.card_type,
  isCaseSensitive: props.card.card_case,
  isSpacesSensitive: props.card.card_spaces,
  format: props.card.card_format,
  imageURL: props.card.card_image,
})

const rules = {
  question: {
    required,
  },
  type: {
    required,
  },
  mcq: {
    required,
  },
  answer: {
    required,
  },
  format: {
    required,
  },
  imageURL: {
    required,
  },
  isSpacesSensitive: {
    required,
  },
  isCaseSensitive: {
    required,
  },
}

const v$ = useVuelidate(rules, state)

const submitUpdateCardRequest = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    // notify user form is invalid
    return
  }
}
</script>

<style scoped></style>
