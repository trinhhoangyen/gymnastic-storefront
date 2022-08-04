<template>
	<div class="w-full">
		<div class="bg__image_about">
			<div class="w-full mx-5 lg:w-4/5 lg:mx-auto my-10">
				<img :src="require('@/static/logo.png')" alt="home" width="150px" />
				<div class="">
					<p
						class="
							text-center
							uppercase
							mb-40
							mt-20
							text-5xl
							drop-shadow-3xl
							text-white
							font-medium
						"
					>
						Về chúng tôi
					</p>
					<div class="border-t-4 border-main py-5">
						<h3 class="font-semibold uppercase">chào mừng</h3>
						<h4 class="font-medium uppercase">Lorem Ipsum</h4>
						<p class="text-base">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
							<br /><br />
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="bg__image_content">
			<div class="w-full mx-5 lg:w-4/5 lg:mx-auto my-10">
				<h3 class="text-white uppercase font-semibold">Lorem Ipsum</h3>
				<h3 class="text-main uppercase font-semibold">Lorem Ipsum</h3>
				<p class="text-grey-8 text-base">
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
			<div class="w-full mx-5 lg:w-4/5 lg:mx-auto my-10">
				<h3 class="text-white uppercase font-semibold">Lorem Ipsum</h3>
				<h3 class="text-main uppercase font-semibold">Lorem Ipsum</h3>
				<p class="text-grey-8 text-base">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s,...
				</p>
			</div>
		</div>
		<div
			v-if="productCategories.length"
			class="flex justify-center p-3 bg-grey-8"
		>
			<nuxt-link
				v-for="(item, i) in productCategories"
				:key="i"
				:to="`/san-pham?the-loai=${item.name}`"
				class="border-r cursor-pointer border-grey-2 w-1/6 px-1"
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
</template>

<script lang="ts">
import services from "~/services";

export default {
  async asyncData() {
    const productCategories = await services.getProductCategories();
    return { productCategories };
  },

  computed: {},
};
</script>


<style lang="scss" scoped>
.bg__image_about {
	overflow: hidden;
	width: 100%;
	background-size: 100% !important;
	background: url("https://www.meditechpharmaceutical.net/public/images/about-bg.jpg")
		fixed center top no-repeat #aeaeac;

	@media (max-width: 768px) {
		background-size: 200% !important;
	}
}
.bg__image_content {
	width: 100%;
	background-size: 100% !important;
	background: url("https://www.meditechpharmaceutical.net/public/images/bg-sec2-about.jpg")
		center no-repeat;
	overflow: hidden;
}
</style>
