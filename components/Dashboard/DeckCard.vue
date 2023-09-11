<script setup lang="ts">
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
  <div class="h-full flex items-center p-4 rounded-lg bg-base-200">
    <NuxtImg
      alt="team"
      class="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
      :src="image"
      lazy
      preload
      quality="70"
      format="webp"
    />
    <!-- Content container -->
    <div class="grid grid-cols-5 w-full gap-4">
      <!-- Title at the top -->
      <div class="col-span-4">
        <h2 class="title-font font-medium mb-2">{{ title }}</h2>
        <p class="">{{ description }}</p>
      </div>
      <div class="justify-self-end">
        <button class="btn">...</button>
      </div>
      <div class="col-span-3 self-center">
        <progress class="progress w-full" max="100" value="10"></progress>
      </div>
      <div class="flex justify-end self-center col-span-2 gap-2">
        <button class="btn btn-sm xl:btn-md btn-secondary">Learn</button>
        <button class="btn btn-sm xl:btn-md btn-primary">Revision</button>
      </div>
    </div>
  </div>
</template>
