<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="flex-none lg:hidden">
        <label class="btn btn-ghost btn-square" for="my-drawer-3">
          <svg
            class="inline-block h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </label>
      </div>
      <NuxtLink class="hoveranimation btn btn-ghost text-xl normal-case" to="/"
        ><h1
          class="from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-4xl font-bold text-primary hover:animate-pulse dark:bg-gradient-to-r dark:text-transparent"
        >
          Memnix
        </h1></NuxtLink
      >
    </div>
    <div class="navbar-center hidden text-xl lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <NuxtLink class="hoveranimation hover:text-accent" to="/discover">
            {{ $t('discover') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hoveranimation hover:text-accent" to="/team">
            {{ $t('our_team') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="hoveranimation uppercase hover:text-accent"
            to="/faq"
          >
            {{ $t('faq') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hoveranimation hover:text-accent" to="/discord"
            >Discord
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <UtilsLangSwitcher />
      <UtilsThemeSwitcher class="mx-5" />
      <NuxtLink class="hidden md:block" to="/#auth">
        <button
          class="btn btn-primary mx-5 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:animate-pulse"
        >
          {{ $t('login') }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped></style>
