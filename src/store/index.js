import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, val) {
      if (val) {
        state.products = val
      } else {
        state.products = []
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
