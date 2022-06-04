<template>
  <section>
    <div class="flex h-screen flex-wrap bg-base-200">
      <div class="hero lg:w-1/2">
        <div class="hero-content text-center">
          <img
            class="max-w-sm rounded-lg shadow-2xl"
            src="https://api.lorem.space/image/movie?w=260&h=400"
          />
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Memnix app</h1>
            <p class="py-6 font-bold italic">
              A spaced repetition learning system
            </p>
            <button class="btn btn-primary mx-3" @click="page = 1">
              Get Started
            </button>
            <button class="btn btn-secondary" @click="page = 2">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div v-if="page === 0" class="md:w-1/2">
        <div class="hero min-h-screen">
          <img
            class="max-w-sm rounded-lg shadow-2xl"
            src="https://api.lorem.space/image/movie?w=260&h=400"
          />
        </div>
      </div>
      <div v-else-if="page === 1" class="hero min-h-screen bg-neutral lg:w-1/2">
        <IndexAuth />
      </div>
      <div v-else-if="page === 2" class="hero min-h-screen bg-neutral lg:w-1/2">
        <IndexLearnMore />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import IndexAuth from '~/components/IndexAuth.vue'

const page = ref(0)
</script>
