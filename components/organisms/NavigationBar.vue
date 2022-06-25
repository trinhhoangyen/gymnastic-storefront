<template>
  <div class="lg:flex lg:gap-x-5 navbar">
    <navigation-item v-for="item in list" :key="item.key" :item="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "About Us",
          key: "about",
          path: ""
        },
        { name: "Schedule", key: "schedule", path: "" },
        { name: "Contests", key: "contests", path: "" },
        { name: "Partner", key: "about", path: "", path: "" },
        { name: "Achievement", key: "achievement" }
      ]
    };
  }
};
</script>

<style>
.navbar {
  color: #919191;
  font: 16px/24px "Ubuntu", sans-serif;
  -webkit-text-size-adjust: 100%;
  box-sizing: inherit;
  background: #202020;
  padding-bottom: 6px;
  top: -20px;
  position: fixed;
  width: 100%;
}
</style>