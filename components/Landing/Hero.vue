<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section
    class="mx-auto max-w-6xl px-4 pt-[72px] sm:px-6 md:flex md:h-screen md:min-h-[calc(100vh-72px)] 2xl:h-auto"
  >
    <div class="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
      <div class="mx-auto flex basis-3/5 items-center pb-12 md:py-0 md:pr-16">
        <div>
          <h1
            class="leading-tighter font-heading mb-4 px-4 text-5xl font-bold tracking-tighter md:px-0 md:text-[3.48rem]"
          >
            A <span class="text-accent">spaced repetition </span>
            <span class="lg:block">learning app </span>
            <span class="text-secondary sm:whitespace-nowrap">using AI</span>
          </h1>
          <div class="mx-auto max-w-3xl">
            <div
              class="m-auto flex max-w-xs flex-col flex-nowrap justify-center gap-4 sm:max-w-md sm:flex-row md:m-0 md:justify-start"
            >
              <div class="flex w-full sm:w-auto">
                <NuxtLinkLocale
                  class="btn btn-primary w-full sm:mb-0"
                  to="/auth"
                  rel="noopener"
                >
                  {{ t("cta.get_started") }}
                </NuxtLinkLocale>
              </div>
              <div class="flex w-full sm:w-auto">
                <NuxtLink
                  to="https://github.com/CorentinGS"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline w-full"
                >
                  {{ t("cta.learn_more") }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block flex-1 items-center md:flex">
        <div class="relative m-auto max-w-4xl">
          <NuxtImg
            src="/img/icon.png"
            alt="Memnix app logo"
            class="hidden md:block"
            width="800"
            height="800"
            format="webp"
            quality="70"
            preload
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
