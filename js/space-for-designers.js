const spaceForDesignersPagination = document.querySelector(
  ".space-for-designers__pagination"
);
const sliderItem = document.querySelector(".space-for-designers__item");

const spaceForDesignersSlider = new Swiper(".space-for-designers__slider", {
  slidesPerView: 5,

  spaceBetween: 30,
  navigation: {
    nextEl: ".space-for-designers__slider-arrow--next",
    prevEl: ".space-for-designers__slider-arrow--prev",
  },
  slidesOffsetAfter: 1,

  draggable: false,
  on: {
    init: function () {
      if (window.innerWidth > 600) {
        const activeIndex = 4 + this.activeIndex;
        const totalSlides = this.slides.length;
        spaceForDesignersPagination.textContent = `${activeIndex} из ${totalSlides} фото`;

        // Получаю ширину и маргин элемента дабы задать отступ в слайдере(без этого последний слайд не будет видно)
        // После эо значение записывается в свойство объекта swiper в виде offset
        const sliderItemWidth = parseFloat(
          sliderItem.style.cssText.split(";")[0].split(" ")[1]
        );
        const sliderItemMargin = parseFloat(
          sliderItem.style.cssText.split(";")[0].split(" ")[1]
        );
        const offset = (sliderItemWidth + sliderItemMargin) * 2;
        this.params.slidesOffsetAfter = offset;
        this.update();
      } else {
        const activeIndex = 1 + this.activeIndex;
        const totalSlides = this.slides.length;
        spaceForDesignersPagination.textContent = `${activeIndex} из ${totalSlides} фото`;
      }
    },
    slideChange: function () {
      if (window.innerWidth > 600) {
        const activeIndex = 4 + this.activeIndex;
        const totalSlides = this.slides.length;
        spaceForDesignersPagination.textContent = `${activeIndex} из ${totalSlides} фото`;

        // Запрет слайда когда мы подходим к последнему с конца -3 слайду
        if (activeIndex === totalSlides + 1) {
          this.slidePrev();
          return;
        }
      } else {
        const activeIndex = 1 + this.activeIndex;
        const totalSlides = this.slides.length;

        spaceForDesignersPagination.textContent = `${activeIndex} из ${totalSlides} фото`;
      }
    },
  },

  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1.15,
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
    1000: {},
  },
});
