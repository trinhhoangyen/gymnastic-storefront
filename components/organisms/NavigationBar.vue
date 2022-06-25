<template>
  <div class="fixed w-full text-base lg:flex lg:gap-x-5 top-1 bg-grey-1">
    <div class="flex w-3/5 mx-auto h-25">
      <nuxt-link class="self-center mr-10" to="/">
        <img src="~/assets/logo/home.webp" alt="home" width="50px" />
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