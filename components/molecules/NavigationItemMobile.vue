<template>
	<nuxt-link
		class="flex items-center justify-between w-full p-4 border-l-4"
		:class="isActive ? 'text-main border-main font-bold' : 'border-white'"
		:to="item.path"
	>
		<div class="flex">
			<component :is="item.icon" v-if="item.icon" class="mr-3" :color="color" />
			{{ item.name }}
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: "NavigationItemMobile",
	props: {
		item: {
			type: Object,
			default: () => ({}),
		},
	},
	computed: {
		isActive() {
			return this.$route.path === this.item.path;
		},
		color() {
			return this.isActive ? "#f69f00" : "#828282";
		},
	},
};
</script>
