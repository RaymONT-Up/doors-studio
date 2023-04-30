const portfolioPreviewSlider = new Swiper(".portfolio-preview__slider", {
  slidesPerView: "auto",
  spaceBetween: 64,
  breakpoints: {
    300: {
      spaceBetween: 16,
    },
    601: {
      spaceBetween: 24,
    },
    1000: {
      spaceBetween: 64,
    },
  },
});
