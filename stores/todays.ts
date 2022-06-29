import { defineStore } from 'pinia'
import { CardResponseList } from '~/types'

export const useTodayStore = defineStore('today', {
  state: () => {
    return {
      todayMap: <{ [id: number]: CardResponseList }>{},
      index: 0,
    }
  },
  getters: {
    getDeck: (state) => {
      return (deck: number) => state.todayMap[deck]
    },
  },
  actions: {
    setDeck(deck: number, cardResponseList: CardResponseList) {
      this.todayMap[deck] = cardResponseList
    },
  },
})
