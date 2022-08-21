<template>
  <div class="modal modal-open h-screen">
    <div class="modal-box h-screen max-h-screen w-screen !max-w-none">
      <div class="hoveranimation absolute left-0 top-[0.5rem]">
        <button
          class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
          @click="closeModalDeckCreate"
        >
          <Icon-lucide-arrow-left />
        </button>
      </div>
      <div class="mx-auto flex w-full flex-col px-2 sm:px-0">
        <h1 class="mx-auto py-4 text-3xl">Create a deck</h1>
        <div class="py-4">
          <EditorGeneral
            :deck="{}"
            :is_edit="false"
            @closeModalGeneral="closeModalDeckCreate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeModalDeckCreate'])

const closeModalDeckCreate = function () {
  emit('closeModalDeckCreate')
}
</script>

<style scoped></style>
