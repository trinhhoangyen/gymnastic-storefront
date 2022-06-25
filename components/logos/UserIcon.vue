<template>
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.54923 11.771C2.3899 9.94304 4.55739 8.58334 7.16663 8.58334C9.77586 8.58334 11.9434 9.94304 12.784 11.771C12.9235 12.0744 12.861 12.3513 12.6626 12.5791C12.4514 12.8217 12.0843 13 11.6666 13H2.66663C2.24895 13 1.88183 12.8217 1.67064 12.5791C1.47229 12.3513 1.40973 12.0744 1.54923 11.771Z"
      :stroke="color"
    />
    <circle cx="7.16663" cy="3.75" r="2.75" :stroke="color" />
  </svg>
</template>

<script>
export default {
  name: 'UserIcon',
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>
