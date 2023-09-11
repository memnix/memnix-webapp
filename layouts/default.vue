<template>
  <div>
    <div v-if="isConnected">
      <DashboardWebHeader />
    </div>
    <div v-else>
      <GlobalAppHeader />
    </div>

    <div class="min-h-screen">
      <slot />
    </div>
    <GlobalAppFooter />
  </div>
</template>
<script setup lang="ts">
import { isConnectionValid } from "~/utils/security";

const token = useCookie("jwt-token")?.value;

const isConnected = (token && (await isConnectionValid(token))) || false;
</script>
