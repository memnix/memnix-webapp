<template>
  <footer class="footer items-center bg-base-200 p-4">
    <div class="grid-flow-col items-center">
      <div class="h-10 w-10">
        <nuxt-img
          alt="moutmout"
          height="100%"
          src="https://github.com/memnix/memnix/blob/main/assets/images/moutmout-bw.png?raw=true"
          width="100%"
          format="webp"
          loading="lazy"
          quality="80"
        />
      </div>
      <p>Copyright © 2022 - All right reserved - Memnix.app</p>
    </div>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <NuxtLink :to="'https://twitter.com/' + twitter" target="_blank">
        <Icon-lucide-twitter
          class="h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      </NuxtLink>
      <NuxtLink :to="'https://discord.gg/' + discord" target="_blank">
        <Icon-la-discord
          class="h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      </NuxtLink>
      <NuxtLink :to="'https://github.com/' + github" target="_blank">
        <Icon-lucide-github
          class="h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      </NuxtLink>
      <NuxtLink
        :to="'https://www.youtube.com/channel/' + youtube"
        target="_blank"
      >
        <Icon-lucide-youtube
          class="h-6 w-6 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      </NuxtLink>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const youtube = 'UCCF8LVU77iNt-4Lq8QTw5wA'
const twitter = 'memnixapp'
const github = 'memnix'
const discord = 'de4hY4VEkJ'
</script>

<style scoped></style>
