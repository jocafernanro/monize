const fb = require('../../firebaseConfig.js')
const faker = require('faker')

// initial state
const state = () => ({
  all: [],
  brands: [],
  performingRequest: false,
  product: parseProduct(),
  isPerformingProductDelete: false,
  productsToDelete: []
})

const parseProduct = (name = '', priceNormal, priceOffer, shop = '', img = '', url = '') => ({
  name,
  price_normal: priceNormal,
  price_offer: priceOffer,
  discount: parseInt((priceOffer * 100) / priceNormal),
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

  async getBrands ({ commit }) {
    try {
      const { docs } = await fb.brandsCollection.get()

      const brands = docs.map(doc => doc.data().name)

      commit('setBrands', brands)
    } catch (error) {
      throw new Error('Something gone wrong!')
    }
  },

  updateProducts ({ commit }, products) {
    commit('setProducts', products)
  },

  async createProduct ({ commit }, { name, priceNormal, priceOffer, shop, img, url }) {
    commit('setPerformingRequest', true)
    return fb.productsCollection.add(parseProduct(
      name,
      priceNormal,
      priceOffer,
      shop,
      img,
      url
    ))
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
      'Amazon',
      image,
      url)
    dispatch('createProduct', fakeProduct)
  },

  performingProductDelete ({ commit }, { status, products }) {
    console.log(status)
    commit('setPerformingProductDelete', status)
    status ? commit('setProductsToDelete', products) : commit('resetProductsToDelete')
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  setBrands (state, brands) {
    state.brands = brands
  },
  addProduct (state, product) {
    state.all.push(product)
  },
  setPerformingRequest (state, status) {
    state.performingRequest = status
  },
  resetProduct (state, status) {
    state.product = parseProduct()
  },
  setPerformingProductDelete (state, status) {
    state.isPerformingProductDelete = status
  },
  setProductsToDelete (state, products) {
    state.productsToDelete = products
  },
  resetProductsToDelete (state) {
    state.productsToDelete = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
