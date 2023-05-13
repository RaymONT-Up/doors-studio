const interiorCanvasesSlider = new Swiper(".interior-canvases__slider", {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: ".interior-canvases__slider-arrow--next",
    prevEl: ".interior-canvases__slider-arrow--prev",
  },
  pagination: {
    el: ".interior-canvases__pagination",
    type: "fraction",
    renderFraction: function (current, total) {
      return `<span class="swiper-pagination-current">${current}</span>
        <span class="swiper-pagination-separator"> из </span>
        <span class="swiper-pagination-total"> ${total} </span> фото
      `;
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1.25,
    },
    460: {
      slidesPerView: 1.7,
    },
    651: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: { spaceBetween: 30 },
  },
});
