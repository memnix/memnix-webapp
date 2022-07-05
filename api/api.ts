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

export async function user() {
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
    return data['success']
  } catch (e: any) {
    return false
  }
}
