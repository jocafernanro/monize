<template>
  <div class="product-item">
    <div class="product-item__image">
      <img :src="img" class="product-item__image__img"/>
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
            <p :class="`product-item__footer__product__shop shop shop--${shop.toLowerCase()}`">{{ shop }}</p>

          </div>
        </div>
        <h4 class="product-item__footer__info__title">{{ name }}</h4>
      </div>

    </div>
    <vs-button
        :active="active == 1"
        @click="active = 1"
        class="product-item__button"
      >
        <a :href="url" target="_blank">
          Ver chollo
        </a>
    </vs-button>
  </div>
</template>

<script>

export default {
  name: 'ProductItem',
  props: {
    img: String,
    discount: Number,
    price_offer: Number,
    price_normal: Number,
    url: String,
    name: String,
    shop: String
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    // getBrandStyle() {
    //   return 0
    // }
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
          align-items: baseline;

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
          }
        }

        &__info {
          display: flex;
          flex-direction: column;

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
          }
        }
      }

      &__button {
        width: 100%;
        margin: 0;

        a {
          text-decoration: none;
          color: white;
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
