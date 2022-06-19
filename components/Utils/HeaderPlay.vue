<template>
  <div class='navbar bg-base-200'>
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost text-xl" to="/home">
        <Icon-lucide-arrow-left style="font-size: 1.5em" />
      </NuxtLink>
    </div>
    <div class="navbar-center">
      <progress
        class="progress progress-primary w-48 sm:w-52 md:w-72 lg:w-80"
        value="10"
        max="100"
      ></progress>
    </div>
    <div class="navbar-end"></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>
