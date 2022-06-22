<template>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Product
          </th>
          <th class="text-left">
            Code
          </th>
          <th class="text-left">
            Price
          </th>
          <th class="text-left">
            Status
          </th>
          <th ></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in cart"
          :key="product.title"
        >
          <td>{{ product.title }}</td>
          <td></td>
          <td>{{ product.price }}</td>
          <td>ok</td>
          <td>
            <v-icon :color="danger" @click="emitRemoveFromCart(product)">mdi-close-box</v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

</template>

<script>
export default {
  name: 'CartPage',
  props: ['cart'],
  data: () => ({}),
  methods: {
    emitRemoveFromCart(product) {
      console.log('emit: ', product);
      this.$emit('remove-from-cart', product);
    },
  },
};
</script>

<style scoped>
.infoCard {
  height: 95px;
}
</style>
