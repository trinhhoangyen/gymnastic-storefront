<template>
  <div class="relative">
    <input
      ref="input"
      :class="customClass"
      :placeholder="placeholder"
      :value="computedValue"
      :type="newType"
      :maxlength="max"
      :disabled="isDisabled"
      v-bind="$attrs"
      @input="updateValue"
      @blur="onBlur"
      @change="onChange"
      @keypress="onKeyPress"
      @paste="onPaste"
      @focus="onFocus"
    />
    <component
      v-if="icon"
      class="absolute transform -translate-y-1/2 top-1/2"
      :class="[isIconLeft ? 'left-3' : 'right-3']"
      :is="icon"
    />
    <div v-if="isShowPasswordIcon" class="absolute transform -translate-y-1/2 top-1/2 right-4">
      <span @click="onClickPasswordVisibility">
        <component :is="eyeIcon" />
      </span>
    </div>
  </div>
</template>

<script>
import { EMPTY, EVENT, ZERO, ICON } from "~/utils/constants";

export default {
  name: "GInput",
  props: {
    value: {
      type: [String, Number],
      default: EMPTY
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: EMPTY
    },
    icon: {
      type: String,
      default: EMPTY
    },
    rounded: {
      type: String,
      default: "rounded-3xl"
    },
    max: {
      type: Number,
      default: 255
    },
    currency: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    floatNumber: {
      type: Number,
      default: 2
    },
    isIconLeft: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newValue: this.value,
      newType: this.type,
      eyeIcon: ICON.EYE,
      regrex: null
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        if (this.type === "float") {
          const regrex = value.match(this.regrex);
          if (regrex) {
            this.newValue = regrex[0];
          }
        }
        if (this.type === "number") {
          this.newValue = Number(value);
        }
        this.$emit(EVENT.INPUT, this.newValue);
      }
    },
    customClass() {
      const custom = this.isIconLeft ? "lg:pl-8 pl-8" : "lg:pr-8 pr-8";
      return `w-full leading-5 outline-none py-1.5 px-2.5 lg:py-2 lg:px-4 bg-white border border-solid border-organic-150
        ${this.rounded} ${custom}`;
    },
    isShowPasswordIcon() {
      return this.type === "password";
    }
  },
  watch: {
    value() {
      this.newValue = this.value;
    }
  },
  mounted() {
    this.regrex = new RegExp(`^\\d*\\.?[0-9]{0,${this.floatNumber}}`, "g");
  },
  methods: {
    updateValue(e) {
      const value = e.target.value;
      if (value.length <= this.max) {
        this.computedValue = value;
      }
      this.$forceUpdate();
    },
    onBlur() {
      this.$emit("blur");
    },
    onFocus() {
      this.$emit("focus");
    },
    onChange() {
      if (this.type === "float" && typeof this.newValue === "string") {
        this.computedValue = this.newValue.replace(/\.$/, "");
      }
      this.$emit("change", this.computedValue);
    },
    onPaste(e) {
      if (this.type === "price") {
        e.preventDefault();
      } else {
        this.$emit("paste", e);
      }
    },
    onKeyPress(e) {
      this.$emit("key-press", e);
      this.validateInput(e);
    },
    validateInput(event) {
      if (this.max) {
        const valueLength = this.computedValue
          ? this.computedValue.length
          : ZERO;
        if (valueLength > this.max - 1) {
          event.preventDefault();
        }
      }
      if (this.type === "number" || this.type === "price") {
        const keyCode = event.keyCode;
        if (keyCode < 48 || keyCode > 57) {
          event.preventDefault();
        }
      }
    },
    onClickPasswordVisibility() {
      if (this.eyeIcon === ICON.EYE) {
        this.eyeIcon = ICON.EYE_SLASH;
        this.newType = "text";
      } else {
        this.eyeIcon = ICON.EYE;
        this.newType = "password";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input:disabled {
  color: #828282;
  background-color: rgb(242, 242, 242);
  cursor: not-allowed;
}
</style>
