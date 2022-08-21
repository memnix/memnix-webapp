import { Deck, HTTPResponse } from '~/types'
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

export async function setTodaySetting(deckID: number, today_setting: boolean) {
  const token = useCookie('token')

  return await $fetch<HTTPResponse>(`/users/settings/${deckID}/today`, {
    method: 'POST',
    baseURL: baseUrl,
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
    body: {
      settings_today: today_setting,
    },
  }).catch((error: any) => error.data)
}

export async function getEditorDecks() {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    `/decks/editor?refresh=true`,
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

export async function createDeck(deck: Deck) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>('/decks/new', {
    method: 'POST',
    baseURL: baseUrl,
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
    body: deck,
  }).catch((error: any) => error.data)
  return data
}

export async function updateDeck(deck: Deck) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>(
    '/decks/' + deck.ID + '/edit',
    {
      method: 'PUT',
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
      body: deck,
    }
  ).catch((error: any) => error.data)
  return data
}
