<template>
  <section class="bg-base-200">
    <div class="flex h-screen flex-col items-center justify-center bg-base-200">
      <div
        class="my-auto flex w-full flex-row flex-nowrap overflow-hidden"
      >
        <div class="mx-5" v-for="n in 50">{{ n }}</div>
      </div>
      <div class="my-auto">02</div>
      <div class="my-auto">03</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BottomNavigation from '~/components/Utils/BottomNavigation.vue'

definePageMeta({ layout: 'connected' })
const page = ref(0)
</script>
