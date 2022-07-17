<template>
  <div class="fixed top-0 left-0 z-50 w-full bg-white shadow-3xl">
    <div class="flex justify-between w-11/12 h-20 mx-auto lg:w-4/5">
      <nuxt-link class="self-center flex items-center" to="/">
        <img :src="require('@/static/logo.png')" alt="home" width="70px" />
        <p class="align-center text-red-bold font-extrabold" >LIONS TNT</p>
      </nuxt-link>
      <div class="self-center lg:hidden">
        <hamburger-icon />
      </div>
      <div class="hidden lg:flex">
        <navigation-item v-for="item in list" :key="item.path" :item="item" />
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
          name: "Về chúng tôi",
          path: "/about"
        },
        {
          name: "Sản phẩm",
          path: "/products"
        },
        {
          name: "Hội viên",
          path: "/partner"
        },
        {
          name: "Thành tích",
          path: "/achievement"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style>
</style>