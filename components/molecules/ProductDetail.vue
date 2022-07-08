<template>
  <div>
    <div>
      <img :src="image" alt="product-image" />
    </div>
    <div>
      <div>
        <p v-if="data.name" class="font-bold">{{ data.name}}</p>
        <p v-if="data.description">{{ data.description}}</p>
        <p v-if="data.pricePreDiscount">{{ data.pricePreDiscount}}</p>
      </div>
    </div>
    <loading id="hjk" is-loading />
  </div>
</template>

<script>
import services from "~/services";
export default {
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
    }
  },

  async created() {
    const res = await services.getImage(this.data.image);
    // this.isLoading = false
    this.image = res
  }
};
</script>