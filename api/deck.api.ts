import { HTTPResponse } from '~/types'
import { baseUrl } from '~/api/api'

export async function getSubDeck() {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    `/decks/sub?refresh=true`,
    {
      method: 'GET',
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}

export async function getEditorDecks() {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    `/decks/editor?refresh=true'`,
    {
      method: 'GET',
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data.data
}

export async function getAvailableDeck() {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    `/decks/available?refresh=true`,
    {
      method: 'GET',
      baseURL: baseUrl,
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
    '/decks/' + id.toString(),
    {
      method: 'GET',
      baseURL: baseUrl,
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
    '/decks/' + id.toString() + '/subscribe',
    {
      method: 'POST',
      baseURL: baseUrl,
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
    '/decks/' + id.toString() + '/unsubscribe',
    {
      method: 'POST',
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}
