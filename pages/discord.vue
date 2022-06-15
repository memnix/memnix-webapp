<template>
  <section class="bg-base-200 xl:h-screen">
    <div class="container mx-auto px-6 py-14">
      <div class="my-12 max-w-xl">
        <h1
          class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
        >
          Memnix's Discord
        </h1>
        <p class="mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde omnis
          iste natus.
        </p>
        <div class="flex items-center">
          <NuxtLink href="#">
            <button class="hoveranimation btn btn-secondary">
              Join our Discord
            </button>
          </NuxtLink>
        </div>
      </div>
      <div
        class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 xl:gap-12"
      >
        <UtilsFeatureBox>
          <Icon-lucide-zap class="h-10 w-10" />
        </UtilsFeatureBox>
        <UtilsFeatureBox>
          <Icon-lucide-message-circle class="h-10 w-10" />
        </UtilsFeatureBox>
        <UtilsFeatureBox>
          <Icon-lucide-code-2 class="h-10 w-10" />
        </UtilsFeatureBox>
        <UtilsFeatureBox>
          <Icon-lucide-users class="h-10 w-10" />
        </UtilsFeatureBox>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'static' })
</script>

<style scoped></style>
