<template>
	<div class="bg-grey-6">
		<!-- ProductDetail.vue molecules -->
		<product-detail :product="product" />

		<div class="bg-white w-full m-4 p-6 mx-auto lg:w-8/12">
			<h4 class="p-3 bg-grey-6 uppercase">Mô tả sản phẩm</h4>
			<p class="text-base p-3">abc</p>
		</div>

		<div class="bg-white w-full m-4 p-6 mx-auto lg:w-8/12">
			<h4 class="p-3 bg-grey-6 uppercase">đánh giá sản phẩm</h4>
			<div class="p-3">
				<div v-if="comments">
					<div class="flex" v-for="(item, index) in comments" :key="index">
						<account color="black" />
						<div class="text-base">
							<p>{{ item.email }}</p>
							<p>{{ item.createdDate }}</p>
							<p>{{ item.content }}</p>
							<rating :rate="item.rating" typeRate="star" />
						</div>
					</div>
				</div>
				<div v-else></div>
			</div>
		</div>

		<!-- ListSameProducts.vue molecules -->
		<list-same-products :same-products="sameProducts" />
	</div>
</template>

<script>
import services from "~/services";

export default {
	scrollToTop: true,
	async asyncData({ params }) {
		const res = await services.getProductDetail(params.slug);
		const product = {
			...res?.data?.result,
			imageDetails: [
				res?.data?.result.image,
				...(res?.data?.result.imageDetails || []),
			],
		};
		const sameProducts = await services.getSameProducts(
			res?.data?.result.productCategory.productCategoryId
		);
		const comments = res?.data?.result.isHasComment
			? await services.getComments(res?.data?.result.id)
			: [];
		return {
			product,
			sameProducts: sameProducts?.data?.result || [],
			comments,
		};
	},
	computed: {
		categoryId() {
			return this.product.productCategory.productCategoryId;
		},
	},
};
</script>
