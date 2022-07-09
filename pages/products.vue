<template>
  <div class="flex flex-wrap w-4/5 py-10 mx-auto bg-white m-bg-dark gap-x-8">
    <product-item
      class="w-1/2 p-3 shadow-3xl"
      v-for="(item, index) in products"
      :key="index"
      :data="item"
    />
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