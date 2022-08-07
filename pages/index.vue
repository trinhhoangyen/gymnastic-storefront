<template>
	<div class="w-full lg:w-4/5 mx-auto">
		<!-- product -->
		<h3 class="uppercase py-6 mt-4 text-2xl font-bold">giảm giá đặc biệt</h3>
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

		<!-- product -->
		<div class="w-11/12 mt-6 mx-auto" v-for="(item, index) in list" :key="index">
			<div class="my-4 flex">
				<p class="uppercase py-2 text-xl h-12 bg-grey-7 px-2 font-bold">
					{{ item }}
				</p>
				<div class="triangle-right"></div>
			</div>
			<div class="w-11/12 mx-auto">
				<g-swiper-homepage
					:products="products"
					:show-discount="false"
				></g-swiper-homepage>
			</div>
		</div>

		<!-- cam nang -->
		<h3 class="uppercase py-6 text-2xl font-bold">cẩm nang</h3>
		<div class="mb-16 flex justify-around">
			<div v-for="(item, index) in posts" :key="index" class="w-1/4 border border-grey-6">
				<img :src="item.image" alt="" class="h-44" />
				<div class="p-2">
					<p class="font-semibold mb-2 text-grey-5 text-lg">{{ item.title }}</p>
					<p class="line-clamp-2 mb-2 text-xs">{{ item.content }}</p>
					<p class="uppercase underline font-semibold text-xs text-center">Xem thêm</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import services from "~/services";

export default {
  async asyncData() {
    const products = await services.getProducts();
    const productCategories = await services.getProductCategories();
    return { products, productCategories };
  },

  data() {
    return {
      list: ["orals", "sarm", "injection"],
      posts: [
        {
          image:
            "https://www.meditechpharmaceutical.net/public/images/bg-sec2-product.jpg",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          image:
            "https://www.meditechpharmaceutical.net/public/images/bg-sec2-product.jpg",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          image:
            "https://www.meditechpharmaceutical.net/public/images/bg-sec2-product.jpg",
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    };
  },

  computed: {},
};
</script>


<style lang="scss" scoped>
.triangle-right {
	width: 0;
	height: 0;
	border-top: 24px solid transparent;
	border-left: 30px solid #dedede;
	border-bottom: 24px solid transparent;
}
</style>
