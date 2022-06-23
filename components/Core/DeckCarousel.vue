<template>
  <div class="carousel-center carousel rounded-box space-x-1 pt-4">
    <div
      class="carousel-item relative h-32 w-28 md:h-48 md:w-44 lg:h-72 lg:w-72"
      v-for="value in deckList"
    >
      <div  v-if="daily">
        <NuxtLink :to="'/play?deck=' + value.ID">
          <CoreDeck :deck="value" />
        </NuxtLink>
      </div>
      <div  v-else>
        <CoreDeck :deck="value"  @click="setIsOpen(true)" />
      </div>
    </div>
  </div>
  <div class="modal modal-bottom sm:modal-middle" :class='isOpen ? "modal-open"	: ""'>
    <div class="modal-box">
      <h3 class="font-bold text-lg">Subscribe to this deck ?</h3>
      <p class="py-4">You will be able to play it</p>
      <div class="modal-action">
        <label @click="setIsOpen(false)" class="btn">Yes</label>
        <label @click="setIsOpen(false)" class="btn">No</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
function setIsOpen(value) {
  isOpen.value = value
}

const props = defineProps({
  deckList: {
    type: Array,
    required: true,
  },
  daily: {
    type: Boolean,
    default: false,
    required: true,
  },
})


</script>

<style scoped></style>
