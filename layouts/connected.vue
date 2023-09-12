<template>
  <div>
    <div v-if="isDesktop">
      <DashboardWebHeader />
    </div>
    <div class="min-h-screen">
      <slot />
    </div>
    <div v-if="!isDesktop" class="min-w-screen mt-12">
      <DashboardBottomNav />
    </div>
  </div>
</template>
<script setup lang="ts">
const { isDesktop } = useDevice();
</script>
