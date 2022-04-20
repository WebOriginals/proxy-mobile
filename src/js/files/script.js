// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";


const addSticky = function () {
    if (window.outerWidth >= 1201 && document.querySelector('.aside-sticky')) {
        const aside = document.querySelector('.aside');
        const form = document.querySelector('.aside-sticky');
        aside.setAttribute('data-sticky', '')
        //aside.setAttribute('data-sticky-header', '')
        aside.setAttribute('data-sticky-top', '17')
        //aside.setAttribute('data-sticky-left', '15')
        form.setAttribute('data-sticky-item', '')
    }
}
addSticky();

const userSettingsOpen = function () {
    if (document.querySelector('.header-lk-settings')) {
        const body = document.querySelector('.header-lk-settings__block-hidden');
        const name = document.querySelector('.header-lk-settings__title');
        const icon = document.querySelector('.header-lk-settings svg.user');

        name.addEventListener("click", function (event) {
            body.classList.toggle('open');
            console.log(body.classList.contains('open'))
        });
        // document.addEventListener("click", function (event) {
        //     if (body.classList.contains('open')) {
        //
        //     }
        // });
    }
}
userSettingsOpen();
