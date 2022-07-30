<template>
  <div class="flex items-center">
    <div class="w-full h-0.5 bg-grey-7"></div>
    <p class="text-2xl text-center min-w-md">Bình luận</p>
    <div class="w-full h-0.5 bg-grey-7">abc</div>
  </div>
</template>

<script>
export default {
  props: {
    productComments: {
      type: Array,
      default: [],
    },
  },
  computed: {},
};
</script>