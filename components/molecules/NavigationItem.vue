<template>
  <nuxt-link class="nav-item" :to="item.path" :class="customClass">
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
      return this.$route.path === this.item.path ? "active" : "";
    },
  },
  methods: {
  }
};
</script>