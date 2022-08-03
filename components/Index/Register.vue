<template>
  <div
    class='mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-xl'
  >
    <div class="px-6 py-4">
      <h2 class="text-center text-3xl font-medium">Create an account</h2>

      <form>
        <div class="mt-4 w-full">
          <input
            aria-label="Username"
            class="input input-bordered input-ghost input-neutral w-full max-w-xs"
            placeholder="Username"
            type="text"
            v-model='username'
          />
        </div>
        <div class="mt-4 w-full">
          <input
            aria-label="Email Address"
            class="input input-bordered input-ghost input-neutral w-full max-w-xs"
            placeholder="Email"
            type="email"
            v-model='email'
          />
        </div>

        <div class="mt-4 w-full">
          <input
            aria-label="Password"
            class="input input-bordered input-ghost input-neutral w-full max-w-xs"
            placeholder="Password"
            type="password"
            v-model="password"
          />
        </div>
        <div class="mt-4 w-full">
          <input
            aria-label="Password"
            class="input input-bordered input-ghost input-neutral w-full max-w-xs"
            placeholder="Password"
            type="password"
            v-model="passwordConfirm"
          />
        </div>
        <div class="mx-auto mt-4">
          <div class="flex flex-nowrap">
            <label class="label cursor-pointer">
              <input
                type="checkbox"
                checked="checked"
                class="checkbox checkbox-primary"
                v-model="tos"
              />
            </label>
            <span class="label-text my-auto">Accept TOS</span>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-center">
          <button
            class="btn btn-primary w-full hoveranimation"
            type="button"
            @click='registerRequest'
          >
            Register
          </button>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div class='flex items-center justify-center bg-base-100 py-4 text-center mb-2 px-6'>
      <span class="mx-2 text-sm">Already have an account? </span>
      <button
        class="btn-neutral btn mx-auto hoveranimation"
        type="button"
        @click="$emit('loginPageEvent')"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login, register } from '~/api/api'

let email = ref("")
let password = ref("")
let username = ref("")
let passwordConfirm = ref("")
let tos = ref(false)

const registerRequest = async function() {
  let result = await register(email.value,password.value,username.value)
  if (result) {
    let loginResult = await login(email.value,password.value )
    if (loginResult) {
      return navigateTo("/home")
    } else {
      return navigateTo("/")
    }
  }
}

</script>

<style scoped></style>
