<template>
	<div>
		<div class="flex-col hidden p-2 mt-4 leading-10 lg:flex">
			<div class="font-bold uppercase">Thể loại</div>
			<nuxt-link
				:to="`/san-pham`"
				:class="[
					'text-base text-main p-2',
					category === '' ? 'bg-grey-6 border-l-4 border-l-main' : '',
				]"
				>Tất cả</nuxt-link
			>
			<div class="flex-col flex" v-if="categories">
				<nuxt-link
					v-for="(cate, index) in categories"
					:to="`/san-pham?the-loai=${cate.name}`"
					:key="index"
					:class="[
						'text-base font-medium text-main p-2',
						category === cate.name
							? 'bg-grey-6 border-l-4 border-l-main'
							: '',
					]"
					>{{ cate.name }}</nuxt-link
				>
			</div>
		</div>
		<div class="w-full lg:hidden">
			<v-select v-model="value" :items="items" multiple>
				<template v-slot:selection="{ item, index }">
					<span v-if="index === 0">{{ item }}</span>
					<span v-if="index === 1" class="ml-1 text-sm text-grey-2 text-caption"
						>(+{{ value.length - 1 }} others)</span
					>
				</template>
			</v-select>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			default: [],
		},
	},
	data: () => ({
		category: "",
		items: ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"],
		value: ["foo", "bar", "fizz"],
	}),

	watch: {
		"$route.query": function (value) {
			this.category = value?.["the-loai"] || "";
		},
	},

	mounted() {
		this.category = this.$route.query?.["the-loai"] || "";
	},

	computed: {
		getRoute() {
			return this.$route.path;
		},
	},
};
</script>