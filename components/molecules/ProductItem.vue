<template>
  <div class="flex rounded-sm" @click="goToProductDetail">
    <div class="self-center h-28 sm:w-2/5">
      <img class="h-full"
        v-if="data.image"
        :src="`https://gymnastic-dev.azurewebsites.net/api/storages/${data.image}`"
        alt="product-image"
      />
    </div>
    <div class="py-2 pl-0 sm:w-3/5 lg:pl-4 sm:pl-2">
      <p v-if="data.name" class="text-base font-bold text-grey-3">{{ data.name}}</p>
      <p v-if="data.pricePreDiscount" class="mb-5 text-xs font-semibold text-red-600">{{ data.pricePreDiscount | formatPriceVnd }}</p>
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
  methods: {
    goToProductDetail() {
      console.log("data.id: ", this.data.id);
      this.$router.push(`/${this.data.id}`);
    }
  }
};
</script>