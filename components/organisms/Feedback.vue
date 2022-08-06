<template>
	<div class="bg-white w-full m-4 p-6 mx-auto lg:w-8/12">
		<h4 class="p-3 bg-grey-6 uppercase">đánh giá sản phẩm</h4>
		<div class="p-3">
			<div v-if="comments">
				<div v-for="(item, index) in comments" :key="index">
					<comment :item="item" />
					<div v-if="item.commentItems" class="bg-grey-6 px-3 m-3">
						<comment
							v-for="(i, key) in item.commentItems"
							:key="key"
							class="py-4 border-b"
							:item="i"
						/>
					</div>
				</div>
			</div>
			<div v-else></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Feedback",
	props: {
		comments: {
			type: Object,
			default: {},
		},
	},
};
</script>