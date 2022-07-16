<template>
  <v-card max-width="300" min-width="250">
    <v-img
      height="200"
      :src="`https://gymnastic-dev.azurewebsites.net/api/storages/${product.image}`"
      alt="product-image"
    />
    <p class="px-3 py-2 text-base font-semibold">{{ product.name }}</p>
    <v-divider class="mx-1" />

  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {}
    }
  }
};
</script>