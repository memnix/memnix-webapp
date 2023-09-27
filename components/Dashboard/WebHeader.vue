<script lang="ts" setup>
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();

const user = ref(userStore.user);

if (!user.value.avatar) {
  user.value.avatar = "/img/icon.png";
}
</script>

<template>
  <div class="navbar transition-all md:px-5">
    <div class="navbar-start">
      <NuxtLink class="" href="/dashboard">
        <div
          class="hoveranimation ml-2 flex items-center self-center whitespace-nowrap text-2xl font-bold md:text-xl"
        >
          <NuxtImg
            alt="Memnix app logo"
            class="hidden md:block"
            format="webp"
            height="64"
            preload
            quality="70"
            src="/img/icon.png"
            width="64"
          />

          <h2
            class="from-primary to-secondary text-primary via-[#CC7F97] bg-clip-text text-4xl font-bold dark:bg-gradient-to-r dark:text-transparent"
          >
            Memnix
          </h2>
        </div>
      </NuxtLink>
      <div class="divider divider-horizontal"></div>
      <NuxtLink class="btn btn-ghost" href="/browse"> Decks </NuxtLink>
      <NuxtLink class="btn btn-ghost" href="/creator"> Creator </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="btn btn-ghost rounded-btn">
        <span class="hidden md:block">{{ user.username }}</span>
        <div class="avatar pl-3">
          <div class="w-12 rounded-xl">
            <NuxtImg :src="user.avatar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
