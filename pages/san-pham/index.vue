<template>
	<div class="w-full">
		<div class="bg__image_product-category p-3 lg:p-6 xl:p-8">
			<div class="w-4/5 mx-auto">
				<p class="text-xl mb-2 lg:text-2xl uppercase font-bold text-main-red">
					{{ category || "Danh sách" }}
				</p>
				<p class="uppercase text-xl lg:text-2xl font-semibold text-main">
					Sản phẩm
				</p>
			</div>
		</div>
		<!-- category -->
		<div class="w-full bg-grey-8">
			<div
				v-if="productCategories.length"
				class="flex w-4/5 mx-auto justify-center py-3"
			>
				<nuxt-link
					v-for="(item, i) in productCategories"
					:key="i"
					:to="`/san-pham?the-loai=${item.name}`"
					class="border-r cursor-pointer border-grey-2 w-1/4"
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
			<div class="flex flex-wrap bg-white justify-between">
				<product-item-vertical
					class="
						p-3
						cursor-pointer
						w-full
						mb-2
						lg:mb-4
						xl:mb-6
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