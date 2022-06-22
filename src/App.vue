<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      height="40px"
    >
      <div class="d-flex">
        <v-btn
          @click="goToShop()"
          text
        >
          <v-icon>mdi-shopping-search</v-icon>
          <span class="mr-2">Shop</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click="goToCart()"
        text
      >
        <v-icon>mdi-cart</v-icon>
        <span class="mr-2">Cart</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ShopPage v-if="context === 'shop'" @add-to-cart="addToCart" />
      <CartPage v-else :cart="cart" @remove-from-cart="removeFromCart" />
    </v-main>
  </v-app>
</template>

<script>
import ShopPage from './components/ShopPage.vue';
import CartPage from './components/CartPage.vue';

export default {
  name: 'App',

  components: {
    ShopPage,
    CartPage,
  },

  data: () => ({
    context: 'shop',
    cart: [],
  }),

  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(product) {
      const index = this.cart.indexOf(product);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
    goToCart() {
      this.context = 'cart';
    },
    goToShop() {
      this.context = 'shop';
    },
  },
};
</script>
