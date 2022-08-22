<template>
  <div class="modal modal-open h-screen">
    <div class="modal-box relative bg-base-200">
      <div class="hoveranimation absolute right-2 top-[0.5rem]">
        <button
          class="btn btn-ghost text-xl md:text-xl lg:text-2xl"
          @click="closeModalCardForm"
        >
          <Icon-lucide-x />
        </button>
      </div>
      <form
        v-if="loaded"
        class="w-full"
        @submit.prevent="submitCardFormRequest"
      >
        <div class="space-y-4">
          <div class="form-control mx-auto w-full max-w-md pt-2">
            <label class="label">
              <span class="label-text">{{ $t('question') }} *</span>
            </label>
            <input
              v-model="state.question"
              :class="v$.question.$error ? 'input-error' : ''"
              :placeholder="$t('question')"
              class="input input-bordered w-full max-w-md"
              type="text"
              @blur="v$.$touch()"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">{{ $t('type') }} *</span>
            </label>
            <select
              v-model="state.type"
              :class="v$.type.$error ? 'select-error' : ''"
              class="select select-bordered w-full max-w-md"
              @blur="v$.$touch()"
            >
              <option disabled selected value="">
                {{ $t('select_type') }}
              </option>
              <option :value="CardType.Int">{{ $t('int') }}</option>
              <option :value="CardType.String">{{ $t('string') }}</option>
              <option :value="CardType.Mcq">{{ $t('mcq_only') }}</option>
            </select>
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span v-if="state.type === CardType.Mcq" class="label-text"
                >{{ $t('mcq') }} *</span
              >
              <span v-else class="label-text">{{ $t('mcq') }} </span>
            </label>
            <select
              v-model="state.mcq"
              :class="v$.mcq.$error ? 'select-error' : ''"
              class="select select-bordered w-full max-w-md"
              @blur="v$.$touch()"
            >
              <option :value="0" selected>{{ $t('none') }}</option>
              <option v-for="mcq in mcqs" :value="mcq.ID">
                {{ mcq.mcq_name }}
              </option>
            </select>
          </div>

          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">{{ $t('answer') }} *</span>
            </label>
            <input
              v-model="state.answer"
              :class="v$.answer.$error ? 'input-error' : ''"
              :placeholder="$t('answer')"
              class="input input-bordered w-full max-w-md"
              type="text"
              @blur="v$.$touch()"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">{{ $t('image') }}</span>
            </label>
            <input
              v-model="state.imageURL"
              :class="v$.imageURL.$error ? 'input-error' : ''"
              :placeholder="$t('image_url')"
              class="input input-bordered w-full max-w-md"
              type="text"
              @blur="v$.$touch()"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">{{ $t('format') }} *</span>
            </label>
            <input
              v-model="state.format"
              :class="v$.format.$error ? 'input-error' : ''"
              :placeholder="$t('format')"
              class="input input-bordered w-full max-w-md"
              type="text"
              @blur="v$.$touch()"
            />
          </div>
          <div class="flex flex-row space-x-3">
            <label class="label">
              <span class="label-text">{{ $t('case_sensitive') }}</span>
            </label>
            <Switch
              v-model="state.isCaseSensitive"
              :class="state.isCaseSensitive ? 'bg-secondary' : 'bg-neutral'"
              class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <span class="sr-only">Use setting</span>
              <span
                :class="
                  state.isCaseSensitive ? 'translate-x-9' : 'translate-x-0'
                "
                aria-hidden="true"
                class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
              />
            </Switch>
            <div class="divider divider-horizontal"></div>
            <label class="label">
              <span class="label-text">{{ $t('space_sensitive') }}</span>
            </label>
            <Switch
              v-model="state.isSpacesSensitive"
              :class="state.isSpacesSensitive ? 'bg-secondary' : 'bg-neutral'"
              class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <span class="sr-only">Use setting</span>
              <span
                :class="
                  state.isSpacesSensitive ? 'translate-x-9' : 'translate-x-0'
                "
                aria-hidden="true"
                class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
              />
            </Switch>
          </div>
          <div class="form-control mx-auto w-full max-w-md pt-2">
            <button
              class="hoveranimation btn btn-primary w-full"
              type="submit"
              @click="submitCardFormRequest"
            >
              {{ buttonActionText }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import { Card, CardType, McqList } from '~/types'
import useVuelidate from '@vuelidate/core'
import { maxLength, required } from '@vuelidate/validators'
import { Switch } from '@headlessui/vue'
import { Config } from '~/utils/config'
import { createCard, getMCQfromDeck, updateCard } from '~/api/card.api'
import { useLang } from '~/composables/useLang'

const props = defineProps({
  card: {
    type: Object as PropType<Card>,
    required: true,
  },
  is_edit: {
    type: Boolean,
    required: true,
  },
  deck_id: {
    type: Number,
    required: true,
  },
})

const buttonActionText = props.is_edit
  ? useLang().t('update')
  : useLang().t('create')

let loaded = ref(false)
let mcqs = ref(<McqList>[])

onMounted(async () => {
  mcqs.value = await getMCQfromDeck(props.deck_id)
  loaded.value = true
})

const emit = defineEmits(['closeModalCardForm'])

function closeModalCardForm() {
  emit('closeModalCardForm')
}

const state = reactive({
  question: props.is_edit ? props.card.card_question : '',
  answer: props.is_edit ? props.card.card_answer : '',
  mcq: props.is_edit ? props.card.mcq_id.Int32 : 0,
  type: props.is_edit ? props.card.card_type : '',
  isCaseSensitive: props.is_edit ? props.card.card_case : false,
  isSpacesSensitive: props.is_edit ? props.card.card_spaces : false,
  format: props.is_edit ? props.card.card_format : '',
  imageURL: props.is_edit ? props.card.card_image : '',
})

const mcqCustomRules = (value) => {
  if (state.type === CardType.Mcq) {
    return value !== 0
  }
  return true
}

const rules = {
  question: {
    required,
    maxLength: maxLength(Config.maxDefaultLen),
  },
  type: {
    required,
  },
  mcq: {
    mcqCustomRules,
  },
  answer: {
    required,
    maxLength: maxLength(Config.maxDefaultLen),
  },
  format: {
    required,
    maxLength: maxLength(Config.maxDefaultLen),
  },
  imageURL: {
    maxLength: maxLength(Config.maxDefaultLen),
  },
}

const v$ = useVuelidate(rules, state)

let submitting = false

const submitCardFormRequest = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    // notify user form is invalid
    return
  }

  if (submitting) {
    return
  }

  submitting = true

  if (!props.is_edit) {
    await createCard(<Card>{
      card_question: state.question,
      card_answer: state.answer,
      mcq_id: {
        Int32: state.mcq,
        Valid: true,
      },
      card_type: state.type,
      card_case: state.isCaseSensitive,
      card_spaces: state.isSpacesSensitive,
      card_format: state.format,
      card_image: state.imageURL,
      deck_id: props.deck_id,
    }).then((_) => {
      submitting = false
    })
  } else {
    await updateCard(<Card>{
      ID: props.card.ID,
      card_question: state.question,
      card_answer: state.answer,
      mcq_id: {
        Int32: state.mcq,
        Valid: true,
      },
      card_type: state.type,
      card_case: state.isCaseSensitive,
      card_spaces: state.isSpacesSensitive,
      card_format: state.format,
      card_image: state.imageURL,
      deck_id: props.card.deck_id,
    }).then((_) => {
      submitting = false
    })
  }

  closeModalCardForm()
}
</script>

<style scoped></style>
