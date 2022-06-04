<template>
  <div
    class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-2xl"
  >
    <div class="px-6 py-4">
      <h2 class="text-center text-3xl font-bold">Welcome Back !</h2>
      <h3 class="mt-1 text-center text-xl font-medium">Login</h3>
      <form>
        <div class="mt-4 w-full ">
          <input
            aria-label="Email Address"
            class="input input-bordered input-accent input-ghost w-full max-w-xs"
            placeholder="Email"
            type="email"
          />
        </div>

        <div class="mt-4 w-full">
          <input
            aria-label="Password"
            class="input input-bordered input-accent w-full input-ghost max-w-xs"
            placeholder="Password"
            type="password"
          />
        </div>

        <div class="mt-4 flex items-center justify-between">
          <a class="text-sm" href="#">Forget Password?</a>
          <button class="btn btn-accent rounded" type="button">Login</button>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div class="flex items-center justify-center py-4 text-center">
      <span class="text-sm">Don't have an account? </span>
      <a
        class="mx-2 text-sm font-bold text-blue-500 hover:underline dark:text-blue-400"
        @click="$emit('registerPageEvent')"
        >Register</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
