<template>
  <div class="fixed top-0 w-full text-base lg:flex lg:gap-x-5 bg-grey-1">
    <div class="flex w-3/5 mx-auto h-25">
      <nuxt-link class="self-center mr-10" to="/">
        <img
          src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/69686208_111772470201171_9086672985988792320_n.png?stp=dst-png_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=EauUxUVJTecAX98T5MD&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_kgMlqu5_ht-5__jt80pfWar0v0oD2WcN_XZb4xqq5nA&oe=62DE5082"
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