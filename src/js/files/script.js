// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
function showsHidesMenu(icon, body, links) {
    if (bodyLockStatus) {
        bodyLockToggle();
        icon.classList.toggle('_active');
        body.classList.toggle('_active');

        if (!body.classList.contains('_active')) {
            links.forEach((link) => {
                link.classList.remove('_active')
            })
        }
    }
}
export function menuInit() {
    let iconMenu = document.querySelector(".menu__icon");
    let bodyMenu = document.querySelector('.menu__body');
    let listLinks = document.querySelectorAll('.aside-menu__link');

    if (iconMenu) {
        document.addEventListener("click", function (event) {
            if (event.target.closest('.menu__icon')) showsHidesMenu(iconMenu, bodyMenu, listLinks);

            if (bodyMenu.classList.contains('_active') && !event.target.closest('.menu__body')) showsHidesMenu(iconMenu, bodyMenu, listLinks);
        });
    }
}
