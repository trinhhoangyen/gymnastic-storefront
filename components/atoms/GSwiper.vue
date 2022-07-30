<template>
	<div class="thumb-example">
		<!-- swiper1 -->
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

		<!-- swiper2 Thumbs -->
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
export default {
	name: "GSwiper",

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
				loopedSlides: this.listImages.length,
				spaceBetween: 10,
				mousewheel: true,
				keyboard: {
					enabled: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
			},
			swiperOptionThumbs: {
				loop: true,
				loopedSlides: this.listImages.length,
				spaceBetween: 10,
				centeredSlides: true,
				slidesPerView: "auto",
				touchRatio: 0.2,
				slideToClickedSlide: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
			},
		};
	},
	mounted() {
		this.$nextTick(() => {
			const swiperTop = this.$refs.swiperTop.$swiper;
			const swiperThumbs = this.$refs.swiperThumbs.$swiper;
			// console.log(swiperTop);
			// swiperTop.controller.control = swiperThumbs;
			// swiperThumbs.controller.control = swiperTop;
		});
	},
	methods: {
		change(value) {
			console.log(value);
		},
	},
};
</script>

<style lang="scss" scoped>
.thumb-example {
	height: 480px;
}

.swiper {
	.swiper-slide {
		background-size: cover;
		background-position: center;
	}
	.swiper-button-next,
	.swiper-button-prev {
		color: #a10035;
	}
	&.gallery-top {
		.swiper-slide {
			&.swiper-slide-active {
				margin: 0 !important;
			}
		}
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