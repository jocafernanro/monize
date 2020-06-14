<template>
  <div class="information">
    <section class="information__info">
      <div class="offer__main">
          <div class="offer__main__image-container">
              <img :src="productSelected.img" :alt="productSelected.name" class="offer__main__image-container__img">
          </div>
          <div class="offer__main__info">
              <h1 class="offer__main__info__title">{{ productSelected.name }}</h1>
              <div class="offer__main__info__price">
                <div class="offer__main__info__price__after">
                  {{ productSelected.price_offer }}{{ $t('currency.symbol') }}
                </div>
                <div class="offer__main__info__price__before">
                  {{ productSelected.price_normal }}{{ $t('currency.symbol') }}
                </div>
              </div>
              <div class="offer__main__info__share">
                  <vs-tooltip
                    v-for="option in shareOptions"
                    :key="option.id">
                    <a :href="getShareUrl(option.url, option.urlText)" target="_blank"
                      class="offer__main__info__button-container">
                      <vs-button
                          icon
                          :color="option.color">
                          <i :class="`bx ${option.icon} offer__main__info__share__icon`"></i>
                      </vs-button>
                    </a>
                    <template #tooltip>
                    {{option.text}}
                    </template>
                  </vs-tooltip>
              </div>
              <div class="offer__main__info__shop">
                  <span class="offer__main__info__shop__label">{{ $t('product.detail.shop.label') }}: </span>
                  <span class="offer__main__info__shop__name">{{ productSelected.shop }}</span>
              </div>
              <div class="offer__main__info__description">
                Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a "Fistrum" para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a "Latin" que te lo pongo con cuarto y mitad de romanooo... Jarl!!
              </div>
              <a :href="productSelected.url" target="_blank"
                class="offer__main__info__button-container"
                @click.prevent="notifyOfferClick(productSelected)">
                <vs-button
                    class="offer__main__info__button-container__button"
                    >Ver chollo</vs-button>
                </a>
          </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  data: () => ({
    productId: undefined,
    shareOptions: [
      { id: 'whatsapp', icon: 'bxl-whatsapp', color: 'whatsapp', text: 'whatsapp', url: 'https://wa.me/?text=', urlText: 'product.share.whatsapp' },
      { id: 'telegram', icon: 'bxl-telegram', color: 'telegram', text: 'telegram' },
      { id: 'facebook', icon: 'bxl-facebook-square', color: 'facebook', text: 'facebook' },
      { id: 'twitter', icon: 'bxl-twitter', color: 'twitter', text: 'twitter' },
      { id: 'copy', icon: 'bxs-copy', color: '', text: 'copy link address' }
    ]
  }),
  metaInfo () {
    return {
      title: `${this.productSelected.name} - Epiloge`,
      meta: [
        { name: 'description', content: this.productSelected.name },
        { property: 'og:title', content: this.productSelected.name },
        { property: 'og:site_name', content: 'Ejemplo' },
        { property: 'og:description', content: this.productSelected.name },
        { property: 'og:type', content: 'profile' },
        { property: 'og:url', content: this.productSelected.url },
        { property: 'og:image', content: this.productSelected.img }
      ]
    }
  },
  computed: {
    ...mapState({
      productSelected: state => state.products.productSelected
    })
  },
  methods: {
    notifyOfferClick (itemClicked) {
      fb.analytics.logEvent('offer_clicked', itemClicked)
      window.open(itemClicked.url, '_blank')
    },
    getShareUrl (baseUrl, text) {
      const url = `${baseUrl}${this.$t(text)}`
      return url
    }
  },
  mounted () {
    this.productId = this.$route.params.id
    this.$store.dispatch('products/getProductById', this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
 @import "src/assets/styles/shared-styles";

 .offer__main {
     display: flex;

     @media (max-width: 800px){
       flex-direction: column;
     }

     &__image-container {
         flex: 1;

         &__img {
            width: 100%;
            padding: 0 1rem;
            box-sizing: border-box;
         }
     }

     &__info {
         flex: 2;
         padding: 0 0.5rem;

         &__title {
             margin-bottom: 0.5rem;
         }

         &__price {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            flex: 2;

            &__after {
              font-weight: 600;
              color: var(--vs-theme-danger);
              font-size: 24px;
            }

            &__before {
              text-decoration: line-through;
              margin-left: 8px;
              color: var(--color-grey);
              font-size: 14px;
            }
          }

          &__share {
             display: flex;
          }
     }
 }
</style>
