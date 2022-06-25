<template>
  <svg
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 1L2 8L9 15" :stroke="color" stroke-width="2" />
  </svg>
</template>

<script>
export default {
  name: "ChervonLeftIcon",
  props: {
    color: {
      type:String,
      default: '#4CAF50'
    }
  }
}
</script>
