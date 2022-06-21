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
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <v-icon>mdi-shopping-search</v-icon>
          <span class="mr-2">Shop</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-cart</v-icon>
        <span class="mr-2">Cart</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ShopPage/>
    </v-main>
  </v-app>
</template>

<script>
import ShopPage from './components/ShopPage.vue';

export default {
  name: 'App',

  components: {
    ShopPage,
  },

  data: () => ({
    //
  }),
};
</script>
