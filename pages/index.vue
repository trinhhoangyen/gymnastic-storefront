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
						<h3 class="font-semibold">WELCOME</h3>
						<h4 class="font-medium">BEHIND THE SCIENCE</h4>
						<p class="text-base">
							Meditech is one of the leading companies in the production of
							high-end performance enhancing drugs to build better physiques. It
							is our endeavor at Meditech to manufacture the purest most potent
							steroid formulations and make our products available to athletes
							across the globe.
							<br /><br />
							We use only Active Pharmaceutical Ingredients (APIs) of superior
							quality (USP/BP) and have set up strict set of processes to ensure
							all our products meet the highest quality standards in the
							industry.
							<br /><br />
							The bodybuilding market has become flooded with a large number of
							unscrupulous companies selling low grade steroids. The products
							these companies promote are not standardized and therefore health
							risk. At Meditech, we place a premium on offering absolute
							effective and safe steroids which gives our customers peace of
							mind and complete satisfaction.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="bg__image_content">
			<div class="w-full mx-5 lg:w-4/5 lg:mx-auto my-10">
				<h3 class="text-white font-semibold">OUR MISSION</h3>
				<h3 class="text-main font-semibold">AND VISION</h3>
				<p class="text-grey-8 text-base">
					Reliability, credibility and excellence are the principles Meditech
					stands for. Meditech has established its reputation as an excellent
					manufacturer of performance enhancing drugs. We care for the quality
					of our products we offer to our clients. For ensuring the quality and
					effectiveness of our drugs, we have got a dedicated research and
					development centre where our professionals are always seeking to make
					our products more effective. We are enthusiastic and passionate about
					providing quality products and services that improve performance and
					deliver outstanding results to our customers.
				</p>
			</div>
			<div class="w-full mx-5 lg:w-4/5 lg:mx-auto my-10">
				<h3 class="text-white font-semibold">PRODUCT</h3>
				<h3 class="text-main font-semibold">PORTFOLIO</h3>
				<p class="text-grey-8 text-base">
					At Meditech we are offering the most comprehensive variety of
					anabolic/androgenic steroids to date. Our product diversity reaches
					from anabolic/ androgenic hormones to anti-estrogens over to peptides
					and proteins in different formulations such as tablets, capsules, gels
					and injections.
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
	width: auto;
	background: url("https://www.meditechpharmaceutical.net/public/images/about-bg.jpg")
		fixed center top no-repeat #aeaeac;

	@media (max-width: 768px) {
		background-size: 200% !important;
	}
}
.bg__image_content {
	background: url("https://www.meditechpharmaceutical.net/public/images/bg-sec2-about.jpg")
		center no-repeat;
	overflow: hidden;
}
</style>
