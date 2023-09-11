<template>
  <div>
    <div v-if="isDesktop">
      <DashboardWebHeader />
    </div>

    <div class="min-h-screen">
      <slot />
    </div>
    <div v-if="!isDesktop" class="min-w-screen">
      <DashboardBottomNav />
    </div>
  </div>
</template>
<script setup lang="ts">
const { isDesktop } = useDevice();
</script>
