<template>
  <div class="fixed top-0 z-20 w-full bg-white lg:hidden">
    <div class="flex items-center justify-between h-16 px-4 py-5 shadow-3xl">
      <nuxt-link to="/">
        <img :src="require('@/static/logo.png')" class="mx-auto" alt="home" width="70px" />
      </nuxt-link>
      <div class="mx-auto text-xl font-bold text-black">{{ currRoute.name }}</div>

      <div class="cursor-pointer lg:hidden">
        <!-- HamburgerIcon.vue logo -->
        <hamburger-icon @click.native.stop="showMenu" />
      </div>

      <!-- menu -->
      <transition name="fade" mode="out-in">
        <div v-if="isShowMenuMobile" class="h-4 overflow-y-scroll menu">
          <div v-click-outside="closeMenu" class="menu-main">
            <div class="py-5">
              <nuxt-link :to="{ path: '/' }">
                <img :src="require('@/static/logo.png')" alt="home" width="70px" />
              </nuxt-link>
            </div>

            <div v-for="(item, index) in listNav" :key="index" class="bg-white">
              <!-- NavigationItem.vue molecules -->
              <navigation-item-mobile v-if="item.path !== '/'" :item="item" />
            </div>
            <g-button type="button" @click="callTo" outlined>Liên hệ 028 7300 2858</g-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ROUTE_NAME } from "~/utils/constants";

export default {
  props: {
    listNav: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShowMenuMobile: false
    };
  },
  computed: {
    currRoute() {
      return ROUTE_NAME.find(e => e.path === this.$route.path) || {};
    }
  },
  mounted() {
    this.$router.beforeResolve((_to, _from, next) => {
      this.isShowMenuMobile = false;
      next();
    });
  },
  methods: {
    showMenu() {
      this.isShowMenuMobile = !this.isShowMenuMobile;
    },
    goBack() {
      this.$router.go(-1);
    },
    closeMenu() {
      this.isShowMenuMobile = false;
    },
    callTo() {
      window.location.href = `tel:02873002858`;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  .menu-main {
    background-color: white;
    width: 50%;
    height: 100vh;
  }
}
</style>
