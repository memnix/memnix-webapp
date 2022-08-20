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
      <form class="w-full" @submit.prevent="submitUpdateCardRequest">
        <div class="space-y-4">
          <div class="form-control mx-auto w-full max-w-md pt-2">
            <label class="label">
              <span class="label-text">Question *</span>
            </label>
            <input
              class="input input-bordered w-full max-w-md"
              placeholder="Question"
              v-model="state.name"
              type="text"
              @blur="v$.$touch()"
              :class="v$.name.$error ? 'input-error' : ''"
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
              <span class="label-text">Answers *</span>
            </label>
            <input
              class="input input-bordered w-full max-w-md"
              placeholder="Answers"
              v-model="state.answers"
              type="text"
              @blur="v$.$touch()"
              :class="v$.answers.$error ? 'input-error' : ''"
            />
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
import { Card, Mcq, McqList } from '~/types'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { Switch } from '@headlessui/vue'

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

const rules = {
  name: {
    required,
  },
  type: {
    required,
  },
  answers: {
    required,
  },
  deck_id: {
    required,
  },
}

const v$ = useVuelidate(rules, state)

console.log(props.mcq)

const submitUpdateCardRequest = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    // notify user form is invalid
    return
  }
}
</script>

<style scoped></style>
