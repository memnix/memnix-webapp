<template>
  <div
    class='mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-xl'
  >
    <div class='px-6 py-4'>
      <h2 class='text-center text-3xl font-medium'>Create an account</h2>

      <form @submit.prevent='submitRegisterRequest'>
        <div class='mt-4 w-full'>
          <input
            v-model='state.username'
            :class='v$.username.$error ? "input-error" : ""'
            aria-label='Username'
            class='input input-bordered input-ghost input-neutral w-full max-w-xs'
            placeholder='Username'
            type='text'
            @blur='v$.$touch()'
          />
        </div>
        <div class='mt-4 w-full'>
          <input
            v-model='state.email'
            :class='v$.email.$error ? "input-error" : ""'
            aria-label='Email Address'
            class='input input-bordered input-ghost input-neutral w-full max-w-xs'
            placeholder='Email'
            type='email'
            @blur='v$.$touch()'
          />
        </div>

        <div class='mt-4 w-full'>
          <input
            v-model='state.password'
            :class='v$.password.$error ? "input-error" : ""'
            aria-label='Password'
            class='input input-bordered input-ghost input-neutral w-full max-w-xs'
            placeholder='Password'
            type='password'
            @blur='v$.$touch()'
          />
        </div>
        <div class='mt-4 w-full'>
          <input
            v-model='state.passwordConfirm'
            :class='v$.passwordConfirm.$error ? "input-error" : ""'
            aria-label='Password'
            class='input input-bordered input-ghost input-neutral w-full max-w-xs'
            placeholder='Password'
            type='password'
            @blur='v$.$touch()'
          />
        </div>
        <div class='mx-auto mt-4'>
          <div class='flex flex-nowrap'>
            <label class='label cursor-pointer'>
              <input
                v-model='state.tos'
                :class='v$.tos.$error ? "checkbox-error" : "checkbox-primary"'
                checked='checked'
                class='checkbox'
                type='checkbox'
                @blur='v$.$touch()'
              />
            </label>
            <span class='label-text my-auto'>Accept TOS</span>
          </div>
        </div>
        <div class='mt-4 flex items-center justify-center'>
          <button
            class='btn btn-primary w-full hoveranimation'
            type='submit'
            @click='submitRegisterRequest'
          >
            Register
          </button>
        </div>
      </form>
    </div>
    <div class='divider'></div>
    <div class='flex items-center justify-center bg-base-100 py-4 text-center mb-2 px-6'>
      <span class='mx-2 text-sm'>Already have an account? </span>
      <button
        class='btn-neutral btn mx-auto hoveranimation'
        type='button'
        @click="$emit('loginPageEvent')"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { login, register } from '~/api/api'
import { email, maxLength, minLength, required, sameAs } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

const state = reactive({
  email: '',
  password: '',
  username: '',
  passwordConfirm: '',
  tos: false
})

const rules = {
  email: {
    required, email
  },
  password: {
    required,
    minLength: minLength(8),
    maxLength: maxLength(50)
  },
  passwordConfirm: {
    required,
    sameAs: sameAs(state.password)
  },
  username: {
    required,
    minLength: minLength(4),
    maxLength: maxLength(15)
  },
  tos: {
    required
  }
}

const v$ = useVuelidate(rules, state)

const submitRegisterRequest = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    // notify user form is invalid
    console.log('error')
    console.log(v$.value.$errors)
    return
  }

  await registerRequest()
}

const registerRequest = async function() {
  let result = await register(state.email, state.password, state.username)
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
