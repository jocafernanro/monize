<template>
  <div class="product-item">
    <div class="product-item__image" ref="content">
      <img :src="img" class="product-item__image__img" @load="closeSpinner"/>
    </div>
    <div class="product-item__discount">{{ discount }}%</div>
    <div class="product-item__footer">
      <div class="product-item__footer__info">
        <div class="product-item__footer__product">
          <div class="product-item__footer__product__price">
            <div class="product-item__footer__product__price__after">
              {{ price_offer }}€
            </div>
            <div class="product-item__footer__product__price__before">
              {{ price_normal }}€
            </div>
          </div>
          <div class="product-item__footer__product__shop">
            <p class="product-item__footer__product__shop shop">{{ shop }}</p>

          </div>
        </div>
        <h4 class="product-item__footer__info__title">{{ name }}</h4>
        <div class="product-item__footer__info__first">
          <p class="product-item__footer__info__first__left">{{ formatDate(date) }}</p>
          <p class="product-item__footer__info__first__right">
            <i class='bx bxs-truck product-item__footer__info__first__right__icon'></i>
            <span class="product-item__footer__info__first__right__label">{{ getShipping(shipping) }}</span>
          </p>
        </div>
      </div>

    </div>
    <a :href="url" target="_blank"
    class="product-item__container"
    @click.prevent="notifyOfferClick(item)">
      <vs-button
          :active="active == 1"
          class="product-item__container__button"
        >Ver chollo</vs-button>
    </a>

  </div>
</template>

<script>

import moment from 'moment'
import 'moment/locale/es'
const fb = require('../firebaseConfig.js')
moment.locale('es')

export default {
  name: 'ProductItem',
  props: {
    img: String,
    discount: Number,
    price_offer: Number,
    price_normal: Number,
    url: String,
    name: String,
    shop: String,
    date: Number,
    shipping: Number,
    item: Object
  },
  data () {
    return {
      active: 0,
      loading: true
    }
  },
  methods: {
    closeSpinner () {
      this.loading.close()
    },
    formatDate (date) {
      return moment(date).fromNow()
    },
    getShipping (shipping) {
      return !shipping ? this.$t('product.freeText') : `${shipping}${this.$t('currency.symbol')}`
    },
    notifyOfferClick (itemClicked) {
      fb.analytics.logEvent('offer_clicked', itemClicked)
      window.open(itemClicked.url, '_blank')
    }
    // getBrandStyle() {
    //   return 0
    // }
  },
  mounted () {
    this.loading = this.$vs.loading({
      target: this.$refs.content,
      opacity: 1
    })
  }
}
</script>

<style lang="scss" scoped>
    $large-screen: var(--max-width);
    .product-item {
      min-width: 0;
      justify-self: stretch;
      background: var(--vs-theme-layout);
      border-radius: 30px;
      padding: 25px;
      position: relative;
      box-sizing: border-box;
      z-index: 100;
      box-shadow: 0 15px 30px -8px rgba(0,0,0,.08);
      display: inline-block;

      &__image {
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 30px 30px 30px 8px;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 200px;

        &__img{
          height: 100%;
        }
      }

      &__discount {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 60px;
          height: 60px;
          border-radius: 22px;
          background-color: var(--vs-theme-success);
          color: var(--vs-theme-layout);
          box-shadow: 10px 12px 50px -6px rgba(0,0,0,.3);
          z-index: 300;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--font-weight-regular);
      }

      &__footer {
        display: flex;
        flex-direction: column;
        padding: 10px 0;

        &__product {
          display: flex;
          justify-content: flex-start;
          align-items: center;

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

          &__shop {
            font-size: .8rem;
            margin: 0;
            line-height: 1.7;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #195bff;
            font-weight: 600;
            flex: 1;
            text-align: right;
          }
        }

        &__info {
          display: flex;
          flex-direction: column;

          &__first {
            display: flex;
            margin-top: 4px;
            justify-content: space-between;

            &__left {
              color: var(--color-grey);
              font-size: 12px;
              margin: 0;
            }

            &__right {
              color: var(--color-grey);
              font-size: 14px;
              margin: 0;
              text-align: right;

              &__label {
                margin-left: 4px;
              }
            }
          }

          &__title {
            margin: 0;
            font-weight: 600;
            line-height: 1.25;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            min-height: 40px;
            text-align: justify;
          }
        }
      }

      &__container {
        text-decoration: none;
        color: white;

        &__button {
          width: 100%;
          margin: 0;
        }
      }
    }

    .shop {
      padding: 0.5em;
      border-radius: 1em;

      &--amazon{
        color: #EFCA00;
        background-color: #FFFB8E;
      }
    }
</style>
