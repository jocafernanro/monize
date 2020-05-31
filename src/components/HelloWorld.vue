<template>
  <div>
    <button @click="getProducts" >Click me</button>
    <div v-for="product in products" :key="product.id">
      <p>{{ product.id }}</p>
      <p>{{ product.name }}</p>
      <p>{{ product.description }}</p>
      <p>{{ product.disccount }}</p>
      <p>{{ product.price_before }}</p>
      <p>{{ product.price_after }}</p>
      <p>{{ product.url }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['products'])
  },
  props: {
    msg: String
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
