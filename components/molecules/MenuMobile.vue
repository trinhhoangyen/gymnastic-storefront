<template>
  <div class="fixed top-0 z-20 w-full bg-white lg:hidden">
    <div class="flex items-center justify-between px-4 py-5 shadow-3xl">
      <div>
        <nuxt-link to="/" class="mx-auto">
          <img :src="require('@/static/logo.png')" alt="home" width="70px" />
        </nuxt-link>
      </div>
      <div class="mx-auto text-xl font-bold text-black">{{ currRoute.name }}</div>

      <div class="cursor-pointer lg:hidden">
        <!-- HamburgerIcon.vue logo -->
        <hamburger-icon @click.native.stop="showMenu" />
      </div>
    </div>

    <!-- menu -->
    <transition name="fade" mode="out-in">
      <div v-if="isShowMenuMobile" class="h-4 overflow-y-scroll menu">
        <div v-click-outside="closeMenu" class="menu-main">
          <div class="py-5">
            <nuxt-link :to="{ path: '/' }">
              <img :src="require('@/static/logo.png')" alt="home" />
            </nuxt-link>
          </div>

          <div v-for="nav in list" :key="nav.name" class="bg-white">
            <!-- NavigationItem.vue molecules -->
            <navigation-item-mobile
              :item-active="itemActive"
              :sub-item-active="subItemActive"
              :data="nav"
              @changeItemActive="changeItemActive"
              @changeSubItemActive="changeSubItemActive"
              @click.native="changeRoute(nav.path)"
              @changeRoute="changeRoute"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { EMPTY, ROUTE_NAME } from "~/utils/constants";

export default {
  props: {
    listNav: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShowMenuMobile: false,
      user: {},
      itemActive: "",
      subItemActive: ""
    };
  },
  computed: {
    currRoute() {
      if (this.$route.name === "slug")
      return ROUTE_NAME.find(e => e.path === this.$route.path) || {};
    }
  },
  watch: {
    $route() {
      this.checkRouteActive();
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
    changeItemActive(value) {
      this.itemActive = this.itemActive === value ? EMPTY : value;
    },
    changeSubItemActive(value) {
      this.subItemActive = value;
    },
    async changeRoute(value) {
      if (value) {
        if (value === "logout") {
          await this.logout();
        } else {
          this.isShowMenuMobile = false;
          await this.$router.push(value);
        }
      }
    },
    async logout() {
      try {
        this.$nuxt.$loading.start();
        await this.$auth.logout();
        // Back to login page if logout
        this.$router.push({ path: "/dang-nhap" });
      } catch {
        this.$toast
          .error("Có lỗi khi thực hiện yêu cầu này, vui lòng thử lại sau!", {
            position: "top-right"
          })
          .goAway(5000);
      } finally {
        this.$nuxt.$loading.finish();
      }
    },
    checkRouteActive() {
      this.listNav.forEach(navItem => {
        if (!navItem.items) {
          if (navItem?.path === this.$route.fullPath)
            this.itemActive = navItem.name;
        } else {
          navItem.items.forEach(subItem => {
            if (subItem?.path === this.$route.fullPath) {
              this.itemActive = navItem.name;
              this.subItemActive = subItem.name;
            }
          });
        }
      });
    }
  }
};
</script>
