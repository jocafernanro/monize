
<template>
  <div class="center admin">
    <div class="admin__actions">
      <vs-button
        class="admin__actions__button"
        relief
        @click="createFakeProduct"
      >{{ $t("admin.create.fake") }}</vs-button>
      <router-link class="admin__actions__button" to="/admin/products/create">
        <vs-button relief>{{ $t("admin.create.button") }}</vs-button>
      </router-link>
      <vs-button
        danger
        relief
        @click="performingProductDelete( {status: true, products: products} )"
      >{{ $t("admin.delete.buttonAll") }}</vs-button>
      <vs-button
        danger
        :disabled="tableConfig.selected.length <= 0"
        relief
        @click="performingProductDelete( {status: true, products: tableConfig.selected} )"
      >{{ $t("admin.delete.button") }}</vs-button>
    </div>
    <vs-table v-model="tableConfig.selected">
      <template #header>
        <vs-input v-model="tableConfig.search" border placeholder="Search" />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="tableConfig.selected.length == products.length"
              v-model="tableConfig.allCheck"
              @change="tableConfig.selected = $vs.checkAll(tableConfig.selected, products)"
            />
          </vs-th>
          <vs-th sort @click="updateProducts($vs.sortData($event ,products, 'name'))">Name</vs-th>
          <vs-th>Active</vs-th>
          <vs-th sort @click="updateProducts($vs.sortData($event ,products, 'discount'))">discount</vs-th>
          <vs-th sort @click="updateProducts($vs.sortData($event ,products, 'img'))">img</vs-th>
          <vs-th
            sort
            @click="updateProducts($vs.sortData($event ,products, 'price_normal'))"
          >price_normal</vs-th>
          <vs-th
            sort
            @click="updateProducts($vs.sortData($event ,products, 'price_offer'))"
          >price_offer</vs-th>
          <vs-th sort @click="updateProducts($vs.sortData($event ,products, 'shop'))">shop</vs-th>
          <vs-th sort @click="updateProducts($vs.sortData($event ,products, 'shipping'))">shipping</vs-th>
          <vs-th sort @click="updateProducts($vs.sortData($event ,products, 'url'))">url</vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getPage($vs.getSearch(products, tableConfig.search), tableConfig.page, tableConfig.max)"
          :data="tr"
          :is-selected="!!tableConfig.selected.includes(tr)"
          not-click-selected
          open-expand-only-td
        >
          <vs-td checkbox>
            <vs-checkbox :val="tr" v-model="tableConfig.selected" />
          </vs-td>
          <vs-td
            edit
            @click="edit = tr, tableConfig.editProp = 'name', tableConfig.editActive = true"
          >{{ tr.name }}</vs-td>
          <vs-td checkbox><vs-checkbox @change="updateProduct(tr)" v-model="tr.active" /></vs-td>
          <vs-td>{{ tr.discount }}</vs-td>
          <vs-td
            edit
            @click="edit = tr, tableConfig.editProp = 'img', tableConfig.editActive = true"
          >{{ tr.img }}</vs-td>
          <vs-td
            edit
            @click="edit = tr, tableConfig.editProp = 'price_normal', tableConfig.editActive = true"
          >{{ tr.price_normal }}</vs-td>
          <vs-td
            edit
            @click="edit = tr, tableConfig.editProp = 'price_offer', tableConfig.editActive = true"
          >{{ tr.price_offer }}</vs-td>
          <vs-td
            edit
            @click="edit = tr, tableConfig.editProp = 'shop', tableConfig.editActive = true"
          >{{ tr.shop }}</vs-td>
          <vs-td
            edit
            @click="edit = tr, tableConfig.editProp = 'shipping', tableConfig.editActive = true"
          >{{ tr.shipping }}</vs-td>
          <vs-td
            edit
            @click="edit = tr, tableConfig.editProp = 'url', tableConfig.editActive = true"
          >{{ tr.url }}</vs-td>
        </vs-tr>
      </template>
      <template #footer>
        <vs-pagination
          v-model="tableConfig.page"
          :length="$vs.getLength($vs.getSearch(products, tableConfig.search), tableConfig.max)"
        />
      </template>
    </vs-table>

    <vs-dialog v-model="tableConfig.editActive">
      <template #header>Change Prop {{ tableConfig.editProp }}</template>
      <vs-input
        @keypress.enter="updateProduct(edit), tableConfig.editActive = false"
        v-if="isFieldIncluded(tableConfig.editProp, fields.strings)"
        v-model="edit[tableConfig.editProp]"
      />
      <vs-input
        type="number"
        @keypress.enter="updateProduct(edit), tableConfig.editActive = false"
        v-if="isFieldIncluded(tableConfig.editProp, fields.integers)"
        v-model="edit[tableConfig.editProp]"
      />
      <div
        class="center con-selects create-product__form__select"
        v-if="isFieldIncluded(tableConfig.editProp, fields.selects)"
      >
        <vs-select color="#7d33ff" placeholder="Shop" v-model="edit[tableConfig.editProp]">
          <vs-option v-for="(brand, i) in brands" :key="i" :label="brand" :value="brand">{{ brand }}</vs-option>
        </vs-select>
      </div>
      <vs-button
        class="admin__actions__button"
        relief
        @click="updateProduct(edit), tableConfig.editActive = false"
      >Guardar</vs-button>
    </vs-dialog>

    <DeleteProductDialog></DeleteProductDialog>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import DeleteProductDialog from '../../components/admin/DeleteProductDialog'

export default {
  name: 'Admin',
  components: {
    DeleteProductDialog
  },
  data: () => {
    return {
      tableConfig: {
        editActive: false,
        edit: null,
        editProp: {},
        search: '',
        allCheck: false,
        page: 1,
        max: 10,
        active: 0,
        selected: []
      },
      fields: {
        strings: ['name', 'img', 'url'],
        integers: ['price_normal', 'price_offer', 'shipping'],
        selects: ['shop']
      }
    }
  },
  computed: mapState({
    products: state => state.products.all,
    brands: state => state.products.brands,
    performingRequest: state => state.products.performingRequest
  }),
  methods: {
    ...mapActions('products', [
      'createFakeProduct',
      'updateProducts',
      'performingProductDelete',
      'updateProduct'
    ]),
    openNotification (position = null, color, title, text) {
      this.$vs.notification({
        duration: 2000,
        color,
        position,
        title,
        text
      })
    },
    isFieldIncluded (field, array) {
      return array.includes(field)
    }
  },
  watch: {
    performingRequest: function (newValue, oldValue) {
      if (!newValue && oldValue) {
        this.openNotification(
          'top-right',
          'success',
          this.$t('admin.update.notifications.success.title'),
          this.$t('admin.update.notifications.success.text'))
      }
    }
  },
  mounted () {
    this.$store.dispatch('products/getProducts')
    this.$store.dispatch('products/getBrands')
  }
}
</script>
<style lang="scss" scoped>
.admin {
  &__actions {
    display: flex;

    &__button {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
