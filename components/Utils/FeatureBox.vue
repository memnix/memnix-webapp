<template>
  <div class="rounded-xl border p-6">
    <div class="md:-mx-4 md:flex md:items-start">
      <span
        class="inline-block rounded-xl bg-info p-2 text-info-content md:mx-4"
      >

          <Icon-lucide-heart class="h-10 w-10" v-if='icon==="heart"'/>
           <Icon-lucide-timer-reset class="h-10 w-10" v-if='icon==="time"'/>
          <Icon-lucide-trending-up class="h-10 w-10" v-if='icon==="trending"'/>
          <Icon-lucide-smartphone class="h-10 w-10" v-if='icon==="accessible"'/>

          <Icon-lucide-message-circle class="h-10 w-10" v-if='icon==="message"' />
          <Icon-lucide-crown class="h-10 w-10" v-if='icon==="crown"'/>
          <Icon-lucide-code-2 class="h-10 w-10" v-if='icon==="code"'/>
          <Icon-lucide-users class="h-10 w-10" v-if='icon==="users"'/>
      </span>
      <div class="mt-4 md:mx-4 md:mt-0">
        <h1 class="text-2xl font-medium capitalize">
          {{ title }}
        </h1>

        <p class="mt-3">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
