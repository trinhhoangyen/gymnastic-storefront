<template>
  <div>
    <!-- ProductDetail.vue molecules -->
    <product-detail :product="product" />
    <!-- ListSameProducts.vue molecules -->
    <list-same-products :same-products="sameProducts" />
    <comments id="comments" :product-comments="productComments" />
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
      imageDetails: [res?.data?.result.image, ...res?.data?.result.imageDetails || []]
    };
    const sameProducts = await services.getSameProducts(
      res?.data?.result.productCategory.productCategoryId
    );
    const productComments = [];
    return {
      product,
      sameProducts: sameProducts?.data?.result || [],
      productComments: productComments
    };
  },
  mounted() {
    if (this.$route.query?.position) this.scrollTo(this.$route.query?.position);
  },
  computed: {
    categoryId() {
      console.log(this.product);
      return this.product.productCategory.productCategoryId;
    }
  },
  methods: {
    scrollTo(position) {
      document.getElementById(position).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
