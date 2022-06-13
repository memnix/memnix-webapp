<template>
  <div
    class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-200 lg:drop-shadow-md"
  >
    <div class="px-6 py-4">
      <h2 class="text-center text-3xl font-medium">{{ $t('welcome_back') }}</h2>
      <form>
        <div class="mt-4 w-full">
          <input
            aria-label="Email Address"
            class="input input-bordered input-ghost input-neutral w-full"
            placeholder="Email"
            type="email"
          />
        </div>

        <div class="mt-4 w-full">
          <input
            aria-label="Password"
            class="input input-bordered input-ghost input-neutral w-full "
            placeholder="Password"
            type="password"
          />
        </div>

        <div class="mt-4 flex w-full justify-center">
          <button
            class="btn btn-primary w-full transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            type="button"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div class="grid grid-cols-2 items-center gap-4 justify-between mt-2 px-6 mb-5 text-center">
      <div>
        <button
          class="btn btn-neutral w-full mx-auto transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          type="button"
          @click="$emit('registerPageEvent')"
        >
          Register
        </button>
      </div>
      <div>
        <button
          class="btn btn-secondary w-full transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
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
