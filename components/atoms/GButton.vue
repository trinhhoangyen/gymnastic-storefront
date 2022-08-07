<template>
	<button
		:disabled="disabled"
		class="px-3 py-2 font-semibold flex items-center justify-center"
		:class="[customClass, rounded, isExpanded ? 'w-full' : '']"
		@click="onClick"
		@mouseover="$emit('mouseover')"
		@mouseleave="$emit('mouseleave')"
	>
		<slot></slot>
		<slot name="icon-right"></slot>
	</button>
</template>

<script>
import { EVENT } from "~/utils/constants";

export default {
	name: "GButton",
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		rounded: {
			type: String,
			default: "rounded",
		},
		isExpanded: {
			type: Boolean,
			default: false,
		},
		type: {
			type: String,
			default: "primary",
		},
	},

	computed: {
		customClass() {
			return this.type === "primary"
				? "text-white bg-main hover:bg-main-hover"
				: this.type === "secondary"
				? "text-white bg-main-red"
				: this.type === "outlined"
				? "border border-solid border-main bg-white text-main hover:text-white hover:bg-main"
				: "";
		},
	},

	methods: {
		onClick() {
			this.$emit(EVENT.CLICK);
		},
	},
};
</script>