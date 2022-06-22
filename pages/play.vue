<template>
  <div class="max-h-screen">
    <div class="flex flex-col items-center px-5 pt-2 md:pt-5 lg:px-20">
      <div class="absolute left-0 top-[0.5rem] hoveranimation">
        <NuxtLink class="btn btn-ghost text-xl md:text-2xl lg:text-3xl" to="/home">
          <Icon-lucide-arrow-left  />
        </NuxtLink>
      </div>
      <CoreCard />
      <progress
        class="progress progress-primary max-w-xl"
        value="40"
        max="100"
      ></progress>
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
console.log(route.query['deck'])
</script>

<style scoped></style>
<script></script>
