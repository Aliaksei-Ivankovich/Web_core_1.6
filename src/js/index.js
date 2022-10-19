'use strict';

import '../scss/style.scss';

import slider from './modules/slider.js';
import menu from './modules/menu.js';
import showMore from './modules/show-more.js';
import navMenu from './modules/nav-menu.js';

addEventListener('DOMContentLoaded', () => {
    navMenu('nav-menu', 'nav-menu__item')

    showMore('info-content--brands', 'content-button', 'slider', '--show-all-brands', 'Показать все');
    showMore('info-content--types', 'content-button', 'slider', '--show-all-types', 'Показать все');
    showMore('about__content', 'content-button', 'about__text-wpapper', '--show-all-text', 'Читать далее');

    menu('mobile-menu', 'menu-button--burger');
    menu('modal--feedback', 'menu-button--feedback');
    menu('modal--callback', 'menu-button--callback');

    slider('.swiper.slider--brands', 1.2, 15);
    slider('.swiper.slider--types', 1.2, 15);
    slider('.swiper.slider--price', 1.1, 12);
});

