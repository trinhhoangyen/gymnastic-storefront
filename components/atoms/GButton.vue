<template>
  <button
    :disabled="disabled"
    :class="[
      buttonWidth, width, height, rounded, background, disabled ? 'opacity-70' : 'hover:opacity-90']"
    @click="onClick"
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
  >
    <div :class="[rootClasses, align]" class="relative flex items-center w-full">
      <span>
        <slot name="icon" />
      </span>
      <span>
        <slot />
      </span>
      <span class="absolute bottom-0 right-0 my-auto top-1">
        <slot name="icon-right" />
      </span>
    </div>
  </button>
</template>

<script>
import { EMPTY, EVENT } from "~/utils/constants";

export default {
  name: "GButton",
  props: {
    typeButton: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rootClasses: {
      type: String,
      default: EMPTY
    },
    width: {
      type: String,
      default: "px-2 lg:px-6"
    },
    height: {
      type: String,
      default: "py-2"
    },
    rounded: {
      type: String,
      default: "rounded-nm"
    },
    align: {
      type: String,
      default: "justify-center"
    },
    dark: {
      type: Boolean,
      default: false
    },
    isExpanded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },

  computed: {
    background() {
      return this.typeButton === "outlined"
        ? "border bg-white hover:bg-main border-main hover:text-white text-main"
        : this.typeButton === "white"
        ? "bg-white text-main"
        : "bg-main text-white";
    },
    buttonWidth() {
      return this.isExpanded ? "w-full" : "w-auto";
    }
  },

  methods: {
    onClick() {
      this.$emit(EVENT.CLICK);
    }
  }
};
</script>