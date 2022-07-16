<template>
  <div>abd</div>
</template>

<script>
import services from "~/services";
export default {
  props: {
    categoryId: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      sameProducts: []
    };
  },
  async created() {
    this.sameProducts = await services.getSameProducts(
      product?.productCategory?.productCategoryId
    );
  }
};
</script>