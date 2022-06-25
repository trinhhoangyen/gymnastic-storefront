<template>
  <div>{{item.name }}</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
    }
  }
};
</script>