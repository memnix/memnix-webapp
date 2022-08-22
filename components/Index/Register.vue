<template>
  <div
    class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-xl"
  >
    <div class="px-6 py-4">
      <h2 class="text-center text-3xl font-medium">
        {{ $t('create_an_account') }}
      </h2>

      <form @submit.prevent="submitRegisterRequest">
        <div class="mt-4 w-full">
          <input
            v-model="state.username"
            :class="v$.username.$error ? 'input-error' : ''"
            :placeholder="$t('username')"
            aria-label="Username"
            class="input-neutral input input-bordered input-ghost w-full max-w-xs"
            type="text"
            @blur="v$.$touch()"
          />
        </div>
        <div class="mt-4 w-full">
          <input
            v-model="state.email"
            :class="v$.email.$error ? 'input-error' : ''"
            :placeholder="$t('email')"
            aria-label="Email Address"
            class="input-neutral input input-bordered input-ghost w-full max-w-xs"
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
            class="input-neutral input input-bordered input-ghost w-full max-w-xs"
            type="password"
            @blur="v$.$touch()"
          />
        </div>
        <div class="mt-4 w-full">
          <input
            v-model="state.passwordConfirm"
            :class="v$.passwordConfirm.$error ? 'input-error' : ''"
            :placeholder="$t('confirm_password')"
            aria-label="Password"
            class="input-neutral input input-bordered input-ghost w-full max-w-xs"
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
            <span class="label-text my-auto">{{ $t('accept_tos') }}</span>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-center">
          <button
            class="hoveranimation btn btn-primary w-full"
            type="submit"
            @click.once="submitRegisterRequest"
          >
            {{ $t('register') }}
          </button>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div
      class="mb-2 flex items-center justify-center bg-base-100 py-4 px-6 text-center"
    >
      <span class="mx-2 text-sm">{{ $t('already_account') }} </span>
      <button
        class="btn-neutral hoveranimation btn mx-auto"
        type="button"
        @click="$emit('loginPageEvent')"
      >
        {{ $t('login') }}
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

const passwordRules = (value) => {
  return state.password === state.passwordConfirm
}

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
    passwordRules,
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
