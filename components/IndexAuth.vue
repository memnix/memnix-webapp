<template>
  <div v-if="page === 0">
    <Login @register-page-event="registerPageEvent" />
  </div>
  <div v-else-if="page === 1">
    <Register @login-page-event="loginPageEvent" />
  </div>
</template>

<script lang="ts" setup>
import Login from '~/components/Login.vue'

const page = ref(0)

const registerPageEvent = () => {
  page.value = 1
}

const loginPageEvent = () => {
  page.value = 0
}
</script>

<style scoped></style>
