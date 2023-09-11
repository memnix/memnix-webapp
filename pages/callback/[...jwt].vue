<script setup lang="ts">
const route = useRoute();

const token = useCookie("jwt-token", {
  path: "/",
  maxAge: 60 * 60 * 24 * 30, // 30 days
});

token.value = route.params.jwt.toString(); // set token to cookie

navigateTo("/dashboard");
</script>

<template>
  <div>{{ $route.params.jwt }}</div>
</template>
