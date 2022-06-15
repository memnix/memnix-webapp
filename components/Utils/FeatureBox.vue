<template>
  <div class="rounded-xl border p-6">
    <div class="md:-mx-4 md:flex md:items-start">
      <span
        class="inline-block rounded-xl bg-info p-2 text-info-content md:mx-4"
      >
        <slot></slot>
      </span>

      <div class="mt-4 md:mx-4 md:mt-0">
        <h1 class="text-2xl font-medium capitalize">
          {{ title }}
        </h1>

        <p class="mt-3">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
