<template>
	<div v-if="typeRate === 'star'" class="flex gap-x-1">
		<star v-for="(color, index) in listRate" :color="color" :key="index" />
	</div>
	<div v-else class="flex gap-x-1">
		<div
			v-for="(color, index) in listRate"
			:key="index"
			class="w-4 h-4 rounded-full"
			:class="`bg-${color}`"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		rate: {
			type: Number,
			default: 0,
		},
		typeRate: {
			type: String,
			default: "circle",
		},
	},
	computed: {
		listRate() {
			const res = [];
			for (let index = 1; index <= this.rate; index++) {
				res.push(this.typeRate === "circle" ? "main" : "#f69f00");
			}
			for (let index = 1; index <= 5 - this.rate; index++) {
				res.push(this.typeRate === "circle" ? "grey-8" : "#666");
			}
			return res;
		},
	},
};
</script>