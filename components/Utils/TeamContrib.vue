<template>
  <div class="flex items-start rounded-lg border border-secondary p-6">
    <div class="block shrink-0">
      <nuxt-img
        alt="moutmout"
        height="100%"
        :src="image || 'icon.png'"
        width="100%"
        format="webp"
        loading="lazy"
        quality="80"
        class="h-14 w-14 rounded-lg object-cover"
      />
    </div>

    <div class="ml-4">
      <h2 class="title-font font-medium">{{ name }}</h2>
      <h3 class="truncate">{{ job }}</h3>
      <span class="inline-flex space-x-4 py-1">
        <NuxtLink v-show="twitter !== null" :to="twitter">
          <Icon-lucide-twitter class="hoveranimation h-6 w-6" />
        </NuxtLink>
        <NuxtLink v-show="discord !== null" :to="discord">
          <Icon-ic-round-discord class="hoveranimation h-6 w-6" />
        </NuxtLink>
        <NuxtLink v-show="github !== null" :to="github">
          <Icon-lucide-github class="hoveranimation h-6 w-6" />
        </NuxtLink>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
