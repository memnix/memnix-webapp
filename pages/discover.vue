<template>
  <section class="bg-base-200">
    <div class="container mx-auto px-6 py-10">
      <h1
        class="bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
      >
        Learn more about Memnix
      </h1>
      <h2 class='text-2xl my-2'>
        Revolutionize your learning experience with Memnix, an application that <a class='underline decoration-secondary decoration-4'>adapts to everyone's pace!</a>
      </h2>
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
        <UtilsFeatureBox title="A Personalized System" icon="heart">
            <p class="text-sm lg:text-lg">
              Create your own flash cards according to your  <a class='underline decoration-secondary decoration-2 lg:decoration-4'> own specific needs </a>or explore those in  <a class='underline decoration-accent decoration-2 lg:decoration-4'>our public database</a>
            </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox title="Take the memnix challenge" icon="trending">
          <p class="text-sm lg:text-lg">
            Seize the opportunity to learn by playing against yourself and to exceed your limits,  <a class='underline decoration-secondary decoration-2 lg:decoration-4'>intended for everyone and accessible for free</a>
          </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox title="Save time" icon="time">
          <p class="text-sm lg:text-lg">
            Don't worry about <a class='underline decoration-accent decoration-2 lg:decoration-4'>planning your studies</a>, Memnix will take care of everything and <a class='underline decoration-secondary decoration-2 lg:decoration-4'>optimize your revisions</a>
          </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox title="Accessible from anywhere" icon="accessible">
          <p class="text-sm lg:text-lg">
            <a class='underline decoration-secondary decoration-2 lg:decoration-4'>Wherever and whenever you need it</a>, Memnix is <a class='underline decoration-accent decoration-2 lg:decoration-4'>accessible</a> from any computer as long as you are connected to the Internet
          </p>
        </UtilsFeatureBox>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'static', keepalive: true })
</script>

<style scoped></style>
