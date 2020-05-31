<template>
  <div>
    <button @click="getProducts" >Click me</button>
    <div v-for="product in products" :key="product.id">
      <span>{{ product.id }}</span>
      <span>{{ product.brand }}</span>
      <span>{{ product.name }}</span>
      <span>{{ product.description }}</span>
      <span>{{ product.disccount }}</span>
      <span>{{ product.price_before }}</span>
      <span>{{ product.price_after }}</span>
      <span>{{ product.url }}</span>
    </div>
  </div>
</template>

<script>

const fb = require('../firebaseConfig.js')

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      fb.productsCollection.get().then(products => {
        this.products = products
        console.log(this.products)
      })
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
