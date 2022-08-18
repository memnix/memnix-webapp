import { HTTPResponse, TodayResponse } from '~/types'
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
    '/cards/deck/' + deckID,
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
  const data: HTTPResponse = await $fetch<HTTPResponse>('/mcqs/' + deckID, {
    method: 'GET',
    baseURL: baseUrl,
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
  }).catch((error: any) => error.data)
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
