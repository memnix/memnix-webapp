import { HTTPResponse, TodayResponse } from '~/types'

export async function todays() {
  const token = useCookie('token')

  const data: TodayResponse = await $fetch<TodayResponse>(
    'http://127.0.0.1:1813/v1/cards/today',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  ).catch((error: any) => error.data)
  console.log(data)
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
  console.log(data)
  return data
}
