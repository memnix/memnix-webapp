<template>
  <section class='h-screen bg-base-100'>
    <div class='hoveranimation absolute left-0 top-[0.5rem]'>
      <NuxtLink to='/'>
        <button
          class='btn btn-ghost text-xl md:text-2xl lg:text-3xl'
        >
          <Icon-lucide-arrow-left />
        </button>
      </NuxtLink>
    </div>
    <div
      class='container mx-auto flex h-full w-full flex-col place-content-center px-5 py-24'
    >
      <div class='mx-auto mb-20'>
        <ul class='steps'>
          <li
            :class="step >= 1 ? 'step-primary' : ''"
            class='step sm:mx-5 md:mx-7 lg:mx-10'
          >
            Email
          </li>
          <li :class="step >= 2 ? 'step-primary' : ''" class='step'>
            Validate
          </li>
          <li :class="step >= 4 ? 'step-primary' : ''" class='step'>
            Done
          </li>
        </ul>
      </div>
      <div
        v-show='step === 1'
        class='mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md'
      >
        <div class='px-6 py-4'>
          <h2 class='text-center text-3xl font-bold'>Enter your email</h2>
          <h3 class='mt-1 text-center text-xl font-medium'>Password reset</h3>
          <form>
            <div class='mt-4 w-full'>
              <input
                v-model='email'
                aria-label='Email Address'
                class='input input-bordered input-ghost input-neutral w-full max-w-xs'
                placeholder='Email'
                type='email'
              />
            </div>
            <div class='mt-4 flex items-center justify-end'>

              <button
                class='btn btn-outline btn-accent hoveranimation mx-2'
                type='button'
                @click='step = 2'
              >
                I already have a code
              </button>
              <button
                class='btn btn-primary hoveranimation'
                type='button'
                @click='resetPasswordRequest'
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        v-show='step === 2'
        class='mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md'
      >
        <div class='px-6 py-4'>
          <h2 class='text-center text-3xl font-bold'>
            Enter the code you received
          </h2>
          <h3 class='mt-1 text-center text-xl font-medium'>Password reset</h3>
          <form>
            <div class='mt-4 w-full'>
              <input
                v-model='code'
                aria-label='Code'
                class='input input-bordered input-ghost input-neutral w-full max-w-xs'
                placeholder='Code'
                type='text'
              />
            </div>
            <div class='mt-4 w-full'>
              <input
                v-model='password'
                aria-label='Password'
                class='input input-bordered input-ghost input-neutral w-full max-w-xs'
                placeholder='Password'
                type='password'
              />
            </div>
            <div class='mt-4 w-full'>
              <input
                v-model='repeatpassword'
                aria-label='Password'
                class='input input-bordered input-ghost input-neutral w-full max-w-xs'
                placeholder='Repeat password'
                type='password'
              />
            </div>
            <div class='mt-4 flex items-center justify-end'>
              <button
                class='btn btn-primary hoveranimation'
                type='button'
                @click='resetPasswordConfirmationRequest'

              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        v-show='step === 3'
        class='mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-base-100 drop-shadow-md'
      >
        <div class='px-6 py-4'>
          <h2 class='text-center text-3xl font-bold'>
            Success resetting your password
          </h2>
          <h3 class='mt-1 text-center text-xl font-medium'>You will be redirected...</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts' setup>
import { themeChange } from 'theme-change'
import { resetPassword, resetPasswordConfirmation } from '~/api/api'


let step = ref(1)

let email = ref('')
let code = ref('')
let password = ref('')
let repeatpassword = ref('')

definePageMeta({ keepalive: true, middleware: ['guest'] })

onMounted(() => {
  themeChange(false)
})

const resetPasswordRequest = async function() {
  let result = await resetPassword(email.value)
  console.log(result)
  if (result) {
    step.value = 2
  } else {
    alert('error')
  }
}

const resetPasswordConfirmationRequest = async function() {
  if (password.value !== repeatpassword.value) {
    alert('Passwords don\'t match')
    return
  }
  let result = await resetPasswordConfirmation(email.value, code.value, password.value)
  if (result) {
    step.value = 3
    return navigateTo('/')
  } else {
    alert('error')
  }


}

</script>

<style scoped></style>
