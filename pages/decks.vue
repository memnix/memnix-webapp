<script lang="ts" setup>

import connected from "~/middleware/connected";

definePageMeta({
  layout: "connected",
  middleware: [connected]
});

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
      <div class="flex flex-col w-full max-w-5xl mx-auto prose text-left">
        <div class="w-full">
          <h1>Browse decks</h1>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-11/12 md:w-11/12">
        <div v-for="deck in decks" :key="deck.title" class="w-full">
          <DiscoverDeckCard
              :description="deck.description"
              :image="deck.image"
              :title="deck.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>
