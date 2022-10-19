'use strict';

function menu(menuSelector, btnsSelector) {
    const menu = document.querySelector(`.${menuSelector}`);
    const menuBtns = document.querySelectorAll(`.${btnsSelector}`);

    menuBtns.forEach((btn) => {
        btn.addEventListener('click', toggleMenu)
    });

    menu.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-close') == '') {
            toggleMenu();
        }
    });

    function toggleMenu() {
        if(menu.classList.contains(`${menuSelector}--show`)) {
            menu.classList.remove(`${menuSelector}--visible`);
            setTimeout(() => {
                menu.classList.remove(`${menuSelector}--show`);
            }, 150);
        } else {
            menu.classList.add(`${menuSelector}--show`);
            setTimeout(() => {
                menu.classList.add(`${menuSelector}--visible`);
            }, 150);
            setTimeout(() => {
                menu.scrollIntoView({block: "center", behavior: "smooth"})
            }, 500);
        }
    };
};

export default menu;