<template>
	<div class="w-full lg:w-4/5 mx-auto">
		<!-- product -->
		<h3 class="uppercase py-6 text-2xl font-bold">giảm giá đặc biệt</h3>
		<g-swiper-homepage :products="products"></g-swiper-homepage>

		<!-- category -->
		<h3 class="uppercase py-6 text-2xl font-bold">danh mục nổi bật</h3>
		<div
			v-if="productCategories.length"
			class="flex w-4/5 mx-auto justify-center py-3 bg-grey-8"
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

		<!-- category -->
		<h3 class="uppercase py-6 text-2xl font-bold">cẩm nang</h3>
	</div>
</template>

<script lang="ts">
import services from "~/services";

export default {
  layout: "homepage",
  async asyncData() {
    const products = await services.getProducts();
    const productCategories = await services.getProductCategories();
    return { products, productCategories };
  },

  computed: {},
};
</script>


<style lang="scss" scoped>
</style>
