<template>
	<button
		:disabled="disabled"
		:class="[customClass, rounded]"
		@click="onClick"
		@mouseover="$emit('mouseover')"
		@mouseleave="$emit('mouseleave')"
	>
		<div class="relative flex items-center w-full">
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
			default: "rounded-nm",
		},
		isExpanded: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {};
	},

	computed: {
		customClass() {
			return "shadow-3xl" + this.outlined
				? "border hover:bg-main border-main hover:text-white text-main"
				: // : this.typeButton === "white"
				  // ? "bg-white hover:bg-main hover:text-white text-main"
				  "bg-main text-white" +
						(this.isExpanded ? "w-full" : "") +
						(this.disabled ? "opacity-70" : "hover:opacity-90");
		},
	},

	methods: {
		onClick() {
			this.$emit(EVENT.CLICK);
		},
	},
};
</script>