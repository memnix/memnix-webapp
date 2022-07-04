<template>
  <div
    class="flex flex-col items-center justify-center px-6"
    :class="props.white ? 'bg-base-200' : 'bg-base-100'"
  >
    <div class="mt-6 w-full">
      <div class="flex flex-row items-center justify-between">
        <h1 class="md:text-xl">{{ title }}</h1>
      </div>
      <CoreDeckDesktopCarousel
        :deckList="deckList"
        :type="type"
        v-if="deckList.length >= 7"
        @refreshToday="emit('refreshToday')"
      />
      <CoreDeckCarousel
        :deckList="deckList"
        :type="type"
        v-else
        @refreshToday="emit('refreshToday')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['refreshToday'])

const props = defineProps({
  type: {
    type: Number,
    required: true,
  },
  deckList: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  white: {
    type: Boolean,
    required: true,
    default: true,
  },
})
</script>

<style scoped></style>
