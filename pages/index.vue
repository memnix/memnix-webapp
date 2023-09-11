<template>
  <LandingHero />
</template>

<script setup>
import auth from "~/middleware/auth";

definePageMeta({
  middleware: [auth],
});
</script>
