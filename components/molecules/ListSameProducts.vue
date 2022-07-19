<template>
  <div class="w-11/12 py-20 mx-auto lg:w-9/12" v-if="sameProducts.length">
    <div class="flex items-center">
      <div class="w-full h-0.5 bg-grey-7"></div>
      <p class="text-2xl text-center min-w-md">Các sản phẩm liên quan</p>
      <div class="w-full h-0.5 bg-grey-7"></div>
    </div>
    <div class="flex justify-around gap-2 mt-5 overflow-x-scroll lg:mt-10 lg:gap-4">
      <card-product v-for="(product, index) in sameProducts" :key="index" :product="product" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListSameProducts",
  props: {
    sameProducts: {
      type: Array,
      default: []
    }
  }
};
</script>