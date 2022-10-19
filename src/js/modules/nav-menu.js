'use strict';

function navMenu(menuSelector, itemsSelector) {

    const navMenu = document.querySelector(`.${menuSelector}`)
    const menuItems = navMenu.querySelectorAll(`.${itemsSelector}`)

    navMenu.addEventListener('click', (e) => {

        if (e.target != navMenu ) {
            menuItems.forEach((item) => {
                item.classList.remove(`${itemsSelector}--active`);
                if (e.path[1] == item) {
                    item.classList.add(`${itemsSelector}--active`);
                }
            })
        }
    })
};

export default navMenu;