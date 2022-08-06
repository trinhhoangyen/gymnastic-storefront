<template>
	<div class="flex">
		<div class="w-12 h-12 mr-2 lg:mr-4 rounded-full bg-grey-7">
			<account class="mx-auto h-full" color="black" />
		</div>
		<div class="text-base">
			<p class="text-xs mb-2" v-if="item.email">
				{{ email || "noname" }}
			</p>
			<rating
				v-if="item.rating"
				class="text-xs mb-2"
				:rate="item.rating"
				typeRate="star"
			/>
			<p v-if="item.createdDate" class="text-xs mb-2">{{ item.createdDate }}</p>
			<p v-if="item.content" class="text-sm mb-2">{{ item.content || "" }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Comment",
	props: {
		item: {
			type: Object,
			default: {},
		},
	},
	computed: {
		email() {
			const arr = this.item.email.split("@");
			return this.item.email.substring(0, 3) + "***@" + arr[1];
		},
	},
};
</script>