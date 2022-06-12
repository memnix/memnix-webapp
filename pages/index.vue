<template>
  <section class="bg-base-200">
    <div class="relative flex h-screen flex-wrap bg-base-200">
      <button
        class="btn-neutral btn absolute left-5 top-5 mr-3 lg:hidden"
        :class="page === 0 ? 'hidden' : ''"
        @click="page = 0"
      >
        <Icon-lucide-arrow-left style="font-size: 1.5em" />
      </button>
      <div class="hero" :class="page !== 0 ? 'hidden lg:hero lg:w-1/2' : ''">
        <div class="max-w-md">
          <h1
            class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
          >
            Memnix app
          </h1>
          <p class="py-6 font-bold italic">
            A spaced repetition learning system
          </p>
          <button
            class="btn btn-primary mr-3 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            @click="page = 1"
          >
            Get Started
          </button>
          <NuxtLink to="/discover">
            <button
              class="btn btn-secondary ml-3 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Learn more
            </button>
          </NuxtLink>
        </div>
      </div>
      <div v-show="page === 1" class="hero min-h-screen bg-base-200 lg:w-1/2">
        <IndexAuth />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const page = ref(0)

useHead({
  title: "Memnix app",
  link:
  [
    {
      rel: 'preconnect',
      href: 'https://www.youtube.com/',
    },
    {
      rel: 'preconnect',
      href: 'https://s.ytimg.com'
    }
  ]
  }
)

onMounted(() => {
  const route = useRoute()
  if (route.fullPath === '/#auth') {
    page.value = 1
  }
})

</script>
