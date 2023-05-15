const spaceForDesignersSlider = new Swiper(".space-for-designers__slider", {
  // Колво слайдов в контейнере
  slidesPerView: 5,
  // Всего на экране 4 слайда, но т.к один слайд занимает размер двух слайдов, то slidesPerView = 5, и с помощью swiper-slide-next для слайда по дизайну задается размер в процентах, который равен размеру ~ 2 слайдов.
  //

  // Отступы между слайдами
  spaceBetween: 30,

  // Стрелки для навигации
  navigation: {
    nextEl: ".space-for-designers__slider-arrow--next",
    prevEl: ".space-for-designers__slider-arrow--prev",
  },

  // Бесконечные слайды
  loop: true,

  // Пагинация
  pagination: {
    el: ".space-for-designers__pagination",
    type: "fraction",
    renderFraction: function (current, total) {
      return `
         <span class="swiper-pagination-current">${current}</span> из
         <span class="swiper-pagination-total">${total}</span> фото
      `;
    },
  },

  // Свойства для адаптива mobile first
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1.15,
      // Центрирование активного слайда
      centeredSlides: true,
    },
    601: {
      spaceBetween: 10,
      slidesPerView: 5.5,
    },
    700: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    800: {
      spaceBetween: 30,
      slidesPerView: 5,
    },
  },
});
