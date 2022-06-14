<template>
  <section class="h-screen bg-base-200">
    <div class="container mx-auto px-6 py-12">
      <h1
        class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-center text-5xl font-bold text-transparent hover:animate-pulse"
      >
        Have any Questions?
      </h1>

      <div class="mt-8 lg:-mx-12 lg:flex xl:mt-16">
        <div class="lg:mx-12">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            Need further help?
          </h1>

          <div class="mt-4 space-y-4 lg:mt-8">
            <a
              href="/discord"
              class="block hoveranimation hover:text-accent hover:underline"
              >Discord</a
            >
            <a
              href="#"
              class="block hoveranimation hover:text-accent hover:underline"
              >Twitter</a
            >
            <a
              href="#"
              class="block hoveranimation hover:text-accent hover:underline"
              >Github</a
            >
          </div>
        </div>

        <div class="mt-8 flex-1 lg:mx-12 lg:mt-0">
          <FaqContent title="Totoro" content="Chihiro" />
          <FaqContent class="my-8" title="Totoro" content="Chihiro" />
          <FaqContent class="my-8" title="Totoro" content="Chihiro" />
          <FaqContent class="my-8" title="Totoro" content="Chihiro" />
          <FaqContent class="my-8" title="Totoro" content="Chihiro" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'

definePageMeta({ layout: 'static' })
</script>

<style scoped></style>
