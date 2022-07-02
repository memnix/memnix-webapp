import { DeckResponseList, HTTPResponse, TodayResponse } from '~/types'

export async function todays() {
  const token = useCookie('token')

  const data: TodayResponse = await $fetch<TodayResponse>(
    'http://127.0.0.1:1813/v1/cards/today?refresh=true',
    {
      method: 'GET',
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
    'http://127.0.0.1:1813/v1/cards/' + deck + '/training',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}
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
    'http://127.0.0.1:1813/v1/decks/' + id,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  return data
}

export async function postResponse(
  cardID: number,
  response: string,
  training: boolean
) {
  const token = useCookie('token')
  const data: HTTPResponse = await $fetch<HTTPResponse>(
    'http://127.0.0.1:1813/v1/cards/response',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
      body: {
        card_id: cardID,
        response: response,
        training: training,
      },
    }
  ).catch((error: any) => error.data)
  return data
}
