<template>
  <div
    class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-xl"
  >
    <div class="px-6 py-4">
      <h2 class="text-center text-3xl font-medium">Create an account</h2>

      <form @submit.prevent="submitRegisterRequest">
        <div class="mt-4 w-full">
          <input
            v-model="state.username"
            :class="v$.username.$error ? 'input-error' : ''"
            aria-label="Username"
            class="input-neutral input input-bordered input-ghost w-full max-w-xs"
            placeholder="Username"
            type="text"
            @blur="v$.$touch()"
          />
        </div>
        <div class="mt-4 w-full">
          <input
            v-model="state.email"
            :class="v$.email.$error ? 'input-error' : ''"
            aria-label="Email Address"
            class="input-neutral input input-bordered input-ghost w-full max-w-xs"
            placeholder="Email"
            type="email"
            @blur="v$.$touch()"
          />
        </div>

        <div class="mt-4 w-full">
          <input
            v-model="state.password"
            :class="v$.password.$error ? 'input-error' : ''"
            aria-label="Password"
            class="input-neutral input input-bordered input-ghost w-full max-w-xs"
            placeholder="Password"
            type="password"
            @blur="v$.$touch()"
          />
        </div>
        <div class="mt-4 w-full">
          <input
            v-model="state.passwordConfirm"
            :class="v$.passwordConfirm.$error ? 'input-error' : ''"
            aria-label="Password"
            class="input-neutral input input-bordered input-ghost w-full max-w-xs"
            placeholder="Password"
            type="password"
            @blur="v$.$touch()"
          />
        </div>
        <div class="mx-auto mt-4">
          <div class="flex flex-nowrap">
            <label class="label cursor-pointer">
              <input
                v-model="state.tos"
                :class="v$.tos.$error ? 'checkbox-error' : 'checkbox-primary'"
                checked="checked"
                class="checkbox"
                type="checkbox"
                @blur="v$.$touch()"
              />
            </label>
            <span class="label-text my-auto">Accept TOS</span>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-center">
          <button
            class="hoveranimation btn btn-primary w-full"
            type="submit"
            @click.once="submitRegisterRequest"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div
      class="mb-2 flex items-center justify-center bg-base-100 py-4 px-6 text-center"
    >
      <span class="mx-2 text-sm">Already have an account? </span>
      <button
        class="btn-neutral hoveranimation btn mx-auto"
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
import {
  email,
  maxLength,
  minLength,
  required,
  sameAs,
} from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { Config } from '~/utils/config'

const state = reactive({
  email: '',
  password: '',
  username: '',
  passwordConfirm: '',
  tos: false,
})

const rules = {
  email: {
    required,
    email,
    maxLength: maxLength(Config.maxEmailLen),
  },
  password: {
    required,
    minLength: minLength(Config.minPasswordLen),
    maxLength: maxLength(Config.maxPasswordLen),
  },
  passwordConfirm: {
    required,
    sameAs: sameAs(state.password),
  },
  username: {
    required,
    minLength: minLength(Config.minUsernameLen),
    maxLength: maxLength(Config.maxUsernameLen),
  },
  tos: {
    required,
  },
}

const v$ = useVuelidate(rules, state)

let submitting = false

const submitRegisterRequest = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    // notify user form is invalid
    return
  }
  if (submitting) {
    return
  }
  submitting = true
  await registerRequest()
  submitting = false
}

const registerRequest = async function () {
  let result = await register(state.email, state.password, state.username)
  submitting = false

  if (result) {
    let loginResult = await login(state.email, state.password)
    if (loginResult) {
      return navigateTo('/home')
    } else {
      return navigateTo('/')
    }
  }
}
</script>

<style scoped></style>
