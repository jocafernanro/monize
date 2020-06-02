<template>
  <div class="home">
    <section class="products">
      <ProductItem
        class="products__product-card"
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :shop="product.shop"
        :url="product.url"
        :price_normal="product.price_normal"
        :price_offer="product.price_offer"
        :img="product.img"
        :discount="product.discount"
      ></ProductItem>
    </section>
    <cookie-law></cookie-law>
  </div>
</template>

<script>

import ProductItem from '../components/ProductItem'
import CookieLaw from '../components/CookieLaw'
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  name: 'Home',
  components: {
    ProductItem,
    CookieLaw
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    async getProducts () {
      try {
        const { docs } = await fb.productsCollection.get()

        const products = docs.map(doc => {
          const { id } = doc
          const data = doc.data()
          return { id, ...data }
        })

        this.$store.commit('setProducts', products)
      } catch (error) {
        throw new Error('Something gone wrong!')
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
  &:after {
    content: "";
    background-image: radial-gradient(
      var(--vs-theme-bg2) 0,
      var(--vs-theme-bg) 40%,
      transparent 75%
    );
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  }
}

.products {
  width: 80%;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1em;
  min-width: 0;
  min-height: 0;
}
</style>
