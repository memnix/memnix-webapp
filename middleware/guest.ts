import { user } from '~/api/api'

export default defineNuxtRouteMiddleware(async () => {
  const success = await user()
  if (success) {
    return navigateTo('/home')
  }
})
