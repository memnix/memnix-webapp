<template>
  <section class="h-screen bg-base-100">
    <div class="container mx-auto px-6 py-12">
      <h1
        class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-center text-5xl font-bold text-transparent hover:animate-pulse"
      >
        {{ $t('have_any_question') }}
      </h1>

      <div class="mt-8 lg:-mx-12 lg:flex xl:mt-16">
        <div class="lg:mx-12">
          <h1 class="text-xl font-semibold">{{ $t('need_further_help') }}</h1>
          <div class="mt-4 space-y-4 lg:mt-8">
            <NuxtLink
              class="hoveranimation block hover:text-accent hover:underline"
              to="/discord"
              >Discord
            </NuxtLink>
            <NuxtLink
              class="hoveranimation block hover:text-accent hover:underline"
              target="_blank"
              to="https://twitter.com/memnixapp"
              >Twitter
            </NuxtLink>
            <NuxtLink
              class="hoveranimation block hover:text-accent hover:underline"
              target="_blank"
              to="https://github.com/memnix"
              >Github
            </NuxtLink>
          </div>
        </div>

        <div class="mt-8 flex-1 lg:mx-12 lg:mt-0">
          <FaqContent
            :content="$t('who_is_behind_memnix_content')"
            :title="$t('who_is_behind_memnix')"
          />
          <FaqContent
            class="my-8"
            :content="$t('is_memnix_free_content')"
            :title="$t('is_memnix_free')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'static' })

useHead({
  title: 'Memnix App - FAQ',
  meta: [
    {
      name: 'description',
      content: "Memnix's faq",
    },
  ],
})
</script>

<style scoped></style>
