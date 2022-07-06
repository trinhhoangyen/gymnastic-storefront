<template>
  <nuxt-link
    class="flex items-center h-full text-sm font-bold uppercase border-t-4 border-transparent cursor-pointer lg:mx-3 hover:text-red-bold text-grey-4"
    :to="item.path"
    :class="customClass"
  >
    <div v-if="item.name">{{ $t(item.name) }}</div>
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