<script lang="ts" setup>
import connected from "~/middleware/connected";

definePageMeta({
  middleware: [connected],
  layout: "empty",
});

const card = {
  question: "Card Title",
  image: "https://cdn.discordapp.com/attachments/953740345793986610/953746593914429511/Europe_1815_map_en.png",

}

const progress = ref(20)
const mcq = ref(false)

</script>

<template>
  <div>
    <div class=" h-screen max-h-screen w-screen !max-w-none">
      <div class="flex flex-col items-center px-5 pt-2 md:pt-5 lg:px-20">
        <div class="hoveranimation absolute left-0 top-[0.5rem]">
          <NuxtLink class="btn btn-ghost px-5" href="/browse">
            <Icon class="h-6 w-6" name="mdi:arrow-left"/>
            Back to decks list
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center px-5 pt-10 md:pt-5 pb-10">
          <h3 class="text-2xl font-bold lg:text-3xl py-5">{{ card.question }}</h3>
          <div class="relative overflow-hidden rounded-lg md:h-1/3 md:w-1/3">
            <NuxtImg
                :src="card.image"
                class="h-full w-full object-cover object-center"
                format="webp"
                height="250"
                loading="lazy"
                quality="50"
                width="250"
            />
            <div v-if="!mcq" class="flex flex-row justify-between w-full py-10">
              <input
                  class="w-full input input-bordered mr-2 rounded-lg text-sm focus:outline-none"
                  placeholder="Answer"
                  type="text"/>
              <button class="btn btn-primary">
                <Icon class="h-6 w-6" name="mdi:arrow-right"/>
              </button>
            </div>
            <div v-if="mcq" class="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
              <button class="btn btn-primary">Answer 1</button>
              <button class="btn btn-primary">Answer 2</button>
              <button class="btn btn-primary">Answer 3</button>
              <button class="btn btn-primary">Answer 4</button>
            </div>
          </div>
        </div>
        <progress
            :value="progress"
            class="progress progress-primary max-w-xl"
            max="100"
        ></progress>
      </div>
    </div>
  </div>
</template>
