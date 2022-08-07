<template>
	<nuxt-link
		class="uppercase text-lg font-bold"
		:class="
			isActive ? 'text-main-red' : 'text-white hover:text-main-red'
		"
		:to="item.path"
		v-if="item.path !== '/'"
	>
		<div v-if="item.name">{{ item.name }}</div>
	</nuxt-link>
</template>

<script>
export default {
	name: "NavigationItemDesktop",
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
	},
};
</script>