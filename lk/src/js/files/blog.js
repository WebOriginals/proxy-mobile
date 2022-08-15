if(document.querySelector('.blog-aside')){
    const btnShow = document.querySelector('.blog-aside__show');
    const btnHide = document.querySelector('.blog-aside__hide');
    const bodyFilter = document.querySelector('.blog-aside');

    btnShow.addEventListener("click", function (event) {
        bodyFilter.classList.toggle('open');
    });
    btnHide.addEventListener("click", function (event) {
        bodyFilter.classList.toggle('open');
    });
}
