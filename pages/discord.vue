<template>
  <section class="bg-base-200 xl:h-screen">
    <div class="container mx-auto px-6 py-14">
      <div class="my-12 max-w-xl">
        <h1
          class="mb-5 bg-gradient-to-r from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-5xl font-bold text-transparent hover:animate-pulse"
        >
          Memnix's Discord
        </h1>
        <h2 class="mb-6 text-2xl">
          Join the Memnix discord to meet developers and contributors, take part
          in the project and be part of a friendly community
          <a class="underline decoration-secondary decoration-4"
            >be part of a friendly community</a
          >
        </h2>
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
        <UtilsFeatureBox title="Meet our team" icon="message">
          <p class="text-sm lg:text-lg">
            Meet
            <a
              class="underline decoration-secondary decoration-2 lg:decoration-4"
              >the team of contributors
            </a>
            behind Memnix and chat about the project
            <a class="underline decoration-accent decoration-2 lg:decoration-4"
              >to suggest improvements</a
            >
            or share your opinion
          </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox title="Unique benefits" icon="crown">
          <p class="text-sm lg:text-lg">
            Enjoy
            <a
              class="underline decoration-secondary decoration-2 lg:decoration-4"
              >new features in beta</a
            >, contests to try to win perks and
            <a class="underline decoration-accent decoration-2 lg:decoration-4"
              >unique events</a
            >
          </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox title="Contribute to the project" icon="code">
          <p class="text-sm lg:text-lg">
            <a
              class="underline decoration-secondary decoration-2 lg:decoration-4"
              >Contribute</a
            >
            to the project by proposing translations and new features or by
            coding, designing and creating decks
          </p>
        </UtilsFeatureBox>
        <UtilsFeatureBox title="A nice community" icon="users">
          <p class="text-sm lg:text-lg">
            Memnix is based on a
            <a
              class="underline decoration-secondary decoration-2 lg:decoration-4"
              >real community</a
            >
            of helpers whose goal is to
            <a class="underline decoration-accent decoration-2 lg:decoration-4"
              >ease learning</a
            >
            for everyone
          </p>
        </UtilsFeatureBox>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'static' })
</script>

<style scoped></style>
