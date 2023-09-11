<script setup lang="ts">
import auth from "~/middleware/auth";

const { t } = useI18n();

const discordEndpoint = baseUrl + ENDPOINTS.Security.discord;
const githubEndpoint = baseUrl + ENDPOINTS.Security.github;

definePageMeta({
  middleware: [auth],
});
</script>

<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 class="mb-4 text-center text-2xl font-bold md:mb-8 lg:text-3xl">
        {{ t("auth.login") }}
      </h2>
      <div class="mx-auto max-w-lg rounded-lg border">
        <AuthLogin />

        <div class="flex flex-col gap-4 px-4">
          <div class="relative flex items-center justify-center">
            <span class="bg-base-content absolute inset-x-0 h-px"></span>
            <span class="bg-base-100 relative px-4 text-sm">
              Log in with social
            </span>
          </div>

          <a
            class="btn-accent btn flex items-center justify-center gap-2 px-8 py-2 transition duration-100"
            :href="githubEndpoint"
          >
            <Icon name="lucide:github" height="none" />
            Continue with github
          </a>
          <a
            class="btn-secondary btn flex items-center justify-center gap-2 px-8 py-2 transition duration-100"
            :href="discordEndpoint"
          >
            <Icon name="ic:baseline-discord" height="none" />
            Continue with discord
          </a>
        </div>

        <div class="flex items-center justify-center p-4">
          <p class="text-center text-sm">
            Don't have an account?
            <a class="text-secondary transition duration-100"> Register </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
