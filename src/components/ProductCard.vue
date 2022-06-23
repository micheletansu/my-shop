<template>
  <v-card height="150" class="pa-2">
    <v-row dense class="fill-height">
      <v-col cols="2" class="fill-height">
        <img class="fill-spaces" alt="Vue logo" src="../assets/logo.svg">
      </v-col>
      <v-col cols="10">
        <div class="infoCard">
          <v-card-title class="pt-0 primary--text">
            {{ product.title }}
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon :color="product.leaf ? 'success': ''">mdi-leaf</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon :color="product.star ? 'warning': ''">mdi-star</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>
            {{ product.desc }}
          </v-card-subtitle>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="v-btn v-btn--text theme--light v-size--default primary--text"
            color="primary"
            text
          >
            Price {{ product.price }}€
          </v-btn>
          <v-btn
            color="primary"
            @click="emitAddToCart(product)"
          >
            Add to cart
          </v-btn>
        </v-card-actions>

      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ],
    right: null,
  }),

  methods: {
    emitAddToCart(product) {
      console.log('emit: ', product);
      this.$emit('add-to-cart', product);
    },
  },
};
</script>

<style scoped>
.infoCard {
  height: 95px;
}
.fill-spaces {
  width: 100%;
  height: 100%;
}
</style>
