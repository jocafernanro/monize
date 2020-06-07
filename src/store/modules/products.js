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

const parseProduct = (name = '', active = false, priceNormal, priceOffer, shop = '', img = '', url = '') => {
  return {
    name,
    active,
    price_normal: parseFloat(priceNormal),
    price_offer: parseFloat(priceOffer),
    discount: 100 - parseInt((priceOffer * 100) / priceNormal),
    shop,
    img,
    url
  }
}

// getters
const getters = {}

// actions
const actions = {
  async getProducts ({ commit }, onlyActive) {
    commit('setPerformingRequest', true)
    try {
      const { docs } = await fb.productsCollection.get()
      const filteredProducst = onlyActive ? docs.filter(doc => doc.data().active) : docs

      const products = filteredProducst.map(doc => {
        const { id } = doc
        const data = doc.data()
        return { id, ...data }
      })

      commit('setProducts', products)
      commit('setPerformingRequest', false)
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

  async updateProduct ({ commit, dispatch }, product) {
    const parsedProduct = parseProduct(
      product.name,
      product.active,
      product.price_normal,
      product.price_offer,
      product.shop,
      product.img,
      product.url
    )
    return fb.productsCollection.doc(product.id).set(parsedProduct).then(() => {
      dispatch('getProducts')
    })
  },

  async createProduct ({ commit }, { name, active, priceNormal, priceOffer, shop, img, url }) {
    commit('setPerformingRequest', true)
    const product = parseProduct(
      name,
      active,
      priceNormal,
      priceOffer,
      shop,
      img,
      url
    )
    fb.productsCollection.add(product).then(ref => {
      console.log('Added document with ID: ', ref.id)
      commit('addProduct', product)
      commit('resetProduct', product)
      commit('setPerformingRequest', false)
      commit('setPerformingRequest', false)
    })
  },

  async createFakeProduct ({ commit, dispatch }) {
    const productName = faker.commerce.productName()
    const priceNormal = parseFloat(faker.commerce.price())
    const priceOffer = parseFloat(faker.commerce.price())
    const img = faker.image.image()
    const url = faker.internet.url('https://amazon.es')
    const fakeProduct = {
      name: productName,
      active: true,
      priceNormal,
      priceOffer,
      shop: 'Amazon',
      img,
      url
    }
    dispatch('createProduct', fakeProduct)
  },

  async deleteProducts ({ commit, state }) {
    commit('setPerformingRequest', true)
    const batch = fb.db.batch()
    for (const product of state.productsToDelete) {
      const toBeDeleted = fb.productsCollection.doc(product.id)
      batch.delete(toBeDeleted)
    }
    await batch.commit()
    commit('setPerformingRequest', false)
  },

  performingProductDelete ({ commit }, { status, products }) {
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
