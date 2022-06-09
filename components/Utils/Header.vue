<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a
              :class="route.name === 'discover' ? 'text-accent' : ''"
              href="/discover"
              >Discover</a
            >
          </li>
          <li>
            <a :class="route.name === 'team' ? 'text-accent' : ''" href="/team"
              >Our team</a
            >
          </li>
          <li>
            <a :class="route.name === 'faq' ? 'text-accent' : ''" href="/faq"
              >FAQ</a
            >
          </li>
          <li>
            <a
              :class="route.name === 'discord' ? 'text-accent' : ''"
              href="/discord"
              >Discord</a
            >
          </li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl normal-case" href='/'>Memnix</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <a
            class="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent"
            :class="route.name === 'discover' ? 'text-accent' : ''"
            href="/discover"
            >Discover</a
          >
        </li>
        <li>
          <a
            class="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent"
            :class="route.name === 'team' ? 'text-accent' : ''"
            href="/team"
            >Our team</a
          >
        </li>
        <li>
          <a
            class="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent"
            :class="route.name === 'faq' ? 'text-accent' : ''"
            href="/faq"
            >FAQ</a
          >
        </li>
        <li>
          <a
            class="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-accent"
            :class="route.name === 'discord' ? 'text-accent' : ''"
            href="/discord"
            >Discord</a
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <UtilsLangSwitcher />
      <button
        class="btn btn-primary mx-5 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:animate-pulse"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>
