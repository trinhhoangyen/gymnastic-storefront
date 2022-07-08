<template>
  <div class="w-4/5 mx-auto">
    <product-detail v-for="(item, index) in products" :key="index" :data="item" />
  </div>
</template>

<script>
import services from "~/services";
export default {
  data() {
    return {
      products: []
    };
  },
  async created() {
    const res = await services.getProducts();
    console.log(res);
    this.products = res;
  }
};
</script>