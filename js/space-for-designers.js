const spaceForDesignersPagination = document.querySelector(
  ".space-for-designers__pagination"
);
const spaceForDesignersSlider = new Swiper(".space-for-designers__slider", {
  slidesPerView: "auto",

  spaceBetween: 30,

  navigation: {
    nextEl: ".space-for-designers__slider-arrow--next",
    prevEl: ".space-for-designers__slider-arrow--prev",
  },
  on: {
    init: function () {
      const activeIndex = 4 + this.activeIndex;
      const totalSlides = this.slides.length;

      spaceForDesignersPagination.textContent = `${activeIndex} из ${totalSlides} фото`;
    },
    slideChange: function () {
      const activeIndex = 4 + this.activeIndex;
      const totalSlides = this.slides.length;

      spaceForDesignersPagination.textContent = `${activeIndex} из ${totalSlides} фото`;
    },
  },
});
