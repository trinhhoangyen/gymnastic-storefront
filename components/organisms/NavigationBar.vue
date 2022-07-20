<template>
  <div class="fixed top-0 left-0 z-50 w-full bg-white shadow-3xl">
    <div class="flex justify-between w-11/12 h-20 mx-auto lg:w-10/12 xl:w-9/12">
      <nuxt-link class="flex items-center self-center" to="/">
        <img :src="require('@/static/logo.png')" alt="home" width="70px" />
        <p class="mr-2 font-extrabold align-center text-red-bold">MEDIFITNESS</p>
        <input-text
          v-model="searchKey"
          placeholder="Tìm kiếm"
          type="text"
          icon="search"
          is-icon-left
        />
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
import { EMPTY } from "../../utils/constants";
export default {
  data() {
    return {
      searchKey: EMPTY,
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
};
</script>

<style>
</style>