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

    getCurrentDeck: (state) => {
      return state.todayMap[state.index]
    },

    getIndex: (state) => {
      return state.index
    },
  },
  actions: {
    setDeck(deck: number, cardResponseList: CardResponseList) {
      this.todayMap[deck] = cardResponseList
    },

    setIndex(index: number) {
      this.index = index
    },

    deleteCard(deck: number, card: number) {
      this.todayMap[deck].splice(card, 1)
    },

    deleteDeck(deck: number) {
      delete this.todayMap[deck]
    },
  },
})
