Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
    display: {
      left: ["infobar"],
      right: ["close"],
      bottom: ["infobar"],
    },
  },
  caption: (fancybox, slide) => {
    return `${slide.index + 1} / ${fancybox.carousel?.slides.length}`;
  },
});
