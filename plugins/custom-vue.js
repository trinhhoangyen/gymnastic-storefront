import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

/* Configure navigation for swiper */

Swiper.use([Navigation, Pagination, Autoplay]);

Vue.use(getAwesomeSwiper(Swiper));
