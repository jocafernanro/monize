
<template>
    <div class="center">
      <vs-table
        v-model="tableConfig.selected"
        >
        <template #header>
          <vs-input v-model="tableConfig.search" border placeholder="Search" />
        </template>
        <template #thead>
          <vs-tr>
            <vs-th>
              <vs-checkbox
                :indeterminate="tableConfig.selected.length == tableConfig.products.length" v-model="tableConfig.allCheck"
                @change="tableConfig.selected = $vs.checkAll(tableConfig.selected, tableConfig.products)"
              />
            </vs-th>
            <vs-th sort @click="tableConfig.products = $vs.sortData($event ,tableConfig.products, 'name')">
              Name
            </vs-th>
            <vs-th sort @click="tableConfig.products = $vs.sortData($event ,tableConfig.products, 'discount')">
              discount
            </vs-th>
            <vs-th sort @click="tableConfig.products = $vs.sortData($event ,tableConfig.products, 'img')">
              img
            </vs-th>
            <vs-th sort @click="tableConfig.products = $vs.sortData($event ,tableConfig.products, 'price_normal')">
              price_normal
            </vs-th>
            <vs-th sort @click="tableConfig.products = $vs.sortData($event ,tableConfig.products, 'price_offer')">
              price_offer
            </vs-th>
            <vs-th sort @click="tableConfig.products = $vs.sortData($event ,tableConfig.products, 'shop')">
              shop
            </vs-th>
            <vs-th sort @click="tableConfig.products = $vs.sortData($event ,tableConfig.products, 'url')">
              url
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getPage($vs.getSearch(tableConfig.products, tableConfig.search), tableConfig.page, tableConfig.max)"
            :data="tr"
            :is-selected="!!tableConfig.selected.includes(tr)"
            not-click-selected
            open-expand-only-td
          >
            <vs-td checkbox>
              <vs-checkbox :val="tr" v-model="tableConfig.selected" />
            </vs-td>
            <vs-td edit @click="edit = tr, tableConfig.editProp = 'name', tableConfig.editActive = true">
              {{ tr.name }}
            </vs-td>
            <vs-td>
            {{ tr.discount }}
            </vs-td>
            <vs-td>
            {{ tr.img }}
            </vs-td>
            <vs-td>
            {{ tr.price_normal }}
            </vs-td>
            <vs-td>
            {{ tr.price_offer }}
            </vs-td>
            <vs-td>
            {{ tr.shop }}
            </vs-td>
            <vs-td>
            {{ tr.url }}
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="tableConfig.page" :length="$vs.getLength($vs.getSearch(tableConfig.products, tableConfig.search), tableConfig.max)" />
        </template>
      </vs-table>

      <vs-dialog v-model="tableConfig.editActive">
        <template #header>
            Change Prop {{ tableConfig.editProp }}
        </template>
        <vs-input @keypress.enter="tableConfig.editActive = false" v-if="tableConfig.editProp == 'email'" v-model="edit[tableConfig.editProp]" />
        <vs-select @change="tableConfig.editActive = false" block v-if="tableConfig.editProp == 'name'" placeholder="Select" v-model="edit[tableConfig.editProp]">
          <vs-option label="Vuesax" value="Vuesax">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="Vuejs">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="Javascript">
            Javascript
          </vs-option>
          <vs-option disabled label="Sass" value="Sass">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="Typescript">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="Webpack">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="Nodejs">
            Nodejs
          </vs-option>
        </vs-select>
      </vs-dialog>
    </div>
</template>
<script>
const fb = require('../firebaseConfig.js')
export default {
  name: 'Admin',
  data: () => {
    return {
      tableConfig: {
        editActive: false,
        edit: null,
        editProp: {},
        search: '',
        allCheck: false,
        page: 1,
        max: 2,
        active: 0,
        selected: [],
        products: []
      }
    }
  },
  methods: {
    async getProducts () {
      try {
        const { docs } = await fb.productsCollection.get()

        const products = docs.map(doc => {
          const { id } = doc
          const data = doc.data()
          return { id, ...data }
        })

        this.$store.commit('setProducts', products)
        this.tableConfig.products = products
      } catch (error) {
        throw new Error('Something gone wrong!')
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
