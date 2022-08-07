<template>
  <div class="absolute bottom-0 w-full text-lg text-white lg:h-40 bg-main-hover">
    <!-- back to top -->
    <div class="fixed z-50 cursor-pointer bottom-5 border-1 border-main-red shadow-3xl rounded-full right-5" @click="scrollToTop">
      <back-to-top />
    </div>
    
    <div class="container h-full w-full mx-auto px-5 md:px-8 lg:px-0 sm:w-4/5 lg:w-3/5 lg:flex lg:justify-around">
      <div v-for="(item, index) in list" :key="index" class="self-center">
        <p class="mb-3 font-semibold">{{ item.headline }}</p>
        <div class="flex mb-3 text-sm" v-for="(content, index) in item.content" :key="index">
          <component :is="content.icon" class="self-center w-4 h-4 mr-2" />
          {{content.title}}
        </div>
      </div>
    </div>
    <div
      class="clear-both text-sm flex items-center justify-center bg-main h-12 border-t border-t-grey-7"
    >© 2022 Allrights reserved LIONS TNT</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          headline: "LIONS TNT",
          content: [
            {
              icon: "location-icon",
              title: "Địa chỉ"
            },
            { icon: "phone-icon", title: "Số điện thoại" },
            { icon: "work-icon", title: "Trang web" }
          ]
        },
        {
          headline: "DỊCH VỤ KHÁCH HÀNG",
          content: [
            { icon: "post", title: "Term of Use" },
            { icon: "messenger-icon", title: "Contact Us" },
            { icon: "account", title: "Privacy Policy" }
          ]
        }
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style>
</style>