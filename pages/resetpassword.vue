<template>
  <section class="h-screen bg-base-200">
    <div
      class="container mx-auto flex h-full w-full flex-col place-content-center px-5 py-24"
    >
      <div class="mx-auto mb-20">
        <ul class="steps">
          <li
            class="step sm:mx-5 md:mx-7 lg:mx-10"
            :class="step >= 1 ? 'step-primary' : ''"
          >
            Email
          </li>
          <li class="step" :class="step >= 2 ? 'step-primary' : ''">
            Validate
          </li>
          <li class="step" :class="step >= 3 ? 'step-primary' : ''">
            Password
          </li>
          <li class="step" :class="step >= 4 ? 'step-primary' : ''">Done</li>
        </ul>
      </div>
      <div
        v-show="step === 1"
        class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md"
      >
        <div class="px-6 py-4">
          <h2 class="text-center text-3xl font-bold">Enter your email</h2>
          <h3 class="mt-1 text-center text-xl font-medium">Password reset</h3>
          <form>
            <div class="mt-4 w-full">
              <input
                aria-label="Email Address"
                class="input input-bordered input-ghost input-accent w-full max-w-xs"
                placeholder="Email"
                type="email"
              />
            </div>
            <div class="mt-4 flex items-center justify-end">
              <button
                class="btn btn-accent rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                type="button"
                @click='step === 2'
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        v-show="step === 2"
        class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md"
      >
        <div class="px-6 py-4">
          <h2 class="text-center text-3xl font-bold">
            Enter the code you received
          </h2>
          <h3 class="mt-1 text-center text-xl font-medium">Password reset</h3>
          <form>
            <div class="mt-4 w-full">
              <input
                aria-label="Code"
                class="input input-bordered input-ghost input-accent w-full max-w-xs"
                placeholder="Code"
                type="number"
              />
            </div>
            <div class="mt-4 flex items-center justify-end">
              <button
                class="btn btn-accent rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                type="button"
                @click='step++'

              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        v-show="step === 3"
        class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md"
      >
        <div class="px-6 py-4">
          <h2 class="text-center text-3xl font-bold">
            Enter your new password
          </h2>
          <h3 class="mt-1 text-center text-xl font-medium">Password reset</h3>
          <form>
            <div class="mt-4 w-full">
              <input
                aria-label="Password"
                class="input input-bordered input-ghost input-accent w-full max-w-xs"
                placeholder="Password"
                type="password"
              />
            </div>
            <div class="mt-4 flex items-center justify-end">
              <button
                class="btn btn-accent rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                type="button"
                @click='step++'

              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        v-show="step === 4"
        class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md"
      >
        <div class="px-6 py-4">
          <h2 class="text-center text-3xl font-bold">
            Success resetting your password
          </h2>
          <h3 class="mt-1 text-center text-xl font-medium">You will be redirected...</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
let step = 1
definePageMeta({ keepalive: true })

</script>

<style scoped></style>
