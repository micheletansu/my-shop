<template>
  <v-row>
    <v-col cols="12" sm="3">
      <v-sheet
        rounded="lg"
        min-height="268"
      >
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="menu in menuItems"
            :key="menu.title"
            link
          >
            <v-expansion-panel-header
              :class="context[0].text === menu.title ? 'font-weight-bold primary--text': ''">
              {{ menu.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list dense nav>
                <v-list-item
                  v-for="submenu in menu.contents"
                  :key="submenu"
                  @click="go(menu.title, submenu)"
                  :class="checkContext(menu.title, submenu)">
                {{submenu}}
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-sheet>
    </v-col>

    <v-col cols="12" sm="9" class="pr-md-9">
      <v-breadcrumbs :items="context">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>

      <v-row
        :key="product.title"
        v-for="product in products"
      >
        <v-col :key="product.title">
          <Product :product=product v-on="$listeners"/>
        </v-col>
      </v-row>

      <!-- <v-row
        :key="1"
        :class="mb-4"
        no-gutters
      >
        <v-col
          v-for="product in products"
          :key="product.title"
        >
          <Product data=product />
        </v-col>
      </v-row> -->
    </v-col>
  </v-row>
</template>

<script>
import Product from './ProductCard.vue';
import { createContext } from '../utils/ShopPage';

const contents = ['Buste', 'Biglietti da visita', 'Carta', 'Carta da lettere', 'Carta credito/debito', 'Cassa', 'Cassetta di sicurezza', 'Certificati di deposito', 'Conti correnti'];
const desc = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make...`;
export default {
  name: 'HelloWorld',
  components: {
    Product,
  },
  data: () => ({
    context: createContext('Cancelleria', 'Buste'),
    menuItems: [
      { title: 'Accessori', contents },
      { title: 'Timbri', contents },
      { title: 'Biglietti', contents },
      { title: 'Cancelleria', contents },
      { title: 'Modulistica', contents },
      { title: 'Dispositivi', contents },
      { title: 'Rotoli', contents },
    ],
    products: [
      {
        title: 'Busta', desc, price: 4.01, star: true, leaf: false,
      },
      {
        title: 'Foglio', desc, price: 2.15, star: false, leaf: true,
      },
      {
        title: 'Biglietto', desc, price: 1.99, star: true, leaf: true,
      },
      {
        title: 'Carta di credito', desc, price: 5.00, star: true, leaf: true,
      },
      {
        title: 'Carta di debito', desc, price: 1.00, star: false, leaf: false,
      },
      {
        title: 'Protezione', desc, price: 20.00, star: false, leaf: false,
      },
    ],
  }),

  methods: {
    go(p, v) {
      this.context = createContext(p, v);
    },
    checkContext(menu, submenu) {
      return this.context[0].text === menu
        && this.context[1].text === submenu ? 'font-weight-bold' : '';
    },
  },
};
</script>
