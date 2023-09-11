<script lang="ts" setup>
import connected from "~/middleware/connected";

definePageMeta({
  middleware: [connected],
  layout: "connected",
});

const { isDesktopOrTablet } = useDevice();

const decks = [
  {
    title: "Capitales d'Europe",
    description: "Apprendre les capitales d'europe !",
    image:
      "https://cdn.discordapp.com/attachments/953740345793986610/953746593914429511/Europe_1815_map_en.png",
  },
  {
    title: "Capitales d'Asie",
    description: "Apprendre les capitales d'Asie !",
    image:
      "https://media.discordapp.net/attachments/953740345793986610/954726437657657464/Asia_vectorial_map.jpg",
  },
  {
    title: "Capitales NA",
    description: "Apprendre les capitales d'Amérique du Nord !",
    image:
      "https://media.discordapp.net/attachments/953740345793986610/954727322186055732/iu.png",
  },
  {
    title: "Les Échecs",
    description: "Apprendre les champions d'échecs !",
    image:
      "https://images.chesscomfiles.com/uploads/v1/article/27319.746c2259.668x375o.c6cf8543e2d5@2x.png",
  },
];
</script>

<template>
  <div>
    <div
      class="flex flex-col items-center px-5 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <div
        class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue"
      >
        <div class="w-full mx-auto">
          <h1>Your dashboard</h1>
        </div>
      </div>

      <div
        v-for="deck in decks"
        :key="deck.title"
        class="p-2 lg:w-3/4 md:w-11/12 w-full"
      >
        <LazyDashboardDeckCard
          v-if="isDesktopOrTablet"
          :description="deck.description"
          :image="deck.image"
          :title="deck.title"
        />
        <LazyDashboardMobileDeckCard
          v-else
          :description="deck.description"
          :image="deck.image"
          :title="deck.title"
        />
      </div>
      <div class="p-2 lg:w-3/4 md:w-11/12 w-full">
        <DashboardDeckSlotCard />
      </div>
    </div>
  </div>
</template>
