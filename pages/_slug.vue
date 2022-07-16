<template>
  <div>
    <product-detail :product="product" />
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
      product,
      error: res.status
    };
  }
};
</script>
