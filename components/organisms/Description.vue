<template>
	<div class="bg-white w-full m-4 p-6 mx-auto lg:w-8/12">
		<h4 class="p-3 bg-grey-6 uppercase">Mô tả sản phẩm</h4>
		<p class="text-base p-3" v-html="content"></p>
	</div>
</template>

<script>
export default {
	name: "Description",
	props: {
		content: {
			type: String,
			default: "",
		},
	},
};
</script>