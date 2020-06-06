<template>
  <div class="create-product">
    <section>
      <form class="create-product__form" @submit.prevent>
        <router-link class="nav__item__link" to="/admin"><vs-button relief>{{ $t("admin.create.backButton") }}</vs-button></router-link>

        <h1>{{ $t("admin.create.title") }}</h1>

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
          v-model.trim="product.priceNormal"
          placeholder="Normal price"
        ></vs-input>

        <vs-input
          class="create-product__form__input"
          color="#7d33ff"
          shadow
          type="number"
          v-model.trim="product.priceOffer"
          placeholder="Offer price"
        ></vs-input>

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
          v-for="(brand, i) in brands"
          :key="i"
          :label="brand" :value="brand">
            {{ brand }}
          </vs-option>
        </vs-select>
      </div>

        <vs-button relief class="create-product__form__button" @click="createProduct(product)">{{ $t("admin.create.button") }}</vs-button>
      </form>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    loading: undefined,
    shops: [
      'Amazon',
      'PCComponentes',
      'Aliexpress'
    ]
  }),
  computed: {
    ...mapState({
      performingRequest: state => state.products.performingRequest,
      product: state => state.products.product,
      brands: state => state.products.brands
    })
  },
  methods: {
    createProduct (product) {
      this.openLoading()
      this.$store.dispatch('products/createProduct', product)
        .then(ref => {
          console.log('Added document with ID: ', ref.id)
          this.$store.commit('products/addProduct', product)
          this.$store.commit('products/resetProduct', product)
          this.$store.commit('products/setPerformingRequest', false)
          this.loading.close()
          this.openNotification(
            'top-right',
            'success',
            this.$t('admin.create.notifications.success.title'),
            this.$t('admin.create.notifications.success.text'))
        })
    },
    openNotification (position = null, color, title, text) {
      this.$vs.notification({
        duration: 2000,
        color,
        position,
        title,
        text
      })
    },
    openLoading () {
      this.loading = this.$vs.loading()
    }
  },
  mounted () {
    this.$store.dispatch('products/getBrands')
  }
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
