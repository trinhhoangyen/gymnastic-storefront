<template>
	<div class="w-full">
		<div class="bg__image_product-category py-3 lg:py-5 xl:py-6">
			<div class="w-4/5 mx-auto">
				<p class="text-xl mb-1.5 lg:text-2xl uppercase font-bold text-main-red">
					{{ category || "Danh sách" }}
				</p>
				<p class="uppercase text-xl lg:text-2xl font-semibold text-main">
					Sản phẩm
				</p>
				<p class="text-sm sm:line-clamp-2 hidden">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
			</div>
		</div>
		<!-- category -->
		<div class="w-full bg-grey-8">
			<div
				v-if="productCategories.length"
				class="flex w-full lg::w-4/5 mx-auto justify-center py-3"
			>
				<nuxt-link
					v-for="(item, i) in productCategories"
					:key="i"
					:to="`/san-pham?the-loai=${item.name}`"
					class="border-r cursor-pointer p-0.5 sm:p-1 md:p-1.5 lg:p-2 border-grey-2 w-1/4"
				>
					<img
						:src="require('@/static/logo.png')"
						alt="home"
						class="mx-auto"
						width="80px"
					/>
					<p class="text-white uppercase font-bold text-center text-sm">
						{{ item.name }}
					</p>
				</nuxt-link>
			</div>
		</div>

		<div v-if="products" class="w-full px-5 lg:px-0 lg:w-4/5 mx-auto py-10">
			<div class="flex flex-wrap bg-white">
				<product-item-vertical
					class="
						p-3
						cursor-pointer
						w-full
						my-2
						sm:m-3
						md:m-1.5
						lg:m-2
						xl:m-2.5
						2xl:m-3
						sm:w-45/100
						md:w-23/100
						max-w-lg
						shadow-3xl
					"
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