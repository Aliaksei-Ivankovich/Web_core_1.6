'use strict';

import Swiper, { Pagination } from 'swiper';


function slider(selector, slidesPerView, spaceBetween) {
  let swiper = {
    destroyed: true
  };
  
  function onWindowResize () {
    const tablet = window.matchMedia('(min-width: 768px)');
  
    if (!tablet.matches && swiper.destroyed) {
      swiper = new Swiper(selector, {
        modules: [Pagination],
        grabCursor: true,
        slidesPerView: slidesPerView,
        spaceBetween: spaceBetween,
      
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
      });
      return;
    }
  
    if (tablet.matches && !swiper.destroyed) {
        swiper.destroy();
      return;
    }
  };
  
  onWindowResize();
  
  window.addEventListener('resize', () => {
    onWindowResize();
  });
}

export default slider;
