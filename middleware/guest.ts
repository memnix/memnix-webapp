import { user } from '~/api/api'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const success = await user()
  if (success) {
    return navigateTo('/home')
  }
})
