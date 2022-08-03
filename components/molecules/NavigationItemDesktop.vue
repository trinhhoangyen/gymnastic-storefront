<template>
  <nuxt-link
    class="
      flex
      items-center
      mx-2
      text-sm
      font-bold
      uppercase
      border-t-4
      cursor-pointer
      xl:mx-3
    "
    :class="
      isActive
        ? 'text-main border-main'
        : 'text-grey-4 border-white hover:text-main'
    "
    :to="item.path"
    v-if="item.path !== '/'"
  >
    <div v-if="item.name">{{ item.name }}</div>
  </nuxt-link>
</template>

<script>
export default {
  name: "NavigationItemDesktop",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.item.path;
    },
  },
};
</script>