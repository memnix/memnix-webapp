<template>
  <div class="modal modal-open modal-bottom sm:modal-middle">
    <div class="modal-box border-2 border-secondary">
      <div class="hoveranimation absolute right-1 top-[0.5rem]">
        <button
          class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
          @click="$emit('closeModalDeckConfig')"
        >
          <Icon-lucide-x />
        </button>
      </div>
      <div class="flex items-center">
        <h2 class="ml-3 text-xl font-medium">
          {{ deck.Deck.deck_name }}
        </h2>
      </div>
      <div class="mx-auto w-full max-w-md py-5">
        <RadioGroup v-model="selected">
          <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
          <div class="space-y-2">
            <RadioGroupOption
              v-for="plan in plans"
              :key="plan.name"
              v-slot="{ active, checked }"
              :value="plan"
              as="template"
            >
              <div
                :class="[checked ? 'bg-primary bg-opacity-50' : 'bg-base-200 ']"
                class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
              >
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-sm">
                      <RadioGroupLabel as="p" class="font-medium">
                        {{ plan.name }}
                      </RadioGroupLabel>
                      <RadioGroupDescription as="span" class="inline">
                        <span> {{ plan.description }}</span>
                      </RadioGroupDescription>
                    </div>
                  </div>
                  <div v-show="checked" class="shrink-0 text-white">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        fill="#fff"
                        fill-opacity="0.2"
                        r="12"
                      />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>
      <div class="modal-action">
        <label class="hoveranimation btn btn-error" @click="unsubscribeDeck">
          {{ $t('unsubscribe') }}
        </label>
        <label class="hoveranimation btn btn-primary" @click="updateDeckConfig">
          {{ $t('update') }}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SubDeck } from '~/types'
import { PropType } from '@vue/runtime-core'
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import { setTodaySetting, unsubToDeck } from '~/api/deck.api'
import { useLang } from '~/composables/useLang'

const props = defineProps({
  deck: {
    type: Object as PropType<SubDeck>,
    required: true,
  },
})

const plans = [
  {
    name: useLang().t('daily_learning_recommended'),
    description: useLang().t('daily_learning_recommended_content'),
    today_setting: true,
  },
  {
    name: useLang().t('free_learning'),
    description: useLang().t('free_learning_content'),
    today_setting: false,
  },
]

const emit = defineEmits(['closeModalDeckConfig'])

const selected = ref(props.deck.settings_today ? plans[0] : plans[1])

async function unsubscribeDeck() {
  await unsubToDeck(props.deck.Deck.ID)
  emit('closeModalDeckConfig')
}

async function updateDeckConfig() {
  if (selected.value.today_setting != props.deck.settings_today) {
    await setTodaySetting(props.deck.Deck.ID, selected.value.today_setting)
  }
  emit('closeModalDeckConfig')
}
</script>

<style scoped></style>
