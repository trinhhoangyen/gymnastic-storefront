<template>
  <svg
    width="21"
    height="16"
    viewBox="0 0 21 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7071 8.78133C21.0976 8.3908 21.0976 7.75764 20.7071 7.36711L14.3431 1.00315C13.9526 0.612627 13.3195 0.612627 12.9289 1.00315C12.5384 1.39368 12.5384 2.02684 12.9289 2.41736L18.5858 8.07422L12.9289 13.7311C12.5384 14.1216 12.5384 14.7548 12.9289 15.1453C13.3195 15.5358 13.9526 15.5358 14.3431 15.1453L20.7071 8.78133ZM0 9.07422H20V7.07422H0V9.07422Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'ArrowRightIcon',
  props: {
    color: {
      type: String,
      default: '#4CAF50',
    }
  }
}
</script>
