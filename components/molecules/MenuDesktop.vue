<template>
  <div class="fixed top-0 left-0 z-50 hidden w-full bg-white lg:block shadow-3xl">
    <div class="w-full h-20 px-2 mx-auto xl:w-10/12 xl:px-0">
      <div class="flex items-center justify-between w-full h-full">
        <div>
          <nuxt-link class="flex items-center" to="/">
            <img :src="require('@/static/logo.png')" alt="home" width="70px" />
            <p class="font-extrabold align-center text-main">MEDIFITNESS</p>
          </nuxt-link>
        </div>

        <div class="max-w-xs">
          <g-input
            class="flex"
            v-model="searchKey"
            placeholder="Tìm kiếm"
            type="text"
            icon="search"
            is-icon-left
          />
        </div>

        <div class="h-full">
          <div class="flex h-full">
            <navigation-item-desktop v-for="(item, index) in listNav" :key="index" :item="item" />
          </div>
        </div>
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
      default: []
    }
  },
  data() {
    return {
      searchKey: EMPTY
    };
  }
};
</script>