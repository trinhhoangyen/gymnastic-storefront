<template>
	<div class="w-full relative">
		<div v-if="showLabel" class="absolute top-0 right-0 z-10 bg__image_label">
			<p
				class="text-xs animate-pulse py-1 text-main-red text-center font-medium"
			>
				<span class="text-white uppercase">Giảm</span><br />{{
					discountPercentage
				}}%
			</p>
		</div>
		<div class="rounded-sm" @click="goToProductDetail">
			<div class="self-center h-28">
				<img
					class="h-full mx-auto"
					v-if="data.image"
					:src="`https://gymnastic-dev.azurewebsites.net/api/storages/${data.image}`"
					alt="product-image"
				/>
			</div>

			<div class="p-2">
				<p
					v-if="data.name"
					class="mb-2 text-base font-bold line-clamp-3 text-grey-3"
				>
					{{ data.name }}
				</p>
				<!-- Price -->
				<div class="items-center">
					<p
						v-if="data.pricePreDiscount && data.discountPercentage"
						class="
							flex
							text-xs
							mr-2
							text-gray-700
							line-through
							animate-pulse
							font-semibold
						"
					>
						{{ data.pricePreDiscount | formatPriceVnd }}
					</p>
					<p v-if="data.price" class="text-base font-bold text-main-red">
						{{ data.price | formatPriceVnd }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { formatPriceVnd } from "~/utils";
export default {
	name: "ProductItemVertical",
	props: {
		data: {
			type: Object,
			default: {},
		},
	},
	filters: {
		formatPriceVnd,
	},
	computed: {
		showLabel() {
			return this.data.discountPercentage;
		},
		alignment() {
			return this.cardAlignment === "horizontal" ? "flex" : "";
		},
		discountPercentage() {
			return parseFloat(this.data.discountPercentage) * 100;
		},
	},
	methods: {
		goToProductDetail() {
			this.$router.push(`/${this.data.id}`);
		},
	},
};
</script>