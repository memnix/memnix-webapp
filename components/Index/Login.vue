<template>
  <div
    class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md"
  >
    <div class="px-6 py-2">
      <h2 class="text-center text-3xl font-bold">{{ $t('welcome_back') }}</h2>
      <h3 class="mt-1 text-center text-xl font-medium">Login</h3>
      <form>
        <div class="mt-4 w-full">
          <input
            aria-label="Email Address"
            class="input input-bordered input-ghost input-accent w-full max-w-xs"
            placeholder="Email"
            type="email"
          />
        </div>

        <div class="mt-4 w-full">
          <input
            aria-label="Password"
            class="input input-bordered input-ghost input-accent w-full max-w-xs"
            placeholder="Password"
            type="password"
          />
        </div>

        <div class="mt-4 flex items-center justify-center">
          <button
            class="btn btn-accent btn-wide rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            type="button"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div class="grid grid-cols-2 items-center gap-4 justify-between my-2 px-4 text-center">
      <div>
        <button
          class="btn btn-neutral w-full mx-auto rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          type="button"
          @click="$emit('registerPageEvent')"
        >
          Register
        </button>
      </div>
      <div>
        <button
          class="btn btn-neutral  w-full rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          type="button"
        >
          Forget Password
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
