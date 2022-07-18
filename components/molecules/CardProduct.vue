<template>
  <v-card max-width="300" min-width="250" @click="goToProductDetail">
    <v-img
      height="200"
      :src="`https://gymnastic-dev.azurewebsites.net/api/storages/${product.image}`"
      alt="product-image"
    />
    <p class="px-3 py-2 text-base font-semibold">{{ product.name }}</p>
    <v-divider class="mx-1" />
    <div class="items-center p-3">
      <p
        v-if="product.pricePreDiscount && product.discountPercentage"
        class="flex text-xs font-semibold"
      >
        <span
          class="mr-2 text-gray-700 line-through animate-pulse"
        >{{ product.pricePreDiscount | formatPriceVnd }}</span>
        <span>-{{ discountPercentage }}%</span>
      </p>
      <p
        v-if="product.price"
        class="text-base font-bold text-red-600"
      >{{ product.price | formatPriceVnd }}</p>
    </div>
  </v-card>
</template>

<script>
import { formatPriceVnd } from "~/utils";
export default {
  filters: {
    formatPriceVnd
  },
  
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  methods: {
    goToProductDetail() {
      this.$router.push(`/${this.product.id}`);
    }
  }
};
</script>