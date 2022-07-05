<template>
  <div class="modal modal-open modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Subscribe to this deck ?</h3>
      <p class="py-4">You will be able to play it</p>
      <div class="modal-action">
        <label @click="$emit('closeModalSubConfirmation')" class="btn"
          >No</label
        >
        <label @click="subToDeckEvent" class="btn">Yes</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { subToDeck } from '~/api/deck.api'
import { useApiStore } from '~/stores/api'

const emit = defineEmits(['closeModalSubConfirmation'])

const props = defineProps({
  deck: {
    type: Object,
    required: true,
  },
})

async function subToDeckEvent() {
  const apiStore = useApiStore()
  const res = await subToDeck(props.deck.ID)
  if (res.success) {
    apiStore.refreshMyDecks = true
    apiStore.refreshAvailableDecks = true
    apiStore.refreshToday = true
  }
  emit('closeModalSubConfirmation')
}
</script>

<style scoped></style>
