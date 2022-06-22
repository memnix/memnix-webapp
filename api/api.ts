export async function login(email: string, password: string) {
  try {
    const { data, pending, error, refresh } = await useFetch(
      'http://127.0.0.1:1813/v1/login',
      {
        method: 'POST',
        body: {
          email: email,
          password: password,
        },
      }
    )

    const token = useCookie('token')
    token.value = data.value['token']
    return true
  } catch (e: any) {
    return false
  }
}

export async function user() {
  const token = useCookie('token')
  try {
    const { data, pending, error, refresh } = await useFetch(
      'http://127.0.0.1:1813/v1/user',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token.value,
        },
      }
    )
    return data.value['Success']
  } catch (e: any) {
    return false
  }
}
