<template>
  <div>
    <!-- ProductDetail.vue molecules -->
    <product-detail :product="product" />
    <!-- ListSameProducts.vue molecules -->
    <list-same-products :category-id="categoryId" />
  </div>
</template>

<script>
import services from "~/services";

export default {
  name: "ProductDetailPage",
  scrollToTop: true,

  async asyncData({ params }) {
    const res = await services.getProductDetail(params.slug);
    const product = {
      ...res?.data?.result,
      imageDetails: [res?.data?.result.image, ...res?.data?.result.imageDetails]
    };

    return {
      product
    };
  },
  computed: {
    categoryId() {
      return this.product.productCategory.productCategoryId;
    }
  }
};
</script>
