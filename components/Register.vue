<template>
  <div
    class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-2xl"
  >
    <div class="px-6 py-4">
      <h2 class="text-center text-3xl font-bold">Welcome Back !</h2>
      <h3 class="mt-1 text-center text-xl font-medium">Register</h3>

      <form>
        <div class="mt-4 w-full">
          <input
            aria-label="Username"
            class="input input-bordered input-accent input-ghost w-full max-w-xs"
            placeholder="Username"
            type="text"
          />
        </div>
        <div class="mt-4 w-full">
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
            class="input input-bordered input-accent input-ghost w-full max-w-xs"
            placeholder="Password"
            type="password"
          />
        </div>

        <div class="mt-4 flex mx-auto">
          <div class="flex flex-nowrap">
          <label class="label cursor-pointer">
            <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
          </label>
          <span class="label-text my-auto">Accept TOS</span>
          </div>
          <div class="divider divider-horizontal"></div>
          <button class="btn btn-accent rounded mx-auto" type="button">Register</button>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div class="flex items-center justify-center bg-base-100 py-4 text-center">

      <span class="text-sm">Already have an account? </span>
      <a
        class="mx-2 text-sm font-bold text-blue-500 hover:underline dark:text-blue-400"
        @click="$emit('loginPageEvent')"
        >Login</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
