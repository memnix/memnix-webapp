<template>
  <section class="xl:h-screen bg-base-200">
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
          <a href="#">
            <button type="submit" class="btn btn-secondary">
              Join our Discord
            </button>
          </a>
        </div>
      </div>
      <div
        class="mt-10 lg:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-12"
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
