import {Pagination, Swiper} from "swiper";

export function typeProxy() {
    if (document.querySelector('.slider-type-proxy__swiper')) {
        new Swiper('.slider-type-proxy__swiper', {
            modules: [Pagination],

            //следит за изменениями , и если что-то произойдет обновится
            observer: true,
            //следит за родительскими элементами, табы например
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: false,
            //если кликнуть по любоиу слайду , он станет активным
            //slideToClickedSlide: true,
            // если слайдов мало , скроется навигация, рагиниция
            watchOverflow: true,
            speed: 800,
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },

                640: {
                    slidesPerView: 2,
                },

                800: {
                    slidesPerView: 2.7,
                },

                900: {
                    slidesPerView: 3,
                },

                1800: {
                    slidesPerView: 4,
                },

                2200: {
                    slidesPerView: 5,
                },

                2500: {
                    slidesPerView: 6,
                },

            },
            pagination: {
                el: ".slider-type-proxy-pagination",
                clickable: true,
            },
        });
    }
}
