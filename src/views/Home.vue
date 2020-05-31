<template>
  <div class="home">
    <section class="products">
      <div class="products__product-card" v-for="product in products" :key="product.id">
        <p>{{ product.id }}</p>
        <p>{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.discount }}</p>
        <p>{{ product.price_normal }}</p>
        <p>{{ product.price_offer }}</p>
        <p>{{ product.url }}</p>
        <p><img :src="product.img" class="products__product-card__image" alt="product_img"> </p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  name: 'Home',
  components: {},
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
      } catch (error) { throw new Error('Something gone wrong!') }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.products{
  &__product-card {
    width: 100px;
    &__image {
      width: 200px;
    }
  }
}
</style>
