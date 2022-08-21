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
              <span class="label-text">Question *</span>
            </label>
            <input
              v-model="state.name"
              :class="v$.name.$error ? 'input-error' : ''"
              class="input input-bordered w-full max-w-md"
              placeholder="Question"
              type="text"
              @blur="v$.$touch()"
            />
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">Type *</span>
            </label>
            <select
              v-model="state.type"
              class="select select-bordered w-full max-w-md"
              @blur="v$.$touch()"
              :class="v$.type.$error ? 'select-error' : ''"
            >
              <option value="" disabled selected>Select type</option>
              <option :value="McqType.Standalone">Standalone</option>
              <option :value="McqType.Linked">Linked</option>
            </select>
          </div>
          <div class="form-control mx-auto w-full max-w-md">
            <label class="label">
              <span class="label-text">Answers *</span>
              <span class="label-text">
                Separate answers using <a class="font-bold">;</a></span
              >
            </label>
            <input
              v-model="state.answers"
              :class="v$.answers.$error ? 'input-error' : ''"
              class="input input-bordered w-full max-w-md"
              placeholder="Answers"
              type="text"
              @blur="v$.$touch()"
              :disabled="state.type === McqType.Linked"
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
import { minLength, required, requiredIf } from '@vuelidate/validators'

const props = defineProps({
  mcq: {
    type: Object as PropType<Mcq>,
    required: true,
  },
  is_edit: {
    type: Boolean,
    required: true,
  },
})

const buttonActionText = props.is_edit ? 'Update' : 'Create'

const emit = defineEmits(['closeModalMcqForm'])

function closeModalMcqForm() {
  emit('closeModalMcqForm')
}

const state = reactive({
  name: props.is_edit ? props.mcq.mcq_name : '',
  type: props.is_edit ? props.mcq.mcq_type : '',
  answers: props.is_edit ? props.mcq.mcq_answers : '',
  deck_id: props.is_edit ? props.mcq.deck_id : '',
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
  },
  type: {
    required,
  },
  answers: {
    required: requiredIf(state.type !== McqType.Linked),
    answersCustomRules,
  },
}

const v$ = useVuelidate(rules, state)

console.log(props.mcq)

const submitMcqFormRequest = async () => {
  console.log('submit')
  const result = await v$.value.$validate()
  if (!result) {
    console.log('Pas content form pas bien')
    // notify user form is invalid
    return
  }
  console.log('Form is valid')
}
</script>

<style scoped></style>
