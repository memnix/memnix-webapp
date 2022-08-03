import { useApiStore } from '~/stores/api'

export const baseUrl = 'http://127.0.0.1:1813/v1'

export async function login(email: string, password: string) {
  try {
    const data = await $fetch('/login', {
      method: 'POST',
      baseURL: baseUrl,
      body: {
        email: email,
        password: password,
      },
    })

    const token = useCookie('token')
    token.value = data['token']
    return true
  } catch (e: any) {
    return false
  }
}

export async function register(
  email: string,
  password: string,
  username: string
) {
  try {
    const data = await $fetch('/register', {
      method: 'POST',
      baseURL: baseUrl,
      body: {
        email: email,
        password: password,
        username: username,
      },
    })

    return true
  } catch (e: any) {
    return false
  }
}

export async function user() {
  const apiStore = useApiStore()

  const token = useCookie('token')
  if (token.value === '') {
    return false
  }
  try {
    const data = await $fetch('/user?refresh=true', {
      method: 'GET',
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    })
    apiStore.user = data['user']
    return data['success']
  } catch (e: any) {
    return false
  }
}

export async function getUser() {
  const token = useCookie('token')
  if (token.value === '') {
    return {}
  }
  try {
    const data = await $fetch('/user', {
      method: 'GET',
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    })
    return data['user']
  } catch (e: any) {
    return {}
  }
}

export async function resetPassword(email: string) {
  try {
    const data = await $fetch('/users/resetpassword', {
      method: 'POST',
      baseURL: baseUrl,
      body: {
        email: email,
      },
    })
    return true
  } catch (e: any) {
    return false
  }
}

export async function resetPasswordConfirmation(
  email: string,
  code: string,
  password: string
) {
  try {
    const data = await $fetch('/users/confirmpassword', {
      method: 'POST',
      baseURL: baseUrl,
      body: {
        email: email,
        code: code,
        password: password,
      },
    })
    return data['success']
  } catch (e: any) {
    return false
  }
}
