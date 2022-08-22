import { Card, HTTPResponse, Mcq, TodayResponse } from '~/types'
import { baseUrl } from '~/api/api'

export async function postResponse(
  cardID: number,
  response: string,
  training: boolean
) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>('/cards/response', {
    method: 'POST',
    baseURL: baseUrl,
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
    body: {
      card_id: cardID,
      response: response,
      training: training,
    },
  }).catch((error: any) => error.data)
  return data
}

// Fetch all cards from a deck
export async function getCardsFromDeck(deckID: number) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>(
    '/cards/deck/' + deckID + '?refresh=true',
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

export async function getMCQfromDeck(deckID: number) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>(
    '/mcqs/' + deckID + '?refresh=true',
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

export async function todays() {
  const token = useCookie('token')

  const data: TodayResponse = await $fetch<TodayResponse>(
    `/cards/today?refresh=true`,
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

export async function getTrainingCards(deck) {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    '/cards/' + deck + '/training',
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

export async function createCard(card: Card) {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>('/cards/new', {
    method: 'POST',
    baseURL: baseUrl,
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
    body: card,
  }).catch((error: any) => error.data)
  return data
}

export async function updateCard(card: Card) {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    '/cards/' + card.ID + '/edit',
    {
      method: 'PUT',
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
      body: card,
    }
  ).catch((error: any) => error.data)
  return data
}

export async function deleteCard(cardID: number) {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>('/cards/' + cardID, {
    method: 'DELETE',
    baseURL: baseUrl,
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
  }).catch((error: any) => error.data)
  return data
}

export async function createMcq(mcq: Mcq) {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>('/mcqs/new', {
    method: 'POST',
    baseURL: baseUrl,
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
    body: mcq,
  }).catch((error: any) => error.data)
  return data
}

export async function updateMcq(mcq: Mcq) {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>(
    '/mcqs/' + mcq.ID + '/edit',
    {
      method: 'PUT',
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
      body: mcq,
    }
  ).catch((error: any) => error.data)
  return data
}

export async function deleteMcq(mcqID: number) {
  const token = useCookie('token')

  const data: HTTPResponse = await $fetch<HTTPResponse>('/mcqs/' + mcqID, {
    method: 'DELETE',
    baseURL: baseUrl,
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
  }).catch((error: any) => error.data)
  return data
}
