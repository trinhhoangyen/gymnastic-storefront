<template>
	<div class="w-full p-5 mx-auto lg:w-9/12 lg:px-0 lg:gap-3 lg:py-10 lg:flex">
		<div class="w-full mb-3 lg:mb-0 lg:w-3/12">
			<category :categories="productCategories" />
		</div>
		<div class="w-full lg:w-9/12">
			<div v-if="products">
				<div class="flex flex-wrap bg-white justify-between">
					<product-item-horizontal
						class="p-3 cursor-pointer w-full mb-2 lg:mb-4 xl:mb-6 md:w-49/100 max-w-lg shadow-3xl"
						v-for="(item, index) in categorySelected"
						:key="index"
						:data="item"
					/>
				</div>
				<!-- <p id="scroll" class="mt-28">scroll</p> -->
				<v-pagination class="my-5" v-model="page" circle :length="6" />
			</div>
			<div v-else>
				<p>Chưa có sản phẩm nào!</p>
			</div>
		</div>
	</div>
</template>

<script>
import services from "~/services";

export default {
	data() {
		return {
			category: "",
			page: 1,
		};
	},

	async asyncData() {
		const products = await services.getProducts();
		const productCategories = await services.getProductCategories();
		return { products, productCategories };
	},

	watch: {
		"$route.query": function (value) {
			this.category = value?.["the-loai"] || "";
		},
	},

	mounted() {
		this.category = this.$route.query?.["the-loai"] || "";
	},

	computed: {
		countPage() {
			return this.products.length / 5 + (this.products.length % 5) > 0 ? 1 : 0;
		},
		categorySelected() {
			return this?.category
				? this.products?.filter((item) =>
						item?.productCategory?.name?.includes(this.category)
				  )
				: this?.products;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>