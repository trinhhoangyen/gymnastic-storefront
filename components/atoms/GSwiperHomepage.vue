<template>
	<div class="thumb-example">
		<!-- swiper1 -->
		<swiper
			v-if="products"
			class="swiper gallery-top"
			:options="swiperOptionTop"
			ref="swiperTop"
		>
			<swiper-slide v-for="(product, i) in products" :key="i">
				<product-item-vertical :data="product" :show-discount="showDiscount" />
				<!-- <div class="rounded bg-grey-6 p-2 h-full">
					<div class="flex items-center">
						<img
							:src="`https://gymnastic-dev.azurewebsites.net/api/storages/${product.image}`"
							alt=""
							class="w-1/3"
						/>
						<div class="ml-2">
							<p
								class="
									text-sm
									line-clamp-2
									mb-2
									uppercase
									font-bold
									text-grey-8
								"
							>
								{{ product.name }}
							</p>
							<p class="text-xs mb-2 line-clamp-2">
								{{ product.description }}
							</p>

							<div v-if="productRange(product.productDetails)">
								<div
									v-for="(item, index) in productRange(product.productDetails)"
									:key="index"
								>
									<product-detail-line
										v-if="index < 3"
										font="text-xs"
										:item="item"
									/>
								</div>
							</div>
						</div>
					</div>
				</div> -->
			</swiper-slide>
			<div class="swiper-button-next" slot="button-next"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: "GSwiperHomepage",
	props: {
		products: {
			type: Array,
			default: [],
		},
		showDiscount: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			swiperOptionTop: {
				loop: true,
				// loopedSlides: this.listImages.length,
				spaceBetween: 10,
				mousewheel: true,
				keyboard: {
					enabled: true,
				},
				pagination: {
					el: ".swiper-pagination",
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				// autoplay: {
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// },
			},
		};
	},

	methods: {
		productRange(value) {
			return value.filter((i) => i.productDetailType === "Range");
		},
		star(value) {
			const count =
				value?.productDetailType === "Range" ? parseInt(value.description) : 0;
			const res = [];
			for (let index = 1; index <= count; index++) {
				res.push("main");
			}
			for (let index = 1; index <= 5 - count; index++) {
				res.push("grey-8");
			}
			return res;
		},
		listDescription(value) {
			return value.split("\r\n") || "";
		},
	},
};
</script>

<style lang="scss" scoped>
.thumb-example {
	height: 300px;
}
.swiper {
	height: 100%;
	.swiper-slide {
		width: 400px !important;
		height: 200px !important;
		margin: 5px 20px;
	}
	.swiper-button-next,
	.swiper-button-prev {
		color: #f69f00;
	}
}
</style>