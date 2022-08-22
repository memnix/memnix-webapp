<template>
  <div class="modal modal-open h-screen">
    <div class="modal-box relative bg-base-200">
      <div class="hoveranimation absolute right-2 top-[0.5rem]">
        <button
          class="btn btn-ghost text-xl md:text-xl lg:text-2xl"
          @click="closeModalMcqForm"
        >
          <Icon-lucide-x />
        </button>
      </div>
      <form class="w-full" @submit.prevent="submitMcqFormRequest">
        <div class="space-y-4">
          <div class="form-control mx-auto w-full max-w-md pt-2">
            <label class="label">
              <span class="label-text"> {{ $t('question') }} *</span>
            </label>
            <input
              v-model="state.name"
              :class="v$.name.$error ? 'input-error' : ''"
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
              <option :value="McqType.Standalone">
                {{ $t('standalone') }}
              </option>
              <option :value="McqType.Linked">{{ $t('linked') }}</option>
            </select>
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">{{ $t('answers') }} *</span>
              <span class="label-text">
                {{ $t('separate_answers') }} <a class="font-bold">;</a></span
              >
            </label>
            <input
              v-model="state.answers"
              :class="v$.answers.$error ? 'input-error' : ''"
              :disabled="state.type === McqType.Linked"
              :placeholder="$t('answers')"
              class="input input-bordered w-full max-w-md"
              type="text"
              @blur="v$.$touch()"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md pt-2">
            <button
              class="hoveranimation btn btn-primary w-full"
              type="submit"
              @click="submitMcqFormRequest"
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
import { Mcq, McqType } from '~/types'
import useVuelidate from '@vuelidate/core'
import { maxLength, required } from '@vuelidate/validators'
import { Config } from '~/utils/config'
import { createMcq, updateMcq } from '~/api/card.api'
import { useLang } from '~/composables/useLang'

const props = defineProps({
  mcq: {
    type: Object as PropType<Mcq>,
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

const emit = defineEmits(['closeModalMcqForm'])

function closeModalMcqForm() {
  emit('closeModalMcqForm')
}

const state = reactive({
  name: props.is_edit ? props.mcq.mcq_name : '',
  type: props.is_edit ? props.mcq.mcq_type : '',
  answers: props.is_edit ? props.mcq.mcq_answers : '',
})

const answersCustomRules = (value) => {
  if (state.type === McqType.Standalone) {
    return value.length >= 1
  }
  return state.type === McqType.Linked
}

const rules = {
  name: {
    required,
    maxLength: maxLength(Config.maxMcqName),
  },
  type: {
    required,
  },
  answers: {
    answersCustomRules,
  },
}

const v$ = useVuelidate(rules, state)

let submitting = false

const submitMcqFormRequest = async () => {
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
    await createMcq(<Mcq>{
      mcq_name: state.name,
      mcq_type: state.type,
      mcq_answers: state.answers,
      deck_id: props.deck_id,
    }).then((_) => {
      submitting = false
    })
  } else {
    await updateMcq(<Mcq>{
      ID: props.mcq.ID,
      mcq_name: state.name,
      mcq_type: state.type,
      mcq_answers: state.answers,
      deck_id: props.deck_id,
    }).then((_) => {
      submitting = false
    })
  }

  closeModalMcqForm()
}
</script>

<style scoped></style>
