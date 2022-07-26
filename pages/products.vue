<template>
  <div class="w-full p-5 mx-auto lg:w-9/12 lg:px-0 lg:gap-3 lg:py-10 lg:flex">
    <div class="w-full mb-3 lg:mb-0 lg:w-3/12">
      <category :categories="productCategories" />
    </div>
    <div class="w-full lg:w-9/12">
      <div v-if="products">
        <div class="flex flex-wrap gap-3 bg-white justify-evenly">
          <product-item
            class="p-3 mb-2 cursor-pointer md:w-2/5 max-w-lg shadow-3xl"
            v-for="(item, index) in products"
            :key="index"
            :data="item"
          />
        </div>
        <v-pagination class="my-5" v-model="page" circle :length="6" />
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
  data() {
    return {
      page: 1,
    };
  },
  async asyncData() {
    const products = await services.getProducts();
    const productCategories = await services.getProductCategories();
    return { products, productCategories };
  },
  computed: {
    countPage() {
      return this.products.length / 5 + (this.products.length % 5) > 0 ? 1 : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
button.v-pagination__item--active {
  background-color: black;
}
</style>