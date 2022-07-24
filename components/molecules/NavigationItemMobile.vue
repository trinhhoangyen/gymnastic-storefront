<template>
  <div
    class="flex items-center justify-between w-full p-4 border-l-4"
    :class="isActive ? 'text-main border-main font-bold' : 'border-white'"
    @click="changeItemActive"
  >
    <div class="flex">
      <component
        :is="item.icon"
        v-if="item.icon"
        class="mr-3"
        :color="isActive ? '#f5d42d': '#828282'"
      />
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationItem",
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
  computed: {
    isActive() {
      return this.itemActive === this.item.name;
    }
  },
  methods: {
    changeItemActive() {
      this.$emit("changeItemActive", this.item.name);
    },
    callTo() {
      window.location.href = `tel:0969763253`;
    }
  }
};
</script>
