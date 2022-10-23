'use strict';


function showMore ({sectionSelector, btnSelector, wrapperSelector, toggleClass, btnText}) {

const section = document.querySelector(`.${sectionSelector}`);
const btn = section.querySelector(`.${btnSelector}`);
const wrapper = section.querySelector(`.${wrapperSelector}`);

    btn.addEventListener('click', (e) => {
        wrapper.classList.toggle(wrapperSelector + toggleClass);
        e.currentTarget.children[1].textContent = wrapper.classList.contains(wrapperSelector + toggleClass) ? 'Скрыть' : btnText;
        e.currentTarget.children[0].classList.toggle(`${btnSelector}__img--show-all`);
      })

};

export default showMore;