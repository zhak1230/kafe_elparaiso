'use strict';

// <!-- pound cake slide -->

$("document").ready(function () {

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500},

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  const swiper2 = new Swiper('.goods__slide', {
    direction: 'horizontal',
    loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    // Default parameters
slidesPerView: 1,
spaceBetween: 10,
// Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 4,
    spaceBetween: 40
  }
}

  });
});//document ready



// Make home slowly fade to transparent as the window scrolls down
const poundCake = document.querySelector('.pound-cake');
// 값 지정해주기
const poundCakeHeight = poundCake.getBoundingClientRect().height;
// 높이 알아오기
document.addEventListener('scroll', ()=>{

  poundCake.style.opacity = window.scrollY /poundCakeHeight +0.35;
  // css 값 설정 = 값(상황)에 맞게 설정
});


// let menuText = document.querySelector(".menu__tittle h2");
// window.addEventListener('scroll', function() {
//   let value = window.scrollY;
//   console.log("scrollY", value);

//   if(value < 900){
//     menuText.style.animation = "text__disappear 1s ease-out forward";
//   } else{
//     menuText.style.animation = "text__slide 1s ease-out";
//   }
// });


const menuText = document.querySelector('#menu__text');
const menuImg = document.querySelector('#Menu');
const menuImgHeight = menuImg.getBoundingClientRect().bottom;
document.addEventListener('scroll', () => {
  let windowHeight = window.scrollY;
  // console.log("scrollY", windowHeight);
  // console.log("scrollY", menuImgHeight);
  // if (windowHeight > menuImgHeight ) {
    if (windowHeight > 1100 ) {
    menuText.classList.add('text__slide');
  } else {
    menuText.classList.remove('text__slide');
  }
});