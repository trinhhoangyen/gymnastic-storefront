<template>
  <div class="fixed top-0 left-0 z-50 w-full bg-white h-25">
    <div class="flex justify-between w-11/12 mx-auto xl:w-4/5">
      <nuxt-link class="self-center" to="/">
        <img :src="require('@/assets/logo/logo.png')" alt="home" width="70px" />
      </nuxt-link>
      <div class="self-center lg:hidden">
        <hamburger-icon />
      </div>
      <div class="hidden lg:flex">
        <navigation-item v-for="item in list" :key="item.path" :item="item" />
        <nuxt-link
          class="flex items-center h-full font-bold uppercase border-t-4 border-transparent cursor-pointer lg:ml-5 text-l hover:text-red-bold text-grey-4"
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >{{ locale.name }}</nuxt-link>
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
  computed: {
  },
  methods: {}
};
</script>

<style>
</style>