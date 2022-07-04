<template>
  <section class='bg-base-100'>
    <div class="pb-5">
      <div class='bg-base-100'>
        <div class="container mx-auto px-5 py-24">
          <div class="mb-20 flex w-full flex-col text-center">
            <h1
              class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
            >
              Our team
            </h1>
            <div class="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <TeamStaff
              class="p-4 w-full md:w-1/2 lg:w-1/3"
              image="https://dummyimage.com/200x200"
              name="Corentin GS"
              job="Main Developer"
              discord="282233191916634113"
              github="corentings"
              twitter="corentin_gs"
            />
            <TeamStaff
              class="p-4 w-full md:w-1/2 lg:w-1/3"
              image="https://dummyimage.com/200x200"
              name="Corentin GS"
              job="Main Developer"
              discord="282233191916634113"
              github="corentings"
              twitter="corentin_gs"
            />
          </div>
        </div>
      </div>
    </div>
    <div class='mx-auto bg-base-200 px-5 py-24'>
      <div class="mb-20 flex w-full flex-col text-center">
        <h1
          class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
        >
          Our Contributors
        </h1>
        <div class="mx-auto text-base leading-relaxed lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </div>
      </div>
      <div class="my-3 flex justify-center space-x-2">
        <UtilsTeamContrib
          class="py-2 md:w-1/2 lg:w-1/3"
          image="https://dummyimage.com/200x200"
          name="Chris"
          job="Translator"
        />
        <UtilsTeamContrib
          class="py-2 md:w-1/2 lg:w-1/3"
          image="https://dummyimage.com/200x200"
          name="vlad"
          job="Translator"

        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TeamStaff from '~/components/Utils/TeamStaff.vue'

definePageMeta({ layout: 'static' })
</script>

<style scoped></style>
