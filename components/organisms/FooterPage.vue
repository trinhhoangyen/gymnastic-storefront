<template>
  <div class="absolute bottom-0 w-full text-lg text-white bg-red-light">
    <div class="container w-full mx-auto p-7 lg:px-0 sm:w-3/5 lg:py-14 lg:grid lg:grid-cols-3">
      <div v-for="(item, index) in list" :key="index">
        <p class="mb-5 font-semibold">{{ item.headline }}</p>
        <div class="flex mb-5 text-sm" v-for="(content, index) in item.content" :key="index">
          <component :is="content.icon" class="self-center w-6 h-6 mr-3" />
          {{content.title}}
        </div>
      </div>

      <div>
        <p class="mb-5 font-semibold">SOCIAL NETWORK</p>
        <div class="flex">
          <a :href="item.href" target="_blank" :title="item.title" v-for="item in listSocial" :key="item.icon">
            <component :is="item.icon" class="self-center mr-2 cursor-pointer w-7 h-7" />
          </a>
        </div>
        <div class="mt-2 fb-page fb_iframe_widget" data-href="https://www.facebook.com/citigymvn/">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrungnhantranlions&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="130"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div class="absolute z-10 cursor-pointer top-5 right-5" @click="scrollToTop">
        <back-to-top />
      </div>
    </div>
    <div
      class="clear-both py-2 text-sm text-center bg-red-bold lg:py-4 border-t-1 border-t-grey-5"
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