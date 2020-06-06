const fb = require('../../firebaseConfig.js')
const faker = require('faker')

// initial state
const state = () => ({
  all: [],
  performingRequest: false,
  product: parseProduct()
})

const parseProduct = (name = '', priceNormal, priceOffer, discount, shop = '', img = '', url = '') => ({
  name,
  price_normal: priceNormal,
  price_offer: priceOffer,
  discount,
  shop,
  img,
  url
})

// getters
const getters = {}

// actions
const actions = {
  async getProducts ({ commit }) {
    try {
      const { docs } = await fb.productsCollection.get()

      const products = docs.map(doc => {
        const { id } = doc
        const data = doc.data()
        return { id, ...data }
      })

      commit('setProducts', products)
    } catch (error) {
      throw new Error('Something gone wrong!')
    }
  },

  updateProducts ({ commit }, products) {
    commit('setProducts', products)
  },

  async createProduct ({ commit }, product) {
    commit('setPerformingRequest', true)
    await fb.productsCollection
      .add(product)
      .then(ref => {
        console.log('Added document with ID: ', ref.id)
        commit('addProduct', product)
        commit('resetProduct')
        commit('setPerformingRequest', false)
      })
  },

  async createFakeProduct ({ commit, dispatch }) {
    const productName = faker.commerce.productName()
    const priceNormal = parseFloat(faker.commerce.price())
    const priceOffer = parseFloat(faker.commerce.price())
    const image = faker.image.image()
    const url = faker.internet.url('https://amazon.es')
    const fakeProduct = this.parseProduct(
      productName,
      priceNormal,
      priceOffer,
      parseInt(faker.random.number({
        min: 10,
        max: 50
      })),
      'Amazon',
      image,
      url)
    dispatch('createProduct', fakeProduct)
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  addProduct (state, product) {
    state.all.push(product)
  },
  setPerformingRequest (state, status) {
    state.performingRequest = status
  },
  resetProduct (state, status) {
    state.product = parseProduct()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
