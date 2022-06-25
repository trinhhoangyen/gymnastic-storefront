<template>
    <div class="footer">
      <div class="footer-notes">
        <div class="col" style="float:left;width:60%;">
          <div style="margin-bottom:20px;"><h4>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN DỊCH VỤ TNT</h4><br/></div>
          <div class="info-item" style="margin-bottom:20px;"> 
            <BuildingIcon/>
            Trụ sở chính: 52 Thành Thái, Phường 12, Quận 10, Thành Phố Hồ Chí Minh<br/>
          </div>
          <div class="info-item" style="margin-bottom:20px;">
            <PhoneIcon/>
            Hotline: 022222222222<br/>
          </div>
          <div class="info-item" style="margin-bottom:20px;">
            <EmailIcon/>
            Email: <br/>
          </div>
          <div class="info-item" style="margin-bottom:20px;">
            <WorkIcon/>
            Website: <br/>
          </div>
          <div>
          <div style="margin-bottom:20px;"><h4>DỊCH VỤ KHÁCH HÀNG</h4><br/></div>
          <div class="info-item" style="margin-bottom:20px;">
            <Post/> Term of Use<br/>
          </div>
          <div class="info-item" style="margin-bottom:20px;">
            <MessengerIcon/>Contact Us<br/>
          </div>
          <div class="info-item" style="margin-bottom:20px;">
            <Account/>Privacy Policy<br/>
          </div>
          </div>
        </div>
        <div class="col" style="float:left;width:40%;">
          <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/citigymvn/">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrungnhantranlions&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
      <div class="main-footer">
        © 2022 Allrights reserved LIONS TNT
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
}
</script>

<style>
.footer {
  background-color: #202020;
  color: #fff;
  font-size: 18px;
  width: 100%;
  position:fixed;
  bottom:0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.footer-notes {
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;
  padding-bottom: 60px;
  padding-top: 40px;
}
.main-footer {
  background: #1a1a1a;
  padding: 30px 0;
  border-top: 1px solid #252525;
  text-align: center;
  clear: both;
}

</style>