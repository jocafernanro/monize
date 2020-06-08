<template>
  <div class="home" ref="content">
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
        :date="product.date"
        :shipping="product.shipping"
      ></ProductItem>
    </section>
    <cookie-law></cookie-law>
  </div>
</template>

<script>

import ProductItem from '../components/ProductItem'
import CookieLaw from '../components/CookieLaw'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    loading: true
  }),
  components: {
    ProductItem,
    CookieLaw
  },
  computed: mapState({
    products: state => state.products.activeProducts,
    performingRequest: state => state.products.performingRequest
  }),
  watch: {
    performingRequest: function (newValue) {
      if (newValue) {
        this.loading = this.$vs.loading({
          text: this.$t('home.spinner.text'),
          opacity: 1
        })
      } else {
        this.loading.close()
      }
    }
  },
  mounted () {
    this.$store.dispatch('products/getProducts', true)
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  padding: 2em 0;
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
