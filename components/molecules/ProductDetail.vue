<template>
	<div
		class="md:flex w-10/12 gap-3 py-0 md:py-10 mx-auto lg:gap-6 lg:w-8/12"
		v-if="product"
	>
		<div class="w-full md:w-1/2 md:mb-0 mb-10">
			<!-- GSwiper.vue Atoms component -->
			<g-swiper v-if="listImages" :list-images="listImages" />
		</div>
		<div class="pl-0 w-full md:w-1/2 lg:pl-4 sm:pl-2">
			<p v-if="product.name" class="mb-6 font-bold lg:mb-10">
				{{ product.name }}
			</p>
			<div v-if="listDescription" class="mb-5">
				<p
					v-for="(content, index) in listDescription"
					:key="index"
					class="text-sm"
				>
					{{ content }}
				</p>
			</div>
			<p v-if="product.pricePreDiscount" class="mb-5">
				{{ product.pricePreDiscount | formatPriceVnd }}
			</p>

			<g-button class="mb-10">Thêm vào giỏ hàng</g-button>

			<div class="justify-between mb-5 lg:flex">
				<div v-if="productRange" class="lg:w-49/100">
					<product-detail-line
						v-for="(item, index) in productRange"
						:key="index"
						:item="item"
					/>
				</div>
				<div v-if="productInfo" class="lg:w-49/100">
					<product-detail-line
						v-for="(item, index) in productInfo"
						:key="index"
						:item="item"
					/>
				</div>
			</div>
			<div>
				<p class="mb-2 text-xs font-bold text-gray-500">Packing</p>
				<div class="flex gap-2" v-if="product.imageDetails">
					<img
						v-for="(image, index) in product.imageDetails"
						:key="index"
						class="w-24 rounded-2xl"
						:src="`https://gymnastic-dev.azurewebsites.net/api/storages/${image}`"
						alt="product-image"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { formatPriceVnd } from "~/utils";
export default {
	props: {
		product: {
			type: Object,
			default: {},
		},
	},
	filters: {
		formatPriceVnd,
	},
	computed: {
		listImages() {
			return this.product.imageDetails.map(
				(item) => `https://gymnastic-dev.azurewebsites.net/api/storages/${item}`
			);
		},
		productRange() {
			return this.product?.productDetails?.filter(
				(i) => i.productDetailType === "Range"
			);
		},
		productInfo() {
			return this.product?.productDetails?.filter(
				(i) => i.productDetailType === "Information"
			);
		},
		listDescription() {
			return this.product?.description?.split("\r\n") || "";
		},
	},
};
</script>