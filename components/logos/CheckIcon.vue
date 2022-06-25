<template>
  <svg
    width="15"
    height="13"
    viewBox="0 0 15 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 7.5L5.34783 11L13 2"
      :stroke="isActive ? 'white':'#4CAF50'"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'CheckIcon',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

