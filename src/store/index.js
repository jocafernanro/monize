import Vue from 'vue'
import Vuex from 'vuex'

const fb = require('../firebaseConfig')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentUser: null,
    userProfile: {}
  },
  mutations: {
    setProducts (state, val) {
      if (val) {
        state.products = val
      } else {
        state.products = []
      }
    },
    setCurrentUser (state, val) {
      state.currentUser = val
    },
    setUserProfile (state, val) {
      state.userProfile = val
    }
  },
  actions: {
    fetchUserProfile ({ commit, state }) {
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
        commit('setUserProfile', res.data())
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
