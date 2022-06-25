<template>
  <nuxt-link
    class="flex items-center h-full mx-5 text-lg border-t-4 border-transparent cursor-pointer hover:text-white text-grey-2"
    :to="item.path"
    :class="customClass"
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
      return this.$route.path === this.item.path ? "text-yellow-1 border-yellow-1" : "";
    }
  },
  methods: {}
};
</script>