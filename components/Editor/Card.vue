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
      <button class="hoveranimation btn btn-error">Delete</button>
      <button class="hoveranimation btn btn-secondary" @click="edit = true">
        Edit
      </button>
      <button class="hoveranimation btn btn-success">New</button>
    </div>
  </div>
  <ModalCardForm
    :card="selected"
    :mcqs="mcqs"
    @closeModalEditCardForm="edit = false"
    v-if="edit"
  />
</template>

<script setup lang="ts">
import { CardList, McqList } from '~/types'
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

const props = defineProps({
  cards: {
    type: Array as PropType<CardList>,
    required: true,
  },
  mcqs: {
    type: Array as PropType<McqList>,
    required: true,
  },
})

let selected = ref(props.cards[0])
let query = ref('')

let edit = ref(false)

let filteredCard = computed(() =>
  query.value === ''
    ? props.cards
    : props.cards.filter((card) =>
        card.card_question
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
</script>

<style scoped></style>
