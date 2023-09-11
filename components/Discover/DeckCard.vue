<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    class="h-full flex items-center p-4 rounded-lg bg-base-200 hoveranimation hover:cursor-pointer hover:border hover:border-accent"
  >
    <NuxtImg
      :src="image"
      alt="team"
      class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
      format="webp"
      lazy
      preload
      quality="70"
    />
    <!-- Content container -->
    <div class="flex flex-col w-full">
      <!-- Title at the top -->
      <div class="">
        <h2 class="title-font font-medium mb-2">{{ title }}</h2>
        <p class="">{{ description }}</p>
      </div>
    </div>
  </a>
</template>
