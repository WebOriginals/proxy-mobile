import {Swiper, Pagination, Lazy} from "swiper";

export function swiperbanner(){
    if (document.querySelector('.banner-swiper')) {
        new Swiper('.banner-swiper', {
            modules: [Pagination,Lazy],
            lazy: {
                loadPrevNext: true,
                elementClass: 'lazyAll'
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".banner-pagination",
                clickable: true,
            },
            //следит за изменениями , и если что-то произойдет обновится
            observer: true,
            //следит за родительскими элементами, табы например
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: false,
            //если кликнуть по любоиу слайду , он станет активным
            slideToClickedSlide: true,
            // если слайдов мало , скроется навигация, рагиниция
            watchOverflow: true,
            speed: 800,

        });
    }
}
