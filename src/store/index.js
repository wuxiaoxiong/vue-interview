import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextPlayer: 'X',
  },
  mutations: {
    changeNextPlayer (state) {
      state.nextPlayer = state.nextPlayer === 'X' ? 'O' : 'X'
    }
  },
  actions: {
  },
  modules: {
  }
})
