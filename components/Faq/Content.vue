<template>
  <!--   Faq Content component   -->
  <div class='collapse rounded-box border border-base-300'>
    <input class='peer' type='checkbox' @click='checkboxClicked' />
    <!--   Collapse Title   -->
    <div class='collapse-title flex text-xl font-medium'>
      <!--   + icon when collapsed   -->
      <div v-if='!checked'>
        <svg
          class='h-6 w-6 text-info'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 4v16m8-8H4'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
          />
        </svg>
      </div>
      <!--   - icon when opened   -->
      <div v-else>
        <svg
          class='h-6 w-6 text-info'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 12H4'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
          ></path>
        </svg>
      </div>
      <div class='mx-4'>{{ title }}</div>
    </div>

    <!--   Collapse content   -->
    <div class='collapse-content mx-4 flex'>
      <span class='border border-accent'></span>
      <p class='max-w-3xl px-4'>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script lang='ts' setup>
let checked = ref(false)

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

const checkboxClicked = function(_: Event) {
  checked.value = !checked.value
}
</script>

<style scoped></style>
