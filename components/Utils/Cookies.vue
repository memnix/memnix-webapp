<template>
  <div class="modal modal-open modal-bottom sm:modal-middle">
    <div class="modal-box relative border-2 border-accent">
      <div class="relative flex flex-col items-center justify-center py-5 px-4">
        <Icon-twemoji-cookie class="h-16 w-16" />
        <div class="mt-12">
          <h1
            class="text-center text-3xl font-semibold leading-7 lg:text-4xl lg:leading-9"
          >
            We use cookies
          </h1>
        </div>
        <p class="mt-6 text-center text-base leading-7 sm:w-80">
          Please, accept these sweeties to continue enjoying our site!
        </p>
        <div class="mx-auto">
          <div class="pt-5">
            <button
              class="hoveranimation btn btn-primary w-full"
              @click="$emit('aceptedCookies')"
            >
              Ok !
            </button>
          </div>
          <div class="hidden pt-5">
            <button class="hoveranimation btn-neutral btn w-full">
              Nope.. I am on a diet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped></style>
