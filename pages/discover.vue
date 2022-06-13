<template>
  <section class="bg-base-200">
    <div class="container mx-auto px-6 py-10">
      <h1
        class="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
      >
        Learn more about Memnix
      </h1>
      <iframe
        class="mt-12 h-64 min-w-full overflow-hidden rounded-xl object-cover md:h-[600px] lg:h-[700px]"
        src="https://www.youtube-nocookie.com/embed/c9p9QecLhww"
        frameborder="0"
        title="Memnix app"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
      <div
        class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:gap-12"
      >
        <UtilsFeatureBox title="The master illuminates." content="Totoro">
          <Icon-lucide-component class="h-10 w-10" />
        </UtilsFeatureBox>
        <UtilsFeatureBox>
          <Icon-lucide-component class="h-10 w-10" />
        </UtilsFeatureBox>
        <UtilsFeatureBox>
          <Icon-lucide-component class="h-10 w-10" />
        </UtilsFeatureBox>
        <UtilsFeatureBox>
          <Icon-lucide-component class="h-10 w-10" />
        </UtilsFeatureBox>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'static', keepalive: true })
</script>

<style scoped></style>
