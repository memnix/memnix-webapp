<script lang="ts" setup></script>

<template>
  <div class="navbar transition-all md:px-5">
    <div class="navbar-start">
      <NuxtLink class="" href="/">
        <span
          class="hoveranimation ml-2 flex items-center self-center whitespace-nowrap text-2xl font-bold md:text-xl"
        >
          <NuxtImg
            alt="Memnix app logo"
            class="hidden md:block"
            format="webp"
            height="64"
            preload
            quality="70"
            src="/img/icon.png"
            width="64"
          />

          <h2
            class="from-primary to-secondary text-primary via-[#CC7F97] bg-clip-text text-4xl font-bold dark:bg-gradient-to-r dark:text-transparent"
          >
            Memnix
          </h2>
        </span>
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <GlobalLangSelector />
      <NuxtLinkLocale
        aria-label="login"
        class="btn btn-primary ml-3 h-10 px-5 text-base shadow-none"
        to="/auth"
      >
        Login
      </NuxtLinkLocale>
    </div>
  </div>
</template>
