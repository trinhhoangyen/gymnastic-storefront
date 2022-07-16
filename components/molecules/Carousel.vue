<template>
  <v-carousel cycle :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in list"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <img :src="`https://gymnastic-dev.azurewebsites.net/api/storages/${item}`" alt />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  }
};
</script>