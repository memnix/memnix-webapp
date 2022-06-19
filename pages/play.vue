<template >
  <HeaderPlay />
  <div
    class="md:pt-15 flex flex-col items-center px-5 pt-2 lg:px-20 lg:pt-10"
  >
    <div class="text-center">
      <h3 class="my-5 text-xl md:text-2xl lg:text-3xl">
        Quelle est la plus ancienne distribution Linux ?
      </h3>
      <div class="rounded-box max-w-2xl shadow-lg">
        <img
          src="https://api.lorem.space/image/movie?w=1024&h=1024&hash=8B7BCDC2"
          loading="lazy"
          width="1024px"
          height="1024px"
        />
      </div>

      <div class="grid max-w-2xl grid-cols-2 grid-rows-2 gap-4 py-10">
        <div class="hoveranimation btn btn-primary w-full">One</div>
        <div class="hoveranimation btn btn-primary w-full">One</div>
        <div class="hoveranimation btn btn-primary w-full">One</div>
        <div class="hoveranimation btn btn-primary w-full">One</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<script>
import HeaderPlay from '../components/Utils/HeaderPlay'
export default {
  components: { HeaderPlay },
}
</script>
