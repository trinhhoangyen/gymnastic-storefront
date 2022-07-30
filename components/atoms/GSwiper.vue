<template>
	<div class="thumb-example">
		<swiper
			v-if="listImages"
			class="swiper gallery-top"
			:options="swiperOptionTop"
			ref="swiperTop"
		>
			<swiper-slide
				v-for="(item, i) in listImages"
				:key="i"
				:style="`background-image:url('https://gymnastic-dev.azurewebsites.net/api/storages/${item}')`"
			>
			</swiper-slide>
			<div class="swiper-button-next" slot="button-next"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
		</swiper>
		<swiper
			class="swiper gallery-thumbs"
			:options="swiperOptionThumbs"
			ref="swiperThumbs"
		>
			<swiper-slide
				v-for="(item, i) in listImages"
				:key="i"
				:style="`background-image:url('https://gymnastic-dev.azurewebsites.net/api/storages/${item}')`"
			>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
	name: "GSwiper",
	components: {
		Swiper,
		SwiperSlide,
	},
	props: {
		listImages: {
			type: Array,
			default: [],
		},
	},

	data() {
		return {
			swiperOptionTop: {
				loop: true,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 10,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			swiperOptionThumbs: {
				loop: true,
				loopedSlides: 5, // looped slides should be the same
				spaceBetween: 10,
				centeredSlides: true,
				slidesPerView: "auto",
				touchRatio: 0.2,
				slideToClickedSlide: true,
			},
		};
	},
	mounted() {
		// this.$nextTick(() => {
		// 	const swiperTop = this.$refs.swiperTop.$swiper;
		// 	const swiperThumbs = this.$refs.swiperThumbs.$swiper;
		// 	swiperTop.controller.control = swiperThumbs;
		// 	swiperThumbs.controller.control = swiperTop;
		// });
	},
};
</script>

<style lang="scss" scoped>
.thumb-example {
	height: 480px;
}

.swiper {
	.swiper-slide {
		background-position: center;
	}
	.swiper-button-next,
	.swiper-button-prev {
		color: #a10035;
	}
	&.gallery-top {
		height: 80%;
		width: 100%;
	}
	&.gallery-thumbs {
		height: 20%;
		box-sizing: border-box;
		padding: 5px;
	}
	&.gallery-thumbs .swiper-slide {
		width: 25%;
		height: 100%;
		opacity: 0.4;
	}
	&.gallery-thumbs .swiper-slide-active {
		opacity: 1;
	}
}
</style>