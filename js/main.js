document.addEventListener("DOMContentLoaded", function() {

    // Burger-menu
    const burgerBtn = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.header__btn');
    const body = document.querySelector('body');

    function toggle(selector, className) {
        selector.classList.toggle(className);
    }

    burgerBtn.addEventListener('click', (e) => {
        e.preventDefault();

        toggle(menu, '--active');
        setTimeout(() => {
            toggle(menuBtn,  'btn--active');
        }, 300);
        toggle(body, 'lock');
    });
});