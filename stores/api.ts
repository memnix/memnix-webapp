import { defineStore } from 'pinia'
import { User } from '~/types'

export const useApiStore = defineStore('api', {
  state: () => {
    return {
      refreshToday: false,
      refreshMyDecks: false,
      refreshAvailableDecks: false,
      user: <User>{}
    }
  }
})
