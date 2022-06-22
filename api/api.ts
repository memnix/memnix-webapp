export async function login(email: string, password: string) {
  try {
    const data = await $fetch('http://127.0.0.1:1813/v1/login', {
      method: 'POST',
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
  try {
    const data = await $fetch('http://127.0.0.1:1813/v1/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    })
    return data['Success']
  } catch (e: any) {
    return false
  }
}
