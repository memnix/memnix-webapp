<template>
  <form class="w-full" @submit.prevent="submitUpdateDeckRequest">
    <div class="space-y-4">
      <div class="form-control mx-auto w-full max-w-md pt-2">
        <label class="label">
          <span class="label-text">Name *</span>
        </label>
        <input
          v-model="state.name"
          class="input input-bordered w-full max-w-md"
          placeholder="Deck's name"
          type="text"
          @blur="v$.$touch()"
          :class="v$.name.$error ? 'input-error' : ''"
        />
      </div>
      <div class="form-control mx-auto w-full max-w-md">
        <label class="label">
          <span class="label-text">Description *</span>
        </label>
        <input
          v-model="state.description"
          class="input input-bordered w-full max-w-md"
          placeholder="Deck's description"
          type="text"
          @blur="v$.$touch()"
          :class="v$.description.$error ? 'input-error' : ''"
        />
      </div>
      <div class="form-control mx-auto w-full max-w-md">
        <label class="label">
          <span class="label-text">Banner *</span>
        </label>
        <input
          v-model="state.banner"
          class="input input-bordered w-full max-w-md"
          placeholder="Banner url"
          type="text"
          @blur="v$.$touch()"
          :class="v$.banner.$error ? 'input-error' : ''"
        />
      </div>
      <div class="form-control mx-auto w-full max-w-md pt-2">
        <button
          class="hoveranimation btn btn-primary w-full"
          type="submit"
          @click="submitUpdateDeckRequest"
        >
          Update
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { DeckEditor } from '~/types'
import { PropType } from '@vue/runtime-core'

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const emit = defineEmits(['closeModalDeckEdit'])

const props = defineProps({
  deck: {
    type: Object as PropType<DeckEditor>,
    required: true,
  },
})

const state = reactive({
  name: props.deck.Deck.deck_name,
  description: props.deck.Deck.deck_description,
  banner: props.deck.Deck.deck_banner,
})

const rules = {
  name: {
    required,
  },
  description: {
    required,
  },
  banner: {
    required,
  },
}

const v$ = useVuelidate(rules, state)

const submitUpdateDeckRequest = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    // notify user form is invalid
    return
  }

  emit('closeModalDeckEdit')
}
</script>

<style scoped></style>
