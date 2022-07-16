<template>
  <div class="absolute bottom-0 w-full text-lg text-white bg-red-light">
    <div class="container grid items-center w-3/5 grid-cols-3 gap-3 py-4 pt-4 mx-auto pb-14">
      <div class="col">
        <p class="mb-5 font-bold">LIONS TNT</p>
        <div class="flex mb-5 text-sm" v-for="(item, index) in list1" :key="index">
          <component :is="item.icon" class="self-center w-6 h-6 mr-3" />
          {{item.content}}
        </div>
      </div>
      <div>
        <p class="mb-5 font-bold">DỊCH VỤ KHÁCH HÀNG</p>
        <div class="flex mb-5 text-base" v-for="(item, index) in list" :key="index">
          <component :is="item.icon" class="self-center w-6 h-6 mr-3" />
          {{item.content}}
        </div>
      </div>
      <div class="social-network">
        <p class="font-bold">SOCIAL NETWORK</p>
        <div class="flex mt-2">
          <span v-for="icon in iconList" :key="icon">
            <component :is="icon" class="self-center w-6 h-6 mr-6" />
          </span>
        </div>
        <div class="col">
          <div
            class="mt-2 fb-page fb_iframe_widget"
            data-href="https://www.facebook.com/citigymvn/"
          >
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
      </div>
    </div>
    <div
      class="clear-both text-center bg-red-bold py-7 border-t-1 border-t-grey-5"
    >© 2022 Allrights reserved LIONS TNT</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { icon: "post", content: "Term of Use" },
        { icon: "messenger-icon", content: "Contact Us" },
        { icon: "account", content: "Privacy Policy" }
      ],
      list1: [
        {
          icon: "location-icon",
          content: "7A/43/55 Thành Thái, Phường 14, Quận 10"
        },
        { icon: "phone-icon", content: "033 404 2920" },
        { icon: "work-icon", content: "http://trantrungnhan.com/" }
      ],
      iconList: [
        "facebook-icon",
        "messenger-icon",
        "instagram-icon",
        "vnpay-icon",
        "momo-icon"
      ]
    };
  }
};
</script>

<style>
</style>