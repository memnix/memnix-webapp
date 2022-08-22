<template>
  <div class="mx-auto w-full max-w-md">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <label class="label">
          <span class="label-text">{{ $t('select_a_mcq') }}</span>
        </label>
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary sm:text-sm"
        >
          <ComboboxInput
            :displayValue="(mcq) => mcq?.mcq_name"
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
              v-if="mcqs.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4"
            >
              {{ $t('nothing_found') }}.
            </div>

            <ComboboxOption
              v-for="mcq in filteredMcq"
              :key="mcq.ID"
              v-slot="{ selected, active }"
              :value="mcq"
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
                  {{ mcq.mcq_name }}
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
        @click="deleteSelectedMcq"
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
  <ModalMcqForm
    v-if="edit"
    :deck_id="deck_id"
    :is_edit="true"
    :mcq="selected"
    @closeModalMcqForm="closeModalMcqForm"
  />
  <ModalMcqForm
    v-if="create"
    :deck_id="deck_id"
    :is_edit="false"
    :mcq="{}"
    @closeModalMcqForm="closeModalMcqForm"
  />
</template>

<script lang="ts" setup>
import { McqList } from '~/types'
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
import { deleteMcq, getMCQfromDeck } from '~/api/card.api'

const props = defineProps({
  mcqs: {
    type: Array as PropType<McqList>,
    required: true,
  },
  deck_id: {
    type: Number as PropType<number>,
    required: true,
  },
})

let deckMcqs = props.mcqs

let selected = ref(deckMcqs.length > 0 ? deckMcqs[0] : null)
let query = ref('')

let edit = ref(false)
let create = ref(false)
let submitting = false

async function closeModalMcqForm() {
  edit.value = false
  create.value = false
  deckMcqs = await getMCQfromDeck(props.deck_id)
  selected.value = deckMcqs.length > 0 ? deckMcqs[0] : null
}

async function deleteSelectedMcq() {
  if (submitting) return
  submitting = true
  await deleteMcq(selected.value.ID).then(async () => {
    submitting = false
    deckMcqs = await getMCQfromDeck(props.deck_id)
    selected.value = deckMcqs.length > 0 ? deckMcqs[0] : null
  })
}

let filteredMcq = computed(() =>
  query.value === ''
    ? deckMcqs
    : deckMcqs.filter((mcq) =>
        mcq.mcq_name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
</script>

<style scoped></style>
