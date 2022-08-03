<template>
  <div class="absolute bottom-0 w-full text-lg text-white h-40 bg-main-hover">
    <!-- back to top -->
    <div class="fixed z-50 cursor-pointer bottom-5 border-1 border-main-red shadow-3xl rounded-full right-5" @click="scrollToTop">
      <back-to-top />
    </div>
    
    <div class="container h-full w-full mx-auto px-3 md:px-6 lg:px-0 sm:w-3/5 lg:grid lg:grid-cols-3">
      <div v-for="(item, index) in list" :key="index">
        <p class="mb-5 font-semibold">{{ item.headline }}</p>
        <div class="flex mb-3 text-sm" v-for="(content, index) in item.content" :key="index">
          <component :is="content.icon" class="self-center w-4 h-4 mr-2" />
          <!-- {{content.title}} -->
        </div>
      </div>

      <div>
        <p class="mb-5 font-semibold">SOCIAL NETWORK</p>
        <div class="flex">
          <!-- <a :href="item.href" target="_blank" :title="item.title" v-for="item in listSocial" :key="item.icon">
            <component :is="item.icon" class="self-center mr-2 cursor-pointer w-7 h-7" />
          </a> -->
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
              title: "7A/43/55 Thành Thái, Phường 14, Quận 10"
            },
            { icon: "phone-icon", title: "033 404 2920" },
            { icon: "work-icon", title: "http://trantrungnhan.com/" }
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
      listSocial: [
        {
          icon: "facebook-icon",
          title: "Lion TNT",
          href: "https://www.facebook.com/trungnhantranlions"
        },
        {
          icon: "instagram-icon",
          title: "Lion TNT",
          href: "https://www.instagram.com/lions_tnt/"
        }
      ]
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