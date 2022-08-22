<template>
  <section class="h-screen bg-base-100">
    <div class="hoveranimation absolute left-0 top-[0.5rem]">
      <NuxtLink to="/">
        <button class="btn btn-ghost text-xl md:text-2xl lg:text-3xl">
          <Icon-lucide-arrow-left />
        </button>
      </NuxtLink>
    </div>
    <div
      class="container mx-auto flex h-full w-full flex-col place-content-center px-5 py-24"
    >
      <div class="mx-auto mb-20">
        <ul class="steps">
          <li
            :class="step >= 1 ? 'step-primary' : ''"
            class="step sm:mx-5 md:mx-7 lg:mx-10"
          >
            {{ $t('email') }}
          </li>
          <li :class="step >= 2 ? 'step-primary' : ''" class="step">
            {{ $t('validate') }}
          </li>
          <li :class="step >= 4 ? 'step-primary' : ''" class="step">
            {{ $t('done') }}
          </li>
        </ul>
      </div>
      <div
        v-show="step === 1"
        class="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md"
      >
        <div class="px-6 py-4">
          <h2 class="text-center text-3xl font-bold">
            {{ $t('enter_your_email') }}
          </h2>
          <h3 class="mt-1 text-center text-xl font-medium">
            {{ $t('password_reset') }}
          </h3>
          <form>
            <div class="mt-4 w-full">
              <input
                v-model="state.email"
                :placeholder="$t('email')"
                :class="v$.email.$error ? 'input-error' : ''"
                aria-label="Email Address"
                class="input-neutral input input-bordered input-ghost w-full max-w-xs"
                type="email"
              />
            </div>
            <div class="mt-4 flex items-center justify-end">
              <button
                class="hoveranimation btn btn-outline btn-accent mx-2"
                type="button"
                @click="step = 2"
              >
                {{ $t('already_have_code') }}
              </button>
              <button
                class="hoveranimation btn btn-primary"
                type="button"
                @click="resetPasswordRequest"
              >
                {{ $t('next') }}
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
            {{ $t('enter_the_code_received') }}
          </h2>
          <h3 class="mt-1 text-center text-xl font-medium">
            {{ $t('password_reset') }}
          </h3>
          <form>
            <div class="mt-4 w-full">
              <input
                v-model="state.code"
                :class="w$.code.$error ? 'input-error' : ''"
                :placeholder="$t('code')"
                aria-label="Code"
                class="input-neutral input input-bordered input-ghost w-full max-w-xs"
                type="text"
              />
            </div>
            <div class="mt-4 w-full">
              <input
                v-model="state.password"
                :class="w$.password.$error ? 'input-error' : ''"
                :placeholder="$t('password')"
                aria-label="Password"
                class="input-neutral input input-bordered input-ghost w-full max-w-xs"
                type="password"
              />
            </div>
            <div class="mt-4 w-full">
              <input
                v-model="state.passwordConfirm"
                :class="w$.passwordConfirm.$error ? 'input-error' : ''"
                :placeholder="$t('confirm_password')"
                aria-label="Password"
                class="input-neutral input input-bordered input-ghost w-full max-w-xs"
                type="password"
              />
            </div>
            <div class="mt-4 flex items-center justify-end">
              <button
                class="hoveranimation btn btn-primary"
                type="button"
                @click="resetPasswordConfirmationRequest"
              >
                {{ $t('next') }}
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
            {{ $t('success_resetting_password') }}
          </h2>
          <h3 class="mt-1 text-center text-xl font-medium">
            {{ $t('you_will_be_redirected') }}...
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { themeChange } from 'theme-change'
import { resetPassword, resetPasswordConfirmation } from '~/api/api'
import { reactive } from '#imports'
import {
  email,
  maxLength,
  minLength,
  required,
  sameAs,
} from '@vuelidate/validators'
import { Config } from '~/utils/config'
import useVuelidate from '@vuelidate/core'

let step = ref(1)
let submitting = false

definePageMeta({ keepalive: true, middleware: ['guest'] })

onMounted(() => {
  themeChange(false)
})

const state = reactive({
  email: '',
  code: '',
  password: '',
  passwordConfirm: '',
})

const passwordRules = (value) => {
  return state.password === state.passwordConfirm
}

const email_rules = {
  email: {
    required,
    email,
    maxLength: maxLength(Config.maxEmailLen),
  },
}

const code_rules = {
  code: {
    required,
    maxLength: maxLength(Config.maxDefaultLen),
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
}

const v$ = useVuelidate(email_rules, state)
const w$ = useVuelidate(code_rules, state)

const resetPasswordRequest = async function () {
  const validate = await v$.value.$validate()
  if (!validate) {
    // notify user form is invalid
    return
  }

  if (submitting) {
    return
  }

  submitting = true

  let result = await resetPassword(state.email)

  if (result) {
    submitting = false
    step.value = 2
  } else {
    alert('error')
  }
}

const resetPasswordConfirmationRequest = async function () {
  const validate = await w$.value.$validate()
  if (!validate) {
    // notify user form is invalid
    return
  }

  if (submitting) {
    return
  }

  submitting = true
  let result = await resetPasswordConfirmation(
    state.email,
    state.code,
    state.password
  )
  if (result) {
    submitting = false
    step.value = 3
    return navigateTo('/')
  } else {
    alert('error')
  }
}
</script>

<style scoped></style>
