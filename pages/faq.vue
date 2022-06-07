<template>
  <section class="h-screen bg-base-200">
    <div class="container px-6 py-12 mx-auto">
      <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">Have any Questions?</h1>

      <div class="mt-8 xl:mt-16 lg:flex lg:-mx-12">
        <div class="lg:mx-12">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Need further help?</h1>

          <div class="mt-4 space-y-4 lg:mt-8">
            <a href="/discord" class="transition ease-in-out duration-300 block hover:underline hover:text-accent hover:-translate-y-1 hover:scale-110">Discord</a>
            <a href="#" class="transition ease-in-out duration-300 block hover:underline hover:text-accent  hover:-translate-y-1 hover:scale-110">Twitter</a>
            <a href="#" class="transition ease-in-out duration-300 block hover:underline hover:text-accent hover:-translate-y-1 hover:scale-110">Github</a>

          </div>
        </div>

        <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">
          <FaqContent title='Totoro' content='Chihiro'/>
          <FaqContent class='my-8' title='Totoro' content='Chihiro'/>
          <FaqContent class='my-8' title='Totoro' content='Chihiro'/>
          <FaqContent class='my-8' title='Totoro' content='Chihiro'/>
          <FaqContent class='my-8' title='Totoro' content='Chihiro'/>

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
