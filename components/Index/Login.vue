<template>
  <div
    class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-md"
  >
    <div class="px-6 py-4">
      <h2 class="text-center text-3xl font-medium">{{ $t('welcome_back') }}</h2>
      <form @submit.prevent="submitLoginRequest">
        <div class="mt-4 w-full">
          <input
            v-model="state.email"
            :class="v$.email.$error ? 'input-error' : ''"
            :placeholder="$t('email')"
            aria-label="Email Address"
            class="input-neutral input input-bordered input-ghost w-full"
            type="email"
            @blur="v$.$touch()"
          />
        </div>

        <div class="mt-4 w-full">
          <input
            v-model="state.password"
            :class="v$.password.$error ? 'input-error' : ''"
            :placeholder="$t('password')"
            aria-label="Password"
            class="input-neutral input input-bordered input-ghost w-full"
            type="password"
            @blur="v$.$touch()"
          />
        </div>

        <div class="mt-4 flex w-full justify-center">
          <button
            class="hoveranimation btn btn-primary w-full"
            type="submit"
            @click="submitLoginRequest"
          >
            {{ $t('login') }}
          </button>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div
      class="mt-2 mb-5 grid grid-cols-2 items-center justify-between gap-4 px-6 text-center"
    >
      <div>
        <button
          class="btn-neutral hoveranimation btn mx-auto w-full"
          type="button"
          @click="$emit('registerPageEvent')"
        >
          {{ $t('register') }}
        </button>
      </div>
      <div>
        <NuxtLink to="/resetpassword">
          <button class="hoveranimation btn btn-secondary w-full" type="button">
            {{ $t('forget_password') }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login } from '~/api/api'
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const state = reactive({
  email: '',
  password: '',
})

const rules = {
  email: {
    required,
    email,
  },
  password: {
    required,
  },
}

const v$ = useVuelidate(rules, state)

const submitLoginRequest = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    // notify user form is invalid
    return
  }

  await loginRequest()
}

const loginRequest = async function () {
  let result = await login(state.email, state.password)
  if (result) {
    return navigateTo('/home')
  }
}
</script>

<style scoped></style>
