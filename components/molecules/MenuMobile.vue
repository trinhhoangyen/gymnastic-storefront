<template>
	<div class="fixed top-0 z-20 w-full lg:hidden">
		<div
			class="
				flex
				items-center
				bg-white
				justify-between
				h-16
				px-4
				py-5
				shadow-3xl
			"
		>
			<nuxt-link to="/">
				<img :src="require('@/static/logo.png')" alt="home" width="70px" />
			</nuxt-link>
			<div class="mx-auto text-xl font-bold text-black">
				{{ currRoute }}
			</div>

			<div class="cursor-pointer lg:hidden">
				<!-- HamburgerIcon.vue logo -->
				<hamburger-icon @click.native.stop="showMenu" />
			</div>

			<!-- menu -->
			<transition name="fade" mode="out-in">
				<div
					v-if="isShowMenuMobile"
					class="h-4 overflow-y-scroll bg-grey-2 menu"
				>
					<div
						v-click-outside="closeMenu"
						class="flex flex-col justify-between menu-main"
					>
						<!-- v-click-outside="closeMenu" -->
						<div>
							<div class="py-5">
								<nuxt-link :to="{ path: '/' }">
									<img
										:src="require('@/static/logo.png')"
										class="mx-auto"
										alt="home"
										width="70px"
									/>
								</nuxt-link>
							</div>

							<div v-for="(item, index) in listNav" :key="index">
								<!-- NavigationItem.vue molecules -->
								<navigation-item-mobile v-if="item.path !== '/'" :item="item" />
							</div>

							<div class="p-2">
								<g-button isExpanded type="secondary">
									Đi tới giỏ hàng
									<arrow-right-icon
										slot="icon-right"
										color="white"
										class="ml-2"
									/>
								</g-button>
							</div>
						</div>
						<div class="p-2">
							<g-button isExpanded type="primary" class="mb-2"
								>Địa chỉ</g-button
							>
							<g-button isExpanded type="outlined" @click="callTo">
								Số điện thoại
							</g-button>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import { ROUTE_NAME } from "~/utils/constants";

export default {
	props: {
		listNav: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			isShowMenuMobile: false,
		};
	},
	computed: {
		currRoute() {
			console.log(this.$route.name);
			if (this.$route.name === "slug") return "Chi tiết sản phảm";
			return ROUTE_NAME.find((e) => e.path === this.$route.path).name;
		},
	},
	mounted() {
		this.$router.beforeResolve((_to, _from, next) => {
			this.isShowMenuMobile = false;
			next();
		});
	},
	methods: {
		showMenu() {
			this.isShowMenuMobile = !this.isShowMenuMobile;
		},
		goBack() {
			this.$router.go(-1);
		},
		closeMenu() {
			this.isShowMenuMobile = false;
		},
		callTo() {
			window.location.href = `tel:02873002858`;
		},
	},
};
</script>

<style lang="scss" scoped>
.menu {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 9999;
	.menu-main {
		background-color: white;
		width: 70%;
		height: 100vh;
	}
}
</style>
