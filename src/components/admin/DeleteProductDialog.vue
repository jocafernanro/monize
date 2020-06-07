<template>
  <vs-dialog
    class="delete-dialog"
    blur
    prevent-close
    not-center
    width="500px"
    v-model="isPerformingProductDelete"
  >
    <template #header>
      <h2 class="delete-dialog__title">{{ $t('admin.delete.notifications.confirmation.title') }}</h2>
    </template>

    <div class="delete-dialog__content">
      <p
        class="delete-dialog__content__text"
      >{{ $t('admin.delete.notifications.confirmation.text') }}</p>
      <ul class="delete-dialog__content__list">
        <li
          v-for="(product, index) in productsToDelete"
          :key="index"
          class="delete-dialog__content__list__item"
        >
          <vs-avatar size="50">
            <img class="delete-dialog__content__list__item__img" :src="product.img" alt />
          </vs-avatar>
          <div class="delete-dialog__content__list__item__info">{{ product.name }}</div>
        </li>
      </ul>
    </div>

    <template #footer>
      <div class="delete-dialog__footer">
        <vs-button danger floating>{{ $t('admin.delete.notifications.confirmation.yes') }}</vs-button>
        <vs-button danger border @click="stopPerformingProductDelete">{{ $t('admin.delete.notifications.confirmation.cancel') }}</vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DeleteProductConfirmation',
  props: {},
  data: () => {
    return {}
  },
  computed: {
    ...mapState({
      productsToDelete: state => state.products.productsToDelete
    }),
    isPerformingProductDelete: {
      get () {
        return this.$store.state.products.isPerformingProductDelete
      },
      set (value) {
        this.$store.dispatch('products/PerformingProductDelete', value)
      }
    }
  },
  methods: {
    // ...mapActions('products', ['performingProductDelete']),
    ...mapMutations('products', ['setProductsToDelete']),
    stopPerformingProductDelete () {
      this.$store.dispatch('products/performingProductDelete', { status: false })
    }
  }
}
</script>

<style lang="scss" scoped>
.delete-dialog {
  .vs-dialog {
    padding: 3em;
  }

  &__title {
    margin: 0;
    padding: 0;
  }

  &__content {
    &__list {
      &__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5em 0;

        &__img {
          object-fit: cover;
          width: 100px;
          height: 50px;
        }

        &__info {
          padding: 0 0 0 1em;
        }
      }
    }
  }

  &__footer {
    margin: 1em 0 0 0;
    display: flex;
    flex-direction: columns;
    align-items: center;
  }
}
</style>
