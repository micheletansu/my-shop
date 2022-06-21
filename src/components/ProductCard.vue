<template>
  <v-card height="150" class="pa-2">
    <v-row dense>
      <v-col cols="2">
        <img width="120" height="120" alt="Vue logo" src="../assets/logo.svg">
      </v-col>
      <v-col cols="10">
        <div class="infoCard">
          <v-card-title class="pt-0 primary--text">
            Cafe Badilico
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-leaf</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-star</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make...
          </v-card-subtitle>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="v-btn v-btn--text theme--light v-size--default primary--text"
            color="primary"
            text
          >
            Price 4.01€
          </v-btn>
          <v-btn
            color="primary"
            @click="buy"
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
  props: ['content'],
  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ],
    right: null,
  }),
};
</script>

<style scoped>
.infoCard {
  height: 90px;
}
</style>
