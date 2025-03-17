import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const howSwiper = new Swiper(".how-swiper", {
	modules: [Pagination],

	pagination: {
		el: ".how__swiper-pagination",
		clickable: true,
	},
});
