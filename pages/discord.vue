<template>
  <section class="bg-base-100 xl:h-screen">
    <div class="container mx-auto px-6 py-14">
      <div class="my-12 max-w-xl">
        <h1
          class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
        >
          {{ $t('memnix_discord') }}
        </h1>
        <h2 class="mb-6 text-2xl">
          {{ $t('memnix_discord_content') }}
        </h2>
        <div class="flex items-center">
          <NuxtLink to="https://discord.gg/de4hY4VEkJ" target="_blank">
            <button class="hoveranimation btn btn-secondary">
              {{ $t('join_our_discord') }}
            </button>
          </NuxtLink>
        </div>
      </div>
      <div
        class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 xl:gap-12"
      >
        <UtilsFeatureBox icon="message" :title="$t('meet_our_team')">
          <p class="text-sm lg:text-lg">
            {{ $t('meet_our_team_content') }}
          </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox icon="crown" :title="$t('unique_benetifs')">
          <p class="text-sm lg:text-lg">
            {{ $t('unique_benetifs_content') }}
          </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox icon="code" :title="$t('contribute_to_the_project')">
          <p class="text-sm lg:text-lg">
            {{ $t('contribute_to_the_project_content') }}
          </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox icon="users" :title="$t('a_nice_community')">
          <p class="text-sm lg:text-lg">
            {{ $t('a_nice_community_content') }}
          </p>
        </UtilsFeatureBox>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'static' })

useHead({
  title: 'Memnix App - Discord',
  meta: [
    {
      name: 'description',
      content: "Memnix's discord",
    },
  ],
})
</script>

<style scoped></style>
