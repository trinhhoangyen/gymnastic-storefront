<template>
  <div class="absolute bottom-0 w-full text-lg text-white bg-red-light">
    <div class="pt-4 grid grid-cols-3 gap-3 flex container items-center w-3/5 py-4 pt-10 mx-auto pb-14">
      <div class="col">
        <p class="mb-5"><b>LIONS TNT</b></p>
        <div class="flex mb-5 text-base">
          <location-icon class="self-center w-6 h-6 mr-2" />7A/43/55 Thành Thái, Phường 14, Quận 10
        </div>
        <div class="flex mb-5 text-base">
          <phone-icon class="self-center w-6 h-6 mr-2" />033 404 2920
        </div>
        <div class="flex mb-5 text-base">
          <work-icon class="self-center w-6 h-6 mr-2" />http://trantrungnhan.com/
        </div>
      </div>
      <div>
        <p class="mb-5"><b>DỊCH VỤ KHÁCH HÀNG</b></p>
        <div class="flex mb-5 text-base">
          <post class="self-center w-6 h-6 mr-2" />Term of Use
        </div>
        <div class="flex mb-5 text-base">
          <messenger-icon class="self-center w-6 h-6 mr-2" />Contact Us
        </div>
        <div class="flex mb-5 text-base">
          <account class="self-center w-6 h-6 mr-2" />Privacy Policy
        </div>
      </div>
      <div class="social-network">
        <p class=""><b>SOCIAL NETWORK</b></p>
        <div class="flex mt-2">
          <span v-for="icon in iconList" :key="icon">
            <component :is="icon" class="self-center w-6 h-6 mr-6" />
          </span>
        </div>
        <div class="col">
          <div class="fb-page fb_iframe_widget mt-2" data-href="https://www.facebook.com/citigymvn/">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrungnhantranlions&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="clear-both text-center bg-red-bold py-7 border-t-1 border-t-grey-5">© 2022 Allrights reserved LIONS TNT
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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