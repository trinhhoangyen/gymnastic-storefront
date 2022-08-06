<template>
	<div class="bg-grey-6">
		<!-- ProductDetail.vue molecules -->
		<product-detail :product="product" />

		<!-- Description.vue organisms -->
		<description :comments="comments" />


		<!-- Feadback.vue organisms -->
		<feedback :comments="comments" />

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
