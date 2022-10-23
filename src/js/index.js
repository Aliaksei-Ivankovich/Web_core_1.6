'use strict';

import '../scss/style.scss';

import slider from './modules/slider.js';
import menu from './modules/menu.js';
import showMore from './modules/show-more.js'; 
import navMenu from './modules/nav-menu.js';

addEventListener('DOMContentLoaded', () => {
    navMenu('nav-menu', 'nav-menu__item')

    const brands = {
        sectionSelector: 'info-content--brands', 
        btnSelector: 'content-button', 
        wrapperSelector: 'slider', 
        toggleClass: '--show-all-brands', 
        btnText: 'Показать все'
    }

    const types = {
        sectionSelector: 'info-content--types', 
        btnSelector: 'content-button', 
        wrapperSelector: 'slider', 
        toggleClass: '--show-all-types', 
        btnText: 'Показать все'
    }

    const about = {
        sectionSelector: 'about__content', 
        btnSelector: 'content-button', 
        wrapperSelector: 'about__text-wpapper', 
        toggleClass: '--show-all-text', 
        btnText: 'Читать далее'
    }

    showMore(brands);
    showMore(types);
    showMore(about);

    menu('mobile-menu', 'menu-button--burger');
    menu('modal--feedback', 'menu-button--feedback');
    menu('modal--callback', 'menu-button--callback');

    slider('.swiper.slider--brands', 1.2, 15);
    slider('.swiper.slider--types', 1.2, 15);
    slider('.swiper.slider--price', 1.1, 12);
});

