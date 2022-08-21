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
              as="template"
              v-for="plan in plans"
              :key="plan.name"
              :value="plan"
              v-slot="{ active, checked }"
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
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
        <label class="hoveranimation btn btn-error">Unsubscribe</label>
        <label class="hoveranimation btn btn-primary">Update</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SubDeck } from '~/types'
import { PropType } from '@vue/runtime-core'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

const plans = [
  {
    name: 'Daily Learning (recommended)',
    description:
      'Work on the deck using our spaced repetition learning algorithm.',
  },
  {
    name: 'Free Learning',
    description: 'Practice the deck when you want.',
  },
]

const selected = ref(plans[0])

const props = defineProps({
  deck: {
    type: Object as PropType<SubDeck>,
    required: true,
  },
})
</script>

<style scoped></style>
