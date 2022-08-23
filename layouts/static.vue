<template>
  <div id="app-layout">
    <main>
      <div class="drawer">
        <input id="my-drawer-3" class="drawer-toggle" type="checkbox" />
        <div class="drawer-content flex flex-col">
          <!-- Navbar -->
          <UtilsHeader />
          <!-- Page Slot -->
          <slot />
          <UtilsFooter />
        </div>

        <div class="drawer-side">
          <label class="drawer-overlay" for="my-drawer-3"></label>
          <ul class="menu w-64 overflow-y-auto bg-base-100 p-4 sm:w-80">
            <!-- Sidebar content here -->
            <li>
              <NuxtLink to="/discover"> {{ $t('discover') }} </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/team"> {{ $t('our_team') }} </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq"> {{ $t('faq') }} </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/discord"> Discord </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://www.youtube.com/',
    },
    {
      rel: 'preconnect',
      href: 'https://s.ytimg.com',
    },
  ],
})

definePageMeta({
  layout: 'static',
})
</script>

<style scoped></style>
