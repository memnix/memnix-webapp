<template>
  <section class='h-screen bg-base-100'>
    <div class='container mx-auto px-6 py-12'>
      <h1
        class='mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-center text-5xl font-bold text-transparent hover:animate-pulse'
      >
        Have any Questions?
      </h1>

      <div class='mt-8 lg:-mx-12 lg:flex xl:mt-16'>
        <div class='lg:mx-12'>
          <h1 class='text-xl font-semibold'>
            Need further help?
          </h1>

          <div class='mt-4 space-y-4 lg:mt-8'>
            <NuxtLink
              class='block hoveranimation hover:text-accent hover:underline'
              to='/discord'
            >Discord
            </NuxtLink
            >
            <NuxtLink
              class='block hoveranimation hover:text-accent hover:underline'
              target='_blank'
              to='https://twitter.com/memnixapp'
            >Twitter
            </NuxtLink
            >
            <NuxtLink
              class='block hoveranimation hover:text-accent hover:underline'
              target='_blank'
              to='https://github.com/memnix'
            >Github
            </NuxtLink
            >
          </div>
        </div>

        <div class='mt-8 flex-1 lg:mx-12 lg:mt-0'>
          <FaqContent content='Memnix is an open source project created by CorentinGS (aka The Little Prince).'
                      title='Who is behind Memnix ?' />
          <FaqContent class='my-8' content='As for now Memnix is totally free !' title='Is Memnix free ?' />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts' setup>

definePageMeta({ layout: 'static' })
</script>

<style scoped></style>
