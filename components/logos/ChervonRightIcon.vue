<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.14453 1L8.14453 8L1.14453 15" :stroke="color" stroke-width="2" />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#4CAF50',
    },
    width: {
      type: Number,
      default: 10,
    },
    height: {
      type: Number,
      default: 16,
    },
  },
  computed: {
    viewBox() {
      return '0 0 ' + this.width + ' ' + this.height
    },
  },
}
</script>

