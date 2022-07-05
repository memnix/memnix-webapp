import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', {
  state: () => {
    return {
      refreshToday: false,
      refreshMyDecks: false,
      refreshAvailableDecks: false,
    }
  },
})
