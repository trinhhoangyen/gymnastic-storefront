<template>
	<div class="fixed top-0 z-50 w-full">
		<div class="bg-main-red">
			<div
				class="
					lg:w-4/5
					text-white
					py-2
					w-full
					justify-between
					font-medium
					uppercase
					flex
					mx-auto
				"
			>
				<p class="text-base">SDT</p>
				<p class="text-base">địa chỉ</p>
			</div>
		</div>

		<div class="bg-white">
			<div class="py-3 items-center w-full lg:w-4/5 flex mx-auto">
				<div
					class="
						bg-grey-2
						text-white
						uppercase
						text-center
						py-3
						font-bold
						mr-36
						px-10
					"
				>
					logo
				</div>
				<div class="max-w-md ml-2">
					<g-input
						class="flex w-full"
						v-model="searchKey"
						rounded="rounded"
						placeholder="Tìm kiếm"
						type="text"
						icon="search"
					/>
				</div>
			</div>
		</div>

		<div class="bg-main py-2">
			<div class="w-full justify-between flex lg:w-4/5 mx-auto">
				<nuxt-link
					to="/hang-moi"
					class="uppercase text-lg font-bold text-white"
				>
					hàng mới
				</nuxt-link>
				<nuxt-link
					to="/san-pham"
					class="uppercase text-lg font-bold text-white"
				>
					sản phẩm
				</nuxt-link>
				<nuxt-link
					to="/ve-chung-toi"
					class="uppercase text-lg font-bold text-white"
				>
					cẩm nang
				</nuxt-link>
				<nuxt-link
					to="/ve-chung-toi"
					class="uppercase text-lg font-bold text-white"
				>
					thương hiệu
				</nuxt-link>
				<nuxt-link
					to="/ve-chung-toi"
					class="uppercase text-lg font-bold text-white"
				>
					về chúng tôi
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import { ROUTE_NAME, EMPTY } from "~/utils/constants";
export default {
	data() {
		return {
			searchKey: EMPTY,
			listNav: ROUTE_NAME,
		};
	},
};
</script>

<style>
</style>