<template>
  <section class="bg-base-200 relative">
    <div class='absolute overflow-hidden bottom-0 left-0 h-20 w-20 invisible lg:visible lg:h-72 lg:w-72 z-0'>
      <img src='https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true'/>
    </div>
    <div class="flex h-screen flex-wrap bg-base-200">
      <div class="hero hidden lg:hero lg:w-1/2">
        <div class="hero-content">
          <div class="max-w-md">
            <h1
              class="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
            >
              Memnix app
            </h1>
            <p class="py-6 font-bold italic">
              A spaced repetition learning system
            </p>
            <div class="flex w-full justify-center">
              <NuxtLink to="/discover" class="mx-auto">
                <button
                  class="btn btn-primary transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                  Learn more
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="hero min-h-screen bg-base-100 lg:w-1/2">
        <div class="flex flex-col h-fit justify-center justify-between">
            <div class=" pb-8 pt-5 lg:hidden flex ml-3 items-center space-x-3">
              <div class=' h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 '>
                <img src='https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true'/>
              </div>
              <h1
                class="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
              >
                Memnix
              </h1>
            </div>
            <IndexAuth />
            <div class="mx-auto py-6 lg:hidden items-center">
              <p class="py-6 font-bold italic">
                A spaced repetition learning system
              </p>
              <div class="flex w-full justify-center">

              <NuxtLink to="/discover">
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
    </div>
  </section>
</template>

<script lang="ts" setup>
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
