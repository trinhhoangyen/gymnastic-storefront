<template>
  <div class="w-4/5 h-full pt-5 mx-auto lg:pt-10 lg:w-3/5 text-grey-2 mt-24">
    <div class="flex justify-start">
      <div class="border-solid border-4 border-red-light p-5 text-right">
        <h1 class="text-red-light ">ABOUT <br> US</h1>
      </div>
      <div class="m-5 text-justify text-s pr-64">
        <p class="mb-5">

          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
          click me
          to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your
          page. I’m a great place for you to tell a story and let your users know a little more about you.

          ​<br>
          ​<br>

          This is a great space to write long text about your company and your services. You can use this space to go
          into a
          little more detail about your company. Talk about your team and what services you provide. Tell your visitors
          the
          story of how you came up with the idea for your business and what makes you different from your competitors.
          Make
          your company stand out and show your visitors who you are.

          ​<br>
          ​<br>

          At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks
          to
          the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wix
          ellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like
          to
          benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro
          designers.
          Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To
          keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!
        </p>
      </div>
    </div>

    <div class="mt-32">
      <svg class="m-auto animate-bounce w-6 h-6 text-gray-900" fill="none" stroke-linecap="round"
        stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>

    <div class="mt-40">
      <div class="grid grid-cols-2 gap-2 content-center">
        <div class="border-solid border-4 border-red-light border-r-0 content-center m-auto p-8">
          <div class="content-center title text-grey-3 pt-10">
            <h2 class="text-red-light">
              THE<br>
              INNOVATOR
            </h2>
          </div>
          <div class="content pt-8 text-justify">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
              click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you
              like on your page. I’m a great place for you to tell a story and let your users know a little more about
              you.

              ​<br />

              This is a great space to write a long text about your company and your services. You can use this space to
              go into a little more detail about your company. Talk about your team and what services you provide. Tell
              your visitors the story of how you came up with the idea for your business and what makes you different
              from your competitors. Make your company stand out and show your visitors who you are.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/154378409_471909514187463_888407420001458424_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ihuaftTl-dIAX-h-5Ha&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-MSn1IATDo14b20uEQultdAd1MvUwWCp1e4Y5Wgoq5oA&oe=62E8DCBD" />
        </div>
      </div>
    </div>

    <!-- <div class="h-0.5 my-5 bg-grey-2 mt-32"></div> -->

    <div
      class="drop-shadow-lg border-solid border-4 border-white rounded-2xl grid grid-cols-2 gap-2 content-center bg-white mt-40">
      <div class="p-8 mr-32">
        <h2 class="text-red-light">
          Subscribe & Get 20% off
        </h2>
        <p>
          Join our newsletter and discover new destinations to inspire the traveler within. Plus, get 20% off at our
          online shop. Every week you'll receive expert advice, tips, exclusive offers, and much more.
        </p>
      </div>
      <div class="m-auto mr-8">
        <div>
          <input class="border-solid border-2 border-red-light rounded-full w-3/5 p-2" type="text" placeholder="Email address" />
          <button class="ml-8 bg-red-light hover:bg-red-bold text-white font-bold p-3.5 rounded-full">
            Sign Up
          </button>
        </div>
        <div>
          <p class="text-base">
            Subscribe to Lonely Planet newsletters and promotions. Read our <a href="">Privacy Policy.</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      list: {}
    };
  }
};
</script>

<style>
  .frame-about-us {
    height: 29em;
  }

  .frame-innovator {
    height: 40em;
  }

</style>