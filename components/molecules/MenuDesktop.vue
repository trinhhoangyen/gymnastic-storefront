<template>
	<div
		class="fixed top-0 left-0 z-50 hidden w-full bg-white lg:block shadow-3xl"
	>
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
			<div
				class="py-2.5 w-full mx-auto flex lg:w-4/5 items-center justify-between"
			>
				<div class="flex">
					<nuxt-link
						to="/"
						class="
							bg-grey-2
							text-white
							uppercase
							text-center
							py-2
							font-bold
							mr-36
							px-10
						"
					>
						trang chủ
					</nuxt-link>
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
				<div class="w-5 h-5">
					<cart />
				</div>
			</div>
		</div>
		<div class="w-full bg-main">
			<div
				class="justify-between flex w-full py-4 px-2 lg:px-0 lg:w-4/5 mx-auto"
			>
				<navigation-item-desktop
					v-for="(item, index) in listNav"
					:key="index"
					:item="item"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { EMPTY } from "~/utils/constants";
export default {
	props: {
		listNav: {
			type: Array,
			default: [],
		},
	},
	data() {
		return {
			searchKey: EMPTY,
		};
	},
};
</script>