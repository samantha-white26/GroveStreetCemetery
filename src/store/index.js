import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    page: 0,
    marker: 0
  },

  mutations: {
    incrementPage (state, payload) {
      state.page = (state.page + payload) % 3
    },
    setPage (state, payload) {
      state.page = payload
    },
    incrementMarker (state, payload) {
      state.marker = (state.marker + payload) % 6
    },
    setMarker (state, payload) {
      state.marker = payload
    }
  },

  actions: {
    incrementActionPage ({commit}, payload) {
      commit('incrementPage', payload)
    },
    setActionPage ({commit}, payload) {
      commit('setPage', payload)
    },
    incrementActionMarker ({commit}, payload) {
      commit('incrementMarker', payload)
    },
    setActionMarker ({commit}, payload) {
      commit('setMarker', payload)
    }
  },

  getters: {
    page (state) {
      return state.page
    },
    marker (state) {
     return state.marker
    }
  }
})