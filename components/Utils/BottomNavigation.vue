<template>
  <div class="w-full">
    <section class="fixed inset-x-0 bottom-0 block bg-base-100 shadow">
      <div class="tabs justify-between pb-2">
        <a
          class="tab tab-bordered tab-md h-16 grow lg:tab-lg lg:h-16"
          :class="route.name === 'play' ? 'tab-active' : ''"
        >
          <Icon-lucide-play style="font-size: 1.5em" />
        </a>
        <a
          class="tab tab-bordered tab-md h-16 grow lg:tab-lg lg:h-16"
          :class="route.name === 'home' ? 'tab-active' : ''"
        >
          <Icon-lucide-home style="font-size: 1.5em" />
        </a>
        <a
          class="tab tab-bordered tab-md h-16 grow lg:tab-lg lg:h-16"
          :class="route.name === 'decks' ? 'tab-active' : ''"
        >
          <Icon-lucide-book style="font-size: 1.5em" />
        </a>
        <a
          class="tab tab-bordered tab-md h-16 grow lg:tab-lg lg:h-16"
          :class="route.name === 'profile' ? 'tab-active' : ''"
        >
          <Icon-lucide-user style="font-size: 1.5em" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>
