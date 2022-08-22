<template>
  <div class="mx-auto w-full max-w-md">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <label class="label">
          <span class="label-text">{{ $t('select_a_card') }}</span>
        </label>
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary sm:text-sm"
        >
          <ComboboxInput
            :displayValue="(card) => card?.card_question"
            class="input input-bordered w-full py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0"
            @change="query = $event.target.value"
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon aria-hidden="true" class="h-5 w-5" />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="cards.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4"
            >
              {{ $t('nothing_found') }}
            </div>

            <ComboboxOption
              v-for="card in filteredCard"
              :key="card.ID"
              v-slot="{ selected, active }"
              :value="card"
              as="template"
            >
              <li
                :class="{
                  'bg-primary text-primary-content': active,
                  '': !active,
                }"
                class="relative cursor-default select-none py-2 pl-10 pr-4"
              >
                <span
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                  class="block truncate"
                >
                  {{ card.card_question }}
                </span>
                <span
                  v-if="selected"
                  :class="{
                    'text-primary-content': active,
                  }"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <CheckIcon aria-hidden="true" class="h-5 w-5" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
    <div class="flex flex-row justify-between pt-5">
      <button
        :disabled="selected === null"
        class="hoveranimation btn btn-error"
        @click="deleteSelectedCard"
      >
        {{ $t('delete') }}
      </button>
      <button
        :disabled="selected === null"
        class="hoveranimation btn btn-secondary"
        @click="edit = true"
      >
        {{ $t('edit') }}
      </button>
      <button class="hoveranimation btn btn-success" @click="create = true">
        {{ $t('new') }}
      </button>
    </div>
  </div>
  <ModalCardForm
    v-if="edit"
    :card="selected"
    :deck_id="deck_id"
    :is_edit="true"
    @closeModalCardForm="closeModalCardForm"
  />
  <ModalCardForm
    v-if="create"
    :card="{}"
    :deck_id="deck_id"
    :is_edit="false"
    @closeModalCardForm="closeModalCardForm"
  />
</template>

<script lang="ts" setup>
import { CardList } from '~/types'
import { PropType } from '@vue/runtime-core'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import { deleteCard, getCardsFromDeck } from '~/api/card.api'

const props = defineProps({
  cards: {
    type: Array as PropType<CardList>,
    required: true,
  },

  deck_id: {
    type: Number as PropType<number>,
    required: true,
  },
})

let deckCards = props.cards

let edit = ref(false)
let create = ref(false)
let submitting = false

let selected = ref(deckCards.length > 0 ? deckCards[0] : null)
let query = ref('')

async function closeModalCardForm() {
  edit.value = false
  create.value = false
  deckCards = await getCardsFromDeck(props.deck_id)
  selected.value = deckCards.length > 0 ? deckCards[0] : null
}

async function deleteSelectedCard() {
  if (submitting) return
  submitting = true
  await deleteCard(selected.value.ID).then(async () => {
    submitting = false
    deckCards = await getCardsFromDeck(props.deck_id)
    selected.value = deckCards.length > 0 ? deckCards[0] : null
  })
}

let filteredCard = computed(() =>
  query.value === ''
    ? deckCards
    : deckCards.filter((card) =>
        card.card_question
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
</script>

<style scoped></style>
