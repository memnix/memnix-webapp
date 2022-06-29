<template>
  <div class="m-14 w-full bg-base-200">
    <div class="fixed inset-x-0 bottom-0 block bg-base-200 shadow-xl">
      <div
        class="flex h-12 flex-row items-center justify-between px-7 pb-2 md:h-16 md:px-20 lg:px-40 xl:px-56"
      >
        <NuxtLink class="hoveranimation">
          <Icon-lucide-bell
            class="pt-1 text-2xl md:text-[1.7em] lg:text-[2em]"
          />
        </NuxtLink>
        <NuxtLink class="hoveranimation">
          <Icon-lucide-pencil
            class="pt-1 text-2xl md:text-[1.7em] lg:text-[2em]"
          />
        </NuxtLink>

        <NuxtLink class="hoveranimation">
          <button
            :class="route.name === 'home' ? 'btn-primary ' : ''"
            class="btn-neutral btn no-animation h-[3rem] w-[3rem] -translate-y-4 rounded-full p-0 md:h-[4rem] md:w-[4rem]"
          >
            <Icon-mdi-home-outline
              class="text-3xl md:text-[2.3em] lg:text-[2.5em]"
            />
          </button>
        </NuxtLink>
        <NuxtLink class="hoveranimation">
          <Icon-mdi-cards-outline
            class="hoveranimation pt-1 text-2xl md:text-[1.7em] lg:text-[2em]"
          />
        </NuxtLink>
        <NuxtLink class="hoveranimation">
          <Icon-lucide-user
            class="pt-1 text-2xl md:text-[1.7em] lg:text-[2em]"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped></style>
