<script lang="ts" setup>
definePageMeta({
  layout: "empty",
});

async function isConnected() {
  const token = useCookie("jwt-token")?.value;
  const isConnected = token && (await isConnectionValid(token));

  console.log(isConnected);
}

const route = useRoute();

const deck = {
  title: "European Capitals",
  description: "Deck Description",
  cardNumber: 10,
  tags: ["tag1", "tag2", "tag3"],
  learners: 5,
  lastUpdated: "2021-10-10",
  author: "Author Name",
  image:
    "https://cdn.discordapp.com/attachments/953740345793986610/953746593914429511/Europe_1815_map_en.png",
  category: "category",
};
</script>

<template>
  <div>
    <!-- header - start -->
    <button class="btn btn-ghost px-5" @click="$router.push('/decks')">
      <Icon class="h-6 w-6" name="mdi:arrow-left" />
      Back to decks list
    </button>
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-lg px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 gap-y-4">
          <!-- images - start -->
          <div class="">
            <div class="relative overflow-hidden rounded-lg">
              <NuxtImg
                :src="deck.image"
                alt="Photo by Himanshu Dewangan"
                class="h-full w-full object-cover object-center"
                height="500"
                loading="lazy"
                width="500"
              />
            </div>
          </div>
          <!-- images - end -->

          <!-- content - start -->
          <div class="md:pt-4">
            <!-- name - start -->
            <div class="mx-2 mb-2 md:mb-3">
              <h1 class="text-2xl font-bold lg:text-3xl">{{ deck.title }}</h1>
            </div>
            <!-- name - end -->
            <div class="divider"></div>

            <!-- size - start -->
            <div
              class="grid gap-1 grid-cols-3 xl:gap-2 min-w-fit max-w-xs mb-3"
            >
              <!-- feature - start -->
              <div class="flex flex-col items-center">
                <Icon class="h-6 w-6" name="mdi:card-multiple" />
                <p class="mb-2 text-center text-lg font-semibold md:text-xl">
                  {{ deck.cardNumber }} cards
                </p>
              </div>
              <!-- feature - end -->

              <!-- feature - start -->
              <div class="flex flex-col items-center">
                <Icon class="h-6 w-6" name="ic:star" />
                <p class="mb-2 text-center text-lg font-semibold md:text-xl">
                  4.3
                </p>
              </div>
              <!-- feature - end -->

              <!-- feature - start -->
              <div class="flex flex-col items-center">
                <Icon class="h-6 w-6" name="ph:student-fill" />
                <p class="mb-2 text-center text-lg font-semibold md:text-xl">
                  {{ deck.learners }} learners
                </p>
              </div>
              <!-- feature - end -->
            </div>
            <!-- size - end -->

            <!-- color - start -->
            <div class="mb-4 md:mb-6">
              <div class="flex flex-wrap gap-2">
                <div v-if="deck.tags.length >= 1" class="badge badge-outline">
                  {{ deck.tags[0] }}
                </div>
                <div
                  v-if="deck.tags.length >= 2"
                  class="badge badge-primary badge-outline"
                >
                  {{ deck.tags[1] }}
                </div>
                <div
                  v-if="deck.tags.length >= 3"
                  class="badge badge-secondary badge-outline"
                >
                  {{ deck.tags[2] }}
                </div>
                <div
                  v-if="deck.tags.length >= 4"
                  class="badge badge-accent badge-outline"
                >
                  {{ deck.tags[3] }}
                </div>
                <div
                  v-if="deck.tags.length >= 5"
                  class="badge badge-info badge-outline"
                >
                  {{ deck.tags[4] }}
                </div>
              </div>
            </div>
            <!-- color - end -->

            <!-- author notice - start -->
            <div class="mb-2 flex items-center gap-2">
              <Icon class="h-6 w-6" name="material-symbols:person" />
              <span class="text-sm">{{ deck.author }}</span>
            </div>
            <!-- author notice - end -->

            <!-- last updated notice - start -->
            <div class="mb-6 flex items-center gap-2">
              <Icon class="h-6 w-6" name="ic:baseline-calendar-month" />
              <span class="text-sm">Last update: {{ deck.lastUpdated }}</span>
            </div>
            <!-- last updated notice - end -->
          </div>

          <!-- description - start -->
          <div class="">
            <h2 class="mb-3 text-lg font-semibold">Description</h2>
            <p class="">
              {{ deck.description }}
            </p>
          </div>
          <!-- description - end -->
          <div>
            <button class="btn btn-primary w-full" @click="isConnected">
              Subscribe
            </button>
          </div>
          <!-- content - end -->
        </div>
      </div>
    </div>
  </div>
</template>
