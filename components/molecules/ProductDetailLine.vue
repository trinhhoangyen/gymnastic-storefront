<template>
	<div v-if="item" class="grid grid-cols-4 gap-1 mb-1">
		<p class="col-span-2 px-2 py-1 font-semibold border" :class="font">
			{{ item.name }}
		</p>
		<div class="col-span-2 px-2 py-1 border">
			<p v-if="item.productDetailType === 'Information'" :class="font">
				{{ item.description }}
			</p>
			<rating v-else :rate="rate" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			Ratingtype: Object,
			default: {},
		},
		font: {
			type: String,
			default: "text-sm",
		},
	},
	computed: {
		rate() {
			return parseInt(this.item.description);
		},
	},
};
</script>