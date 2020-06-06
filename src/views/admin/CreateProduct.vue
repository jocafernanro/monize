<template>
  <div class="create-product">
    <transition name="fade">
      <div v-if="performingRequest" class="loading">
        <p>Loading...</p>
      </div>
    </transition>
    <section>
      <form class="create-product__form" @submit.prevent>
        <h1>Create Product</h1>

        <vs-input
          class="create-product__form__input"
          color="#7d33ff"
          shadow
          type="text"
          v-model.trim="product.name"
          placeholder="Name"
        >
        </vs-input>

        <vs-input
          class="create-product__form__input"
          color="#7d33ff"
          shadow
          type="number"
          v-model.trim="product.price_normal"
          placeholder="Normal price"
        ></vs-input>

        <vs-input
          class="create-product__form__input"
          color="#7d33ff"
          shadow
          type="number"
          v-model.trim="product.price_offer"
          placeholder="Offer price"
        ></vs-input>

        <vs-input
          class="create-product__form__input"
          color="#7d33ff"
          shadow
          type="number"
          v-model.trim="product.discount"
          placeholder="Discount"
        >
        </vs-input>

        <vs-input
          class="create-product__form__input"
          color="#7d33ff"
          shadow
          type="text"
          v-model.trim="product.img"
          placeholder="Image"
        >
        </vs-input>

        <vs-input
          class="create-product__form__input"
          color="#7d33ff"
          shadow
          type="text"
          v-model.trim="product.url"
          placeholder="url"
        >
        </vs-input>

      <div class="center con-selects create-product__form__select">
        <vs-select
          color="#7d33ff"
          placeholder="Shop"
          v-model="product.shop"
        >
          <vs-option
          v-for="(shop, i) in shops"
          :key="i"
          :label="shop" :value="shop">
            {{ shop }}
          </vs-option>
        </vs-select>
      </div>

        <vs-button relief class="create-product__form__button" @click="createProduct(product)">Create</vs-button>
      </form>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    errorMsg: '',
    shops: [
      'Amazon',
      'PCComponentes',
      'Aliexpress'
    ]
  }),
  computed: {
    ...mapState({
      performingRequest: state => state.products.performingRequest,
      product: state => state.products.product
    })
  },
  methods: mapActions('products', [
    'createProduct'
  ])
}
</script>
<style lang="scss" scoped>
.create-product {
  width: 30%;
  margin: 0 auto;
  font-size: 1em;
  padding: 2em 0;

  &__form {
    &__input {
      height: 3em;
    }

    &__select {
      height: 3em;
      width: 100%;
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
