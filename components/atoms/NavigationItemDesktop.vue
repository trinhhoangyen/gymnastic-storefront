<template>
  <nuxt-link
    class="flex items-center mx-2 text-sm font-bold uppercase border-t-4 border-transparent cursor-pointer xl:mx-3 hover:text-red-bold text-grey-4"
    :to="item.path"
    :class="customClass"
    v-if="item.path !== '/'"
  >
    <div v-if="item.name">{{ item.name }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    itemActive: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    customClass() {
      return this.$route.path === this.item.path
        ? "text-yellow-1 border-yellow-1"
        : "";
    }
  },
  methods: {}
};
</script>