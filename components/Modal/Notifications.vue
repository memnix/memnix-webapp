<template>
  <div class="modal modal-open modal-bottom sm:modal-middle">
    <div class="modal-box border-2 border-secondary">
      <div class="hoveranimation absolute right-1 top-[0.5rem]">
        <button
          class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
          @click="$emit('closeModalNotification')"
        >
          <Icon-lucide-x />
        </button>
      </div>
      <div class="flex items-center">
        <h2 class="ml-2 text-xl font-medium">
          You don't have any notifications to read...
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['closeModalNotification'])
</script>

<style scoped></style>
