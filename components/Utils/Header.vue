<template>
  <div class='navbar bg-base-200'>
    <div class='navbar-start'>
      <div class='dropdown'>
        <label class='btn btn-ghost lg:hidden' tabindex='0'>
          <svg
            class='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 6h16M4 12h8m-8 6h16'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
          </svg>
        </label>
        <ul
          class='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow'
          tabindex='0'
        >
          <li>
            <NuxtLink to='/discover'> Discover</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/team'>Our team</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/faq'>FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/discord'>Discord</NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink class='hoveranimation btn btn-ghost text-xl normal-case' to='/'
      ><h1
        class='from-primary via-[#DF9594] via-[#CC7F97] via-[#AD6E9E] via-[#8163A2] to-secondary bg-clip-text text-4xl font-bold text-primary hover:animate-pulse dark:bg-gradient-to-r dark:text-transparent'
      >
        Memnix
      </h1></NuxtLink
      >
    </div>
    <div class='navbar-center hidden text-xl lg:flex'>
      <ul class='menu menu-horizontal p-0'>
        <li>
          <NuxtLink class='hoveranimation hover:text-accent' to='/discover'>
            Discover
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class='hoveranimation hover:text-accent' to='/team'
          >Our team
          </NuxtLink
          >
        </li>
        <li>
          <NuxtLink class='hoveranimation hover:text-accent' to='/faq'
          >FAQ
          </NuxtLink
          >
        </li>
        <li>
          <NuxtLink class='hoveranimation hover:text-accent' to='/discord'
          >Discord
          </NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class='navbar-end'>
      <UtilsLangSwitcher />
      <UtilsThemeSwitcher class='mx-5' />
      <NuxtLink class='hidden md:block' to='/#auth'>
        <button
          class='btn btn-primary mx-5 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:animate-pulse'
        >
          Login
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang='ts' setup>
const route = useRoute()
</script>

<style scoped></style>
