import { HTTPResponse } from '~/types'

export async function getSubDeck() {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    'http://127.0.0.1:1813/v1/decks/sub',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}

export async function getAvailableDeck() {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    'http://127.0.0.1:1813/v1/decks/available',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}

export async function getDeck(id: number) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>(
    'http://127.0.0.1:1813/v1/decks/' + id.toString(),
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}

export async function subToDeck(id: number) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>(
    'http://127.0.0.1:1813/v1/decks/' + id.toString() + '/subscribe',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}

export async function unsubToDeck(id: number) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>(
    'http://127.0.0.1:1813/v1/decks/' + id.toString() + '/unsubscribe',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}
