<template>
  <div v-if="item" class="grid grid-cols-4 gap-1 mb-1">
    <p class="col-span-2 px-2 py-1 text-sm font-semibold border">{{ item.name }}</p>
    <div class="col-span-2 px-2 py-1 border">
      <p v-if="item.productDetailType === 'Information'" class="text-sm">{{ item.description }}</p>
      <div class="flex gap-x-1" v-if="item.productDetailType === 'Range'">
        <star v-for="(color, index) in star" :color="color" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  computed: {
    star() {
      const count =
        this.item?.productDetailType === "Range"
          ? parseInt(this.item.description)
          : 0;
      const res = [];
      for (let index = 1; index <= count; index++) {
        res.push("");
      }
      for (let index = 1; index <= 5 - count; index++) {
        res.push("gray");
      }
      return res;
    }
  }
};
</script>