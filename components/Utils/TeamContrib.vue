<template>
  <div class="flex h-full items-center rounded-lg border border-gray-200 p-4">
    <img
      alt="team"
      class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
      :src="image"
    />
    <div class="flex-grow">
      <h2 class="title-font font-medium">{{ name }}</h2>
      <h3>{{ job }}</h3>
      <span class="inline-flex space-x-4 py-1">
        <NuxtLink v-show="twitter !== null" :to="twitter">
          <Icon-lucide-twitter
            class="h-6 w-6 hoveranimation"
          />
        </NuxtLink>
        <NuxtLink v-show="discord !== null" :to="discord">
          <Icon-ic-round-discord
            class="h-6 w-6 hoveranimation"
          />
        </NuxtLink>
        <NuxtLink v-show="github !== null" :to="github">
          <Icon-lucide-github
            class="h-6 w-6 hoveranimation"
          />
        </NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: false,
    default: null,
  },
  github: {
    type: String,
    required: false,
    default: null,
  },
  discord: {
    type: String,
    required: false,
    default: null,
  },
})
</script>

<style scoped></style>
