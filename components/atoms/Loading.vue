<template>
  <div
    v-if="isShowLoading"
    class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center"
  >
  <p>vnvnbvmnbmn</p>
    <div class="loading-background"></div>
    <div class="ring__loading">
      <span></span>
      <div class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse">
        <svg
          width="60px"
          height="60px"
          viewBox="0 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>Group</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-36.000000, -57.000000)">
              <g id="Group-4">
                <g id="Group" transform="translate(36.000000, 57.000000)">
                  <circle id="Oval" fill="#4CAF50" cx="60" cy="60" r="60" />
                  <path
                    d="M59.7137771,55.6330361 L58.8,56.4217818 L57.8821253,55.6330361 C54.3328841,52.5671884 48.6261947,52.5671884 45.0769535,55.6330361 C43.3665483,57.072713 42.4,59.0597478 42.4,61.1363301 C42.4,63.2129124 43.3665483,65.1999472 45.0769535,66.6396241 L58.8,78.4313725 L72.5230465,66.6396241 C74.2334517,65.1999472 75.2,63.2129124 75.2,61.1363301 C75.2,59.0597478 74.2334517,57.072713 72.5230465,55.6330361 C68.9724076,52.5667657 63.264416,52.5667657 59.7137771,55.6330361 L59.7137771,55.6330361 Z"
                    id="Path"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M97.2521414,55.4888591 L61.9714911,23.0185975 C61.2368796,22.3413531 60.2397819,21.9607843 59.2,21.9607843 C58.1602181,21.9607843 57.1631204,22.3413531 56.4285089,23.0185975 L21.1478586,55.4888591 C20.0270789,56.5206711 19.6918579,58.0721809 20.2984653,59.4201223 C20.9050726,60.7680637 22.3340885,61.6470739 23.9193497,61.6473854 L27.8394219,61.6473854 L27.8394219,86.9020334 C27.8394219,90.8814443 31.3557268,94.1176471 35.6795665,94.1176471 L82.7204335,94.1176471 C87.0442732,94.1176471 90.5605781,90.8814443 90.5605781,86.9020334 L90.5605781,61.6473854 L94.4806503,61.6473854 C96.0659115,61.6470739 97.4949274,60.7680637 98.1015347,59.4201223 C98.7081421,58.0721809 98.3729211,56.5206711 97.2521414,55.4888591 Z M82.7243536,86.9020334 L35.6795665,86.9020334 L35.6795665,52.3212047 L59.2,30.6743636 L82.7204335,52.3212047 L82.7204335,68.8629991 L82.7243536,86.9020334 Z"
                    id="Shape"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      isShowLoading: false
    };
  },
  watch: {
    isLoading(value) {
      this.isShowLoading = value;
    }
  },
  methods: {
    start() {
      this.isShowLoading = true;
    },
    finish() {
      this.isShowLoading = false;
    }
  }
};
</script>

<style style="scss" scoped>
.loading-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
}

.ring__loading {
  position: relative;
  z-index: 40;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 110px;
  height: 110px;
  background: transparent;
  border: 4px solid #828282;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-size: 20px;
  color: #828282;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #828282;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.ring__loading:before {
  content: "";
  position: absolute;
  top: -4px;
  left: -3px;
  width: 108%;
  height: 108%;
  border: 2px solid transparent;
  border-top: 4px solid #4caf50;
  border-right: 4px solid #4caf50;
  border-radius: 50%;
  animation: animateC 1.5s linear infinite;
}
span {
  display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 1.5s linear infinite;
}
span:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #4caf50;
  top: -6px;
  right: -8px;
  box-shadow: 0 0 20px #4caf50;
}
@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
</style>
