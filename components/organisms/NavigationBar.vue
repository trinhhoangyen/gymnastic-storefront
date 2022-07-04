<template>
  <div class="fixed top-0 z-50 w-full bg-white lg:flex lg:gap-x-5">
    <div class="flex self-center justify-between w-11/12 mx-auto xl:w-4/5 h-25">
      <nuxt-link class="self-center mr-10" to="/">
        <img :src="require('@/assets/logo/logo.png')" alt="home" width="70px" />
      </nuxt-link>
      <div class="self-center lg:hidden">
        <hamburger-icon />
      </div>
      <div class="hidden lg:flex">
        <navigation-item v-for="item in list" :key="item.path" :item="item" />
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "About Us",
          path: "/about"
        },
        { name: "Products", path: "/products" },
        { name: "Schedule", path: "/schedule" },
        { name: "Contests", path: "/contests" },
        { name: "Partner", path: "/", path: "/partner" },
        { name: "Achievement", path: "/achievement" }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style>
</style>