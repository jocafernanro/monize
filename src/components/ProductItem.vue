<template>
  <div class="product-item">
    <div class="product-item__image">
      <img :src="img" class="product-item__image__img"/>
    </div>
    <div class="product-item__discount">{{ discount }}%</div>
    <div class="product-item__footer">
      <div class="product-item__footer__info">
        <h4 class="product-item__footer__info__title">{{ name }}</h4>
        <p class="product-item__footer__info__subtitle">{{ description }}</p>
      </div>
      <div class="product-item__footer__price">
        <div class="product-item__footer__price__after">
          {{ price_offer }}€
        </div>
        <div class="product-item__footer__price__before">
          {{ price_normal }}€
        </div>
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
    description: String
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
    .product-item {
      width: 31%;
      background: var(--vs-theme-layout);
      border-radius: 30px;
      padding: 20px;
      position: relative;
      box-sizing: border-box;
      z-index: 100;
      box-shadow: 0 15px 30px -8px rgba(0,0,0,.08);
      display: inline-block;
      margin: 0 8px 16px 8px;

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

        &__img{
          width: 100%;
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
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;

        &__info {
          flex: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          &__title {
            margin: 0;
            font-weight: 600;
            line-height: 1.25;
          }

          &__subtitle {
            font-size: .8rem;
            margin: 0;
            line-height: 1.7;
          }
        }

        &__price {
          flex: 1;
          display: flex;
          justify-content: flex-end;

          &__after {
            font-weight: 600;
          }

          &__before {
            text-decoration: line-through;
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
</style>
