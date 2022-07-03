<template>
  <div class="fixed top-0 z-50 w-full bg-white lg:flex lg:gap-x-5">
    <div class="flex w-3/5 mx-auto h-25">
      <nuxt-link class="self-center mr-10" to="/">
        <img
          :src="require('@/assets/logo/logo.png')"
          alt="home"
          width="70px"
        />
      </nuxt-link>
      <navigation-item v-for="item in list" :key="item.path" :item="item" />
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
  methods: {}
};
</script>

<style>
</style>