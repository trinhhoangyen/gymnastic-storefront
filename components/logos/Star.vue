<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.79727 1.38332L10.6148 5.0611L14.6814 5.65249C15.4112 5.75793 15.7034 6.65499 15.1745 7.16888L12.2328 10.005L12.9287 14.0467C13.0539 14.7775 12.2834 15.3217 11.6373 14.9828L8.00004 13.1L4.36393 15.0083C3.71671 15.3472 2.94727 14.8028 3.07227 14.0722L3.7681 10.0305L0.825599 7.16943C0.296988 6.65554 0.589043 5.7586 1.31865 5.65304L5.38532 5.06165L7.20282 1.38388C7.5306 0.719903 8.47227 0.728153 8.79727 1.38332Z"
      :fill="colorStar"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#F69F00"
    }
  },
  computed: {
    colorStar() {
      return this.color || "#F69F00";
    }
  }
};
</script>