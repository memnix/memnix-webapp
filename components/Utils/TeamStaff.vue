<template>
  <div
    class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left"
  >
    <nuxt-img
      :src="image"
      alt="team"
      class="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
      format="webp"
      loading="lazy"
      quality="75"
    />
    <div class="flex-grow sm:pl-8">
      <h2 class="text-2xl font-medium">{{ name }}</h2>
      <h3 class="mb-3">{{ job }}</h3>

      <span class="inline-flex space-x-4">
        <NuxtLink
          v-show="twitter !== null"
          :to="'https://twitter.com/' + twitter"
          target="_blank"
        >
          <Icon-lucide-twitter
            class="h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </NuxtLink>
        <NuxtLink
          v-show="discord !== null"
          :to="'https://discordapp.com/users/' + discord"
          target="_blank"
        >
          <Icon-ic-round-discord
            class="h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </NuxtLink>
        <NuxtLink
          v-show="github !== null"
          :to="'https://github.com/' + github"
          target="_blank"
        >
          <Icon-lucide-github
            class="h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
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
