<template>
  <div
    class='mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 lg:drop-shadow-md'
  >
    <div class="px-6 py-4">
      <h2 class="text-center text-3xl font-medium">{{ $t('welcome_back') }}</h2>
      <form @submit.prevent='submitLoginRequest'>
        <div class="mt-4 w-full">
          <input
            aria-label="Email Address"
            class="input input-bordered input-ghost input-neutral w-full"
            :class='v$.email.$error ? "input-error" : ""'
            placeholder="Email"
            type="email"
            v-model='state.email'
            @blur='v$.$touch()'
          />
        </div>

        <div class="mt-4 w-full">
          <input
            aria-label="Password"
            class="input input-bordered input-ghost input-neutral w-full "
            :class='v$.password.$error ? "input-error" : ""'
            placeholder="Password"
            type="password"
            v-model="state.password"
            @blur='v$.$touch()'

          />
        </div>

        <div class="mt-4 flex w-full justify-center">
          <button
            class="btn btn-primary w-full hoveranimation"
            type="submit"
            @click='submitLoginRequest'
          >
            {{ $t('login') }}
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
          {{ $t('register') }}
        </button>
      </div>
      <div>
        <NuxtLink to='/resetpassword'>
        <button
          class="btn btn-secondary w-full hoveranimation"
          type="button"
        >
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
  email: "",
  password: "",
})

const rules = {
  email: {
    required, email
  },
  password: {
    required
  },
}

const v$ = useVuelidate(rules, state)

const submitLoginRequest = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    // notify user form is invalid
    console.log("error")
    console.log(v$.value.$errors)
    return
  }

  await loginRequest()
}


const loginRequest = async function() {
  let result = await login(state.email,state.password )
  if (result) {
    return navigateTo("/home")
  }
}

</script>

<style scoped></style>
