<template>
  <div class="rounded-xl border p-6">
    <div class="md:-mx-4 md:flex md:items-start">
      <span
        class="inline-block rounded-xl bg-info p-2 text-info-content md:mx-4"
      >
        <Icon-lucide-heart v-if="icon === 'heart'" class="h-10 w-10" />
        <Icon-lucide-timer-reset v-if="icon === 'time'" class="h-10 w-10" />
        <Icon-lucide-trending-up v-if="icon === 'trending'" class="h-10 w-10" />
        <Icon-lucide-smartphone
          v-if="icon === 'accessible'"
          class="h-10 w-10"
        />

        <Icon-lucide-message-circle
          v-if="icon === 'message'"
          class="h-10 w-10"
        />
        <Icon-lucide-crown v-if="icon === 'crown'" class="h-10 w-10" />
        <Icon-lucide-code-2 v-if="icon === 'code'" class="h-10 w-10" />
        <Icon-lucide-users v-if="icon === 'users'" class="h-10 w-10" />
      </span>
      <div class="mt-4 md:mx-4 md:mt-0">
        <h1 class="text-2xl font-medium capitalize">
          {{ title }}
        </h1>

        <p class="mt-3">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
