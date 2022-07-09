<template>
  <div class="flex">
    <div class="sm:w-2/5">
      <img :src="image" alt="product-image" />
    </div>
    <div class="pl-0 sm:w-3/5 lg:pl-4 sm:pl-2">
      <p v-if="data.name" class="font-bold">{{ data.name}}</p>
      <p v-if="data.description">{{ data.description}}</p>
      <p v-if="data.pricePreDiscount">{{ data.pricePreDiscount}}</p>
    </div>
  </div>
</template>

<script>
import services from "~/services";
export default {
  name: "ProductDetailPage",
  scrollToTop: true,

  props: {
    data: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      image: "",
      isLoading: true
    };
  },

  async created() {
    const res = await services.getImage(this.data.image);
    this.image = res;
  }
};
</script>
