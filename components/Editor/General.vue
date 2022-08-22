<template>
  <form class="w-full" @submit.prevent="submitDeckGeneralRequest">
    <div class="space-y-4">
      <div class="form-control mx-auto w-full max-w-md pt-2">
        <label class="label">
          <span class="label-text">{{ $t('name') }} *</span>
        </label>
        <input
          v-model="state.name"
          class="input input-bordered w-full max-w-md"
          :placeholder="$t('deck_name')"
          type="text"
          @blur="v$.$touch()"
          :class="v$.name.$error ? 'input-error' : ''"
        />
      </div>
      <div class="form-control mx-auto w-full max-w-md">
        <label class="label">
          <span class="label-text">{{ $t('description') }}*</span>
        </label>
        <input
          v-model="state.description"
          class="input input-bordered w-full max-w-md"
          :placeholder="$t('deck_description')"
          type="text"
          @blur="v$.$touch()"
          :class="v$.description.$error ? 'input-error' : ''"
        />
      </div>
      <div class="form-control mx-auto w-full max-w-md">
        <label class="label">
          <span class="label-text">{{ $t('banner') }} *</span>
        </label>
        <input
          v-model="state.banner"
          class="input input-bordered w-full max-w-md"
          :placeholder="$t('banner_url')"
          type="text"
          @blur="v$.$touch()"
          :class="v$.banner.$error ? 'input-error' : ''"
        />
      </div>
      <div class="form-control mx-auto w-full max-w-md pt-2">
        <button
          class="hoveranimation btn btn-primary w-full"
          type="submit"
          @click.once="submitDeckGeneralRequest"
        >
          {{ buttonActionText }}
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { Deck, DeckEditor } from '~/types'
import { PropType } from '@vue/runtime-core'

import useVuelidate from '@vuelidate/core'
import { maxLength, minLength, required } from '@vuelidate/validators'
import { Config } from '~/utils/config'
import { createDeck, updateDeck } from '~/api/deck.api'
import { useLang } from '~/composables/useLang'

const emit = defineEmits(['closeModalGeneral'])

const props = defineProps({
  deck: {
    type: Object as PropType<DeckEditor>,
    required: true,
  },
  is_edit: {
    type: Boolean,
    required: true,
  },
})

const buttonActionText = props.is_edit
  ? useLang().t('update')
  : useLang().t('create')
let submitting = false

const state = reactive({
  name: props.is_edit ? props.deck.Deck.deck_name : '',
  description: props.is_edit ? props.deck.Deck.deck_description : '',
  banner: props.is_edit ? props.deck.Deck.deck_banner : '',
})

const rules = {
  name: {
    required,
    maxLength: maxLength(Config.maxDeckNameLen),
    minLength: minLength(Config.minDeckNameLen),
  },
  description: {
    required,
    maxLength: maxLength(Config.maxDefaultLen),
  },
  banner: {
    required,
    maxLength: maxLength(Config.maxDefaultLen),
  },
}

const v$ = useVuelidate(rules, state)

const submitDeckGeneralRequest = async () => {
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
    await createDeck(<Deck>{
      deck_name: state.name,
      deck_description: state.description,
      deck_banner: state.banner,
    }).then((_) => {
      submitting = false
    })
  } else {
    await updateDeck(<Deck>{
      ID: props.deck.Deck.ID,
      deck_name: state.name,
      deck_description: state.description,
      deck_banner: state.banner,
    }).then((_) => {
      submitting = false
    })
  }

  emit('closeModalGeneral')
}
</script>

<style scoped></style>
