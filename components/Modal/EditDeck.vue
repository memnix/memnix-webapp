<template>
  <div class="modal modal-open h-screen">
    <div class="modal-box h-screen max-h-screen w-screen !max-w-none">
      <div class="hoveranimation absolute left-0 top-[0.5rem]">
        <button
          class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
          @click="closeModalDeckEdit"
        >
          <Icon-lucide-arrow-left />
        </button>
      </div>
      <TabGroup as="div" class="mx-auto flex w-full flex-col px-2 sm:px-0">
        <h1 class="mx-auto py-4 text-3xl">Edit {{ deck.Deck.deck_name }}</h1>
        <TabList class="mx-auto flex py-4">
          <div class="tabs tabs-boxed rounded-xl p-1">
            <Tab v-slot="{ selected }">
              <div :class="selected ? 'tab-active' : ''" class="tab tab-lg">
                Generals
              </div>
            </Tab>
            <Tab v-slot="{ selected }">
              <div :class="selected ? 'tab-active' : ''" class="tab tab-lg">
                Cards
              </div>
            </Tab>
            <Tab v-slot="{ selected }">
              <div :class="selected ? 'tab-active' : ''" class="tab tab-lg">
                MCQ
              </div>
            </Tab>
          </div>
        </TabList>
        <TabPanels class="py-4">
          <TabPanel>
            <EditorGeneral
              :deck="deck"
              :is_edit="true"
              @closeModalGeneral="closeModalDeckEdit"
            />
          </TabPanel>
          <TabPanel>
            <EditorCard :cards="cards" :mcqs="mcqs" :deck_id="deck.deck_id" />
          </TabPanel>
          <TabPanel><EditorMcq :mcqs="mcqs" /></TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CardList, DeckEditor, McqList } from '~/types'
import { PropType } from '@vue/runtime-core'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import { getCardsFromDeck, getMCQfromDeck } from '~/api/card.api'

const emit = defineEmits(['closeModalDeckEdit'])

let cards = ref(<CardList>[])
let mcqs = ref(<McqList>[])

const props = defineProps({
  deck: {
    type: Object as PropType<DeckEditor>,
    required: true,
  },
})

onMounted(async () => {
  cards.value = await getCardsFromDeck(props.deck.deck_id)
  mcqs.value = await getMCQfromDeck(props.deck.deck_id)
})

const closeModalDeckEdit = function () {
  emit('closeModalDeckEdit')
}
</script>

<style scoped></style>
