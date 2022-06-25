<template>
  <div class="lg:flex lg:gap-x-5 navbar">
    <div class="container">
      <account />
      <nuxt-link to="/">
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
.navbar {
  background: #202020;
  top: 0;
  position: fixed;
  width: 100%;
  font-size: 25px;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  align-items: center;
}
.nav-item {
  height: 100%;
  color: #919191;
  list-style: none;
  float: left;
  position: relative;
  margin-right: 33px;
  z-index: 150;
  cursor: pointer;
  text-decoration: none;
  border-top: 5px solid transparent;
}
.nav-item.active {
  color: #f5d42d;
  border-top-color: #f5d42d;
}
</style>