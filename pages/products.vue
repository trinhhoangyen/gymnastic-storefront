<template>
  <div class="w-full p-5 mx-auto lg:w-9/12 lg:px-0 lg:gap-3 lg:py-10 lg:flex">
    <div class="w-full mb-3 lg:mb-0 lg:w-3/12">
      <category :categories="productCategories" />
    </div>
    <div class="w-full lg:w-9/12">
      <div v-if="products" class="flex flex-wrap gap-3 bg-white justify-evenly">
        <product-item
          class="w-full p-3 mb-2 cursor-pointer md:w-2/5 shadow-3xl"
          v-for="(item, index) in products"
          :key="index"
          :data="item"
        />
      </div>
      <div v-else>
        <p>Chưa có sản phẩm nào!</p>
      </div>
    </div>
  </div>
</template>

<script>
import services from "~/services";

export default {
  async asyncData() {
    const products = await services.getProducts();
    const productCategories = await services.getProductCategories();
    return { products, productCategories };
  }
};
</script>