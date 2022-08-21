<template>
  <div class="modal modal-open modal-bottom sm:modal-middle">
    <div class="modal-box border-2 border-secondary">
      <div class="hoveranimation absolute right-1 top-[0.5rem]">
        <button
          class="btn btn-ghost text-xl md:text-2xl lg:text-3xl"
          @click="$emit('closeModalProfile')"
        >
          <Icon-lucide-x />
        </button>
      </div>
      <div class="flex items-center">
        <div class="avatar">
          <div class="w-16 rounded-full">
            <nuxt-img
              :src="avatarUrl"
              alt="User Avatar"
              format="webp"
              height="64"
              width="64"
              loading="lazy"
              quality="80"
            />
          </div>
        </div>
        <h2 class="ml-3 text-xl font-medium">
          {{ user.user_name }}
        </h2>
      </div>
      <div class="modal-action">
        <label class="hoveranimation btn btn-error" @click="$emit('logout')"
          >Logout</label
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User } from '~/types'
import { useApiStore } from '~/stores/api'
import { getUser } from '~/api/api'

const emit = defineEmits(['closeModalProfile', 'logout'])

let user = ref(<User>{})
let avatarUrl = ref('')

onMounted(async () => {
  const apiStore = useApiStore()
  if (apiStore.user) {
    user.value = apiStore.user
  } else {
    user.value = await getUser()
  }
  getAvatarUrl()
})

const getAvatarUrl = function () {
  if (user.value.user_avatar != '') {
    avatarUrl.value = user.value.user_avatar
  } else if (user.value.user_name != '') {
    avatarUrl.value =
      'https://source.boringavatars.com/beam/120/' +
      user.value.user_name +
      '?colors=070705,3E4B51,6F737E,89A09A,C1C0AE'
  } else {
    avatarUrl.value = 'https://unavatar.now.sh/twitter/memnixapp'
  }
}
</script>

<style scoped></style>
