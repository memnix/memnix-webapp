<template>
  <section class="bg-base-100">
    <div class="container mx-auto px-6 py-10">
      <h1
        class="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
      >
        {{ $t('learn_more_memnix') }}
      </h1>
      <h2 class="my-2 text-2xl">
        <a class="underline decoration-secondary decoration-4">
          {{ $t('revolutionize_learning') }}</a
        >
      </h2>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
        class="mt-12 h-64 min-w-full overflow-hidden rounded-xl object-cover md:h-[600px] lg:h-[700px]"
        src="https://www.youtube-nocookie.com/embed/c9p9QecLhww"
        title="Memnix app"
      ></iframe>
      <div
        class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:gap-12"
      >
        <UtilsFeatureBox icon="heart" :title="$t('a_personalized_system')">
          <div class="text-sm lg:text-lg">
            {{ $t('a_personalized_system_content') }}
          </div>
        </UtilsFeatureBox>
        <UtilsFeatureBox icon="trending" :title="$t('take_memnix_challenge')">
          <div class="text-sm lg:text-lg">
            {{ $t('take_memnix_challenge_content') }}
          </div>
        </UtilsFeatureBox>
        <UtilsFeatureBox icon="time" :title="$t('save_time')">
          <div class="text-sm lg:text-lg">
            {{ $t('save_time_content') }}
          </div>
        </UtilsFeatureBox>
        <UtilsFeatureBox
          icon="accessible"
          :title="$t('accessible_from_anywhere')"
        >
          <div class="text-sm lg:text-lg">
            {{ $t('accessible_from_anywhere_content') }}
          </div>
        </UtilsFeatureBox>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'static', keepalive: true })

useHead({
  title: 'Memnix App - Discover',
  meta: [
    {
      name: 'description',
      content: 'Discover Memnix',
    },
  ],
})
</script>

<style scoped></style>
