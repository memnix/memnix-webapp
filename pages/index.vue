<template>
  <section class="bg-base-200">
    <div class="flex h-screen flex-wrap bg-base-200">
      <div class="hero" :class="page !== 0 ? 'hidden lg:hero lg:w-1/2' : ''">
        <div class="hero-content">
          <div class="max-w-md">
            <h1
              class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
            >
              Memnix app
            </h1>
            <p class="py-6 font-bold italic">
              A spaced repetition learning system
            </p>
            <div class="w-full flex justify-center">
            <NuxtLink to="/discover" class='mx-auto '>
              <button
                class="btn btn-secondary transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                Learn more
              </button>
            </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div v-show="page === 1" class="hero min-h-screen bg-base-100 lg:w-1/2">
        <IndexAuth />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const page = ref(1)

useHead({
  title: 'Memnix app',
  link: [
    {
      rel: 'preconnect',
      href: 'https://www.youtube.com/',
    },
    {
      rel: 'preconnect',
      href: 'https://s.ytimg.com',
    },
  ],
})
</script>
