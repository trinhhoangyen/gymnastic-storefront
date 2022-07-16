<template>
  <div class="flex flex-wrap w-4/5 py-10 mx-auto bg-white justify-evenly m-bg-dark">
    <product-item
      class="w-2/5 p-3 mb-2 cursor-pointer shadow-3xl"
      v-for="(item, index) in products"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>
import services from "~/services";

export default {
  async asyncData() {
    const products = await services.getProducts();
    return { products };
  }
};
</script>