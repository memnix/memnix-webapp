<template>
  <section class="bg-base-100">
    <div class="pb-5">
      <div class="bg-base-100">
        <div class="container mx-auto px-5 py-24">
          <div class="mb-20 flex w-full flex-col text-center">
            <h1
              class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
            >
              {{ $t('our_team') }}
            </h1>
            <div class="mx-auto text-base leading-relaxed lg:w-2/3">
              {{ $t('our_team_content') }}
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <TeamStaff
              class="w-full p-4 md:w-1/2 lg:w-1/3"
              discord="282233191916634113"
              github="corentings"
              image="https://raw.githubusercontent.com/CorentinGS/corentings.github.io/main/public/img/avatar.webp"
              :job="$t('main_developer')"
              name="Corentin GS"
              twitter="GSCorentinDev"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto bg-base-200 px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h1
          class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
        >
          {{ $t('our_contributors') }}
        </h1>
        <div class="mx-auto text-base leading-relaxed lg:w-2/3">
          {{ $t('our_contributors_content') }}
        </div>
      </div>
      <div class="my-3 flex justify-center space-x-2">
        <UtilsTeamContrib
          class="py-2 md:w-1/2 lg:w-1/3"
          image="/icon.png"
          :job="$t('translator')"
          name="Chris"
        />
        <UtilsTeamContrib
          class="py-2 md:w-1/2 lg:w-1/3"
          image="/icon.png"
          :job="$t('translator')"
          name="vlad"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TeamStaff from '~/components/Utils/TeamStaff.vue'

definePageMeta({ layout: 'static' })

useHead({
  title: 'Memnix App - Our Team',
  meta: [
    {
      name: 'description',
      content: "Memnix's team",
    },
  ],
})
</script>

<style scoped></style>
