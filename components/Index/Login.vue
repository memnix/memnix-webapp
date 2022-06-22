<template>
  <div
    class='mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-md'
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
            v-model='email'
          />
        </div>

        <div class="mt-4 w-full">
          <input
            aria-label="Password"
            class="input input-bordered input-ghost input-neutral w-full "
            placeholder="Password"
            type="password"
            v-model="password"
          />
        </div>

        <div class="mt-4 flex w-full justify-center">
          <button
            class="btn btn-primary w-full hoveranimation"
            type="button"
            @click='loginRequest'
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
          class="btn btn-neutral w-full mx-auto hoveranimation"
          type="button"
          @click="$emit('registerPageEvent')"
        >
          Register
        </button>
      </div>
      <div>
        <button
          class="btn btn-secondary w-full hoveranimation"
          type="button"
        >
          Forget Password
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login } from '~/api/api'

let email = ref("")
let password = ref("")

const loginRequest = async function() {
  let result = await login(email.value,password.value )
  if (result) {
    navigateTo("/home")
  }
}

</script>

<style scoped></style>
