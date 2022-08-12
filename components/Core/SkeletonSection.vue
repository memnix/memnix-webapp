<template>
  <div class='flex flex-col items-center justify-center px-6'>
    <div class='mt-6 w-full'>
      <div class='flex flex-row items-center justify-between'>
        <h1 class='md:text-xl'>Loading....</h1>
      </div>
      <div class='rounded-box flex flex-row space-x-1 pt-4'>
        <div
          v-for='_ in 10'
          class='carousel-item h-32 w-28 animate-pulse md:h-48 md:w-44 lg:h-72 lg:w-72'
        >
          <div class='flex flex-col justify-center'>
            <div class='rounded-box bg-neutral relative'>
              <svg class='animate-spin h-7 w-7 absolute inset-0 m-auto' viewBox='0 0 24 24'>
                <circle class='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'></circle>
                <path class='opacity-75' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      fill='currentColor'></path>
              </svg>
              <div
                class='h-24 w-24 object-cover md:h-40 md:w-40 lg:h-64 lg:w-64'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonSection'
}
</script>

<style scoped>

</style>