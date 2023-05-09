const coworkingReviewSlider = new Swiper(".coworking-reviews__slider-review", {
  // slidesPerView: 1,
  slidesPerView: 5.45, //Слайдов показывает

  loop: true,
  allowTouchMove: false,
});

const coworkingRewiewsTextList = document.querySelectorAll(
  ".coworking-reviews__item-review"
);
const coworkingReviewsImgSlider = new Swiper(".coworking-reviews__slider", {
  slidesPerView: 5.45, //Слайдов показывает
  spaceBetween: 30, // Отступы между слайдами
  // Бесконечные слайды
  loop: true,
  // Отзыв (number)
  pagination: {
    el: ".coworking-reviews__pagination",
    type: "fraction",
    renderFraction: function (current, total) {
      return `
        Отзыв #<span class="swiper-pagination-current">${current}</span>
      `;
    },
  },
  // Стрелки
  navigation: {
    nextEl: ".coworking-reviews__slider-arrow--next",
    prevEl: ".coworking-reviews__slider-arrow--prev",
  },

  // Выключение перетаскивания мышью
  allowTouchMove: false,

  // on: {
  //   // init: function () {
  //   //   coworkingRewiewsTextList.forEach(item => {
  //   //     item.classList.remove("coworking-reviews__item-review--active");
  //   //   });
  //   //   coworkingRewiewsTextList[this.activeIndex].classList.add(
  //   //     "coworking-reviews__item-review--active"
  //   //   );
  //   //   console.log(this.activeIndex, coworkingRewiewsTextList[this.activeIndex]);
  //   // },
  //   // slideChange: function () {
  //   //   coworkingRewiewsTextList.forEach(item => {
  //   //     item.classList.remove("coworking-reviews__item-review--active");
  //   //   });
  //   //   coworkingRewiewsTextList[this.activeIndex].classList.add(
  //   //     "coworking-reviews__item-review--active"
  //   //   );
  //   //   console.log(this.activeIndex, coworkingRewiewsTextList[this.activeIndex]);
  //   // },
  // },

  on: {
    // init: function () {
    //   console.log(this.activeIndex, this);
    //   const activeIndex = this.activeIndex;
    //   const slides = this.slides;
    //   console.log(slides);
    //   slides[activeIndex].classList.remove("swiper-slide-active");
    //   slides[activeIndex + 1].classList.remove("swiper-slide-next");
    //   slides[activeIndex + 1].classList.add("swiper-slide-active1");
    //   slides[activeIndex + 2].classList.add("swiper-slide-next");
    // },
  },
});

coworkingReviewsImgSlider.controller.control = coworkingReviewSlider;
coworkingReviewSlider.controller.control = coworkingReviewsImgSlider;
