<template>
  <div class="flex rounded-sm" @click="goToProductDetail">
    <div class="self-center h-28 w-2/5">
      <img
        class="h-full mx-auto"
        v-if="data.image"
        :src="`https://gymnastic-dev.azurewebsites.net/api/storages/${data.image}`"
        alt="product-image"
      />
    </div>
    <div class="py-2 pl-0 w-3/5 lg:pl-4 sm:pl-2">
      <p
        v-if="data.name"
        class="mb-2 text-base font-bold line-clamp-3 text-grey-3"
      >{{ data.name}}</p>
      <!-- Price -->
      <div class="items-center mb-5">
        <p
          v-if="data.pricePreDiscount && data.discountPercentage"
          class="flex text-xs font-semibold"
        >
          <span
            class="mr-2 text-gray-700 line-through animate-pulse"
          >{{ data.pricePreDiscount | formatPriceVnd }}</span>
          <span>-{{ discountPercentage }}%</span>
        </p>
        <p
          v-if="data.price"
          class="text-base font-bold text-red-600"
        >{{ data.price | formatPriceVnd }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPriceVnd } from "~/utils";
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  filters: {
    formatPriceVnd
  },
  computed: {
    discountPercentage() {
      return parseFloat(this.data.discountPercentage) * 100;
    }
  },
  methods: {
    goToProductDetail() {
      this.$router.push(`/${this.data.id}`);
    }
  }
};
</script>