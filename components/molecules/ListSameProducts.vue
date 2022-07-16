<template>
  <div class="w-11/12 py-20 mx-auto lg:w-9/12">
    <v-banner>Các sản phẩm liên quan</v-banner>
    <div class="flex justify-around mt-5">
      <card-product v-for="(product, index) in sameProducts" :key="index" :product="product" />
    </div>
  </div>
</template>

<script>
import services from "~/services";

export default {
  name: "ListSameProducts",
  props: {
    categoryId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sameProducts: []
    };
  },
  async created() {
    this.sameProducts = await services.getSameProducts(this.categoryId);
  }
};
</script>