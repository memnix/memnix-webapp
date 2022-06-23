<template>
  <div class="max-h-screen">
    <div class="flex flex-col items-center px-5 pt-2 md:pt-5 lg:px-20">
      <div class="hoveranimation absolute left-0 top-[0.5rem]">
        <NuxtLink
          class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
          to="/home"
        >
          <Icon-lucide-arrow-left />
        </NuxtLink>
      </div>
      <CoreCard :card="card" />
      <progress
        class="progress progress-primary max-w-xl"
        value="40"
        max="100"
      ></progress>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '~/types'
import { themeChange } from 'theme-change'

onMounted(() => {
  const route = useRoute()
  console.log(route.query['deck'])
  themeChange(false)
})


let card = <Card>{
  ID: 1,
  card_question: "What's the best linux distro ?",
  card_image: 'https://api.lorem.space/image/movie?w=512&h=512&hash=500B67FB',
}
</script>

<style scoped></style>
