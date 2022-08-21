<template>
  <div class="mx-auto w-full max-w-md">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <label class="label">
          <span class="label-text">Select a card</span>
        </label>
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary sm:text-sm"
        >
          <ComboboxInput
            class="input input-bordered w-full py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0"
            :displayValue="(card) => card.card_question"
            @change="query = $event.target.value"
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon class="h-5 w-5" aria-hidden="true" />
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
              Nothing found.
            </div>

            <ComboboxOption
              v-for="card in filteredCard"
              as="template"
              :key="card.ID"
              :value="card"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-primary text-primary-content': active,
                  '': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ card.card_question }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{
                    'text-primary-content': active,
                  }"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
    <div class="flex flex-row justify-between pt-5">
      <button
        class="hoveranimation btn btn-error"
        @click.once="deleteSelectedCard"
      >
        Delete
      </button>
      <button
        class="hoveranimation btn btn-secondary"
        @click.once="edit = true"
      >
        Edit
      </button>
      <button
        class="hoveranimation btn btn-success"
        @click.once="create = true"
      >
        New
      </button>
    </div>
  </div>
  <ModalCardForm
    :card="selected"
    :mcqs="mcqs"
    :is_edit="true"
    @closeModalCardForm="closeModalCardForm"
    :deck_id="deck_id"
    v-if="edit"
  />
  <ModalCardForm
    v-if="create"
    @closeModalCardForm="closeModalCardForm"
    :card="{}"
    :deck_id="deck_id"
    :is_edit="false"
    :mcqs="mcqs"
  />
</template>

<script setup lang="ts">
import { Card, CardList, McqList } from '~/types'
import { PropType } from '@vue/runtime-core'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import { deleteCard, getCardsFromDeck } from '~/api/card.api'

const props = defineProps({
  cards: {
    type: Array as PropType<CardList>,
    required: true,
  },
  mcqs: {
    type: Array as PropType<McqList>,
    required: true,
  },
  deck_id: {
    type: Number as PropType<number>,
    required: true,
  },
})

let deckCards = props.cards
let deckMcqs = props.mcqs

let edit = ref(false)
let create = ref(false)
let submitting = false

let selected = ref(deckCards[0])
let query = ref('')

async function closeModalCardForm() {
  edit.value = false
  create.value = false
  deckCards = await getCardsFromDeck(props.deck_id)
  selected.value = deckCards[0]
}

async function deleteSelectedCard() {
  if (submitting) return
  submitting = true
  await deleteCard(selected.value.ID).then(async () => {
    submitting = false
    deckCards = await getCardsFromDeck(props.deck_id)
    selected.value = deckCards[0]
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
