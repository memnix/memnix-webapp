<template>
  <section class="h-screen bg-base-200">
    <div class="container mx-auto px-6 py-12">
      <h1
        class="text-center text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
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
              class="block transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent hover:underline"
              >Discord</a
            >
            <a
              href="#"
              class="block transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent hover:underline"
              >Twitter</a
            >
            <a
              href="#"
              class="block transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent hover:underline"
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
definePageMeta({ layout: 'static' })

let currentContentIndex = ref(0)
</script>

<style scoped></style>
