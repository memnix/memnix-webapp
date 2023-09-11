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
  <div class="h-full items-center p-4 rounded-lg bg-base-200">
    <div class="grid grid-cols-6 gap-3 items-center">
      <div class="col-span-5">
        <h2 class="title-font font-bold text-xl truncate overflow-ellipsis">
          {{ title }}
        </h2>
      </div>
      <div class="justify-self-end col-span-1">
        <button class="btn">...</button>
      </div>
      <NuxtImg
        :src="image"
        alt="team"
        class="w-32 h-32 bg-gray-100 object-cover object-center col-span-3"
        format="webp"
        height="128"
        lazy
        preload
        quality="70"
        width="128"
      />

      <div class="col-span-3">
        <div class="flex items-center">
          <Icon class="h-4 w-4 mr-2" name="mdi:card-multiple" />
          <p class="text-sm">20/140 cards</p>
        </div>

        <progress class="progress w-full" max="100" value="10"></progress>
      </div>
      <button class="btn col-span-3 btn-secondary btn-sm">Learn</button>
      <button class="btn col-span-3 btn-primary btn-sm">Revision</button>
    </div>
  </div>
</template>
