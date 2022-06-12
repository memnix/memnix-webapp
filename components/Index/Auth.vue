<template>
  <div v-if="page === 0">
    <LazyIndexLogin @register-page-event="registerPageEvent" />
  </div>
  <div v-else-if="page === 1">
    <LazyIndexRegister @login-page-event="loginPageEvent" />
  </div>
</template>

<script lang="ts" setup>
const page = ref(0)

const registerPageEvent = () => {
  page.value = 1
}

const loginPageEvent = () => {
  page.value = 0
}
</script>

<style scoped></style>
