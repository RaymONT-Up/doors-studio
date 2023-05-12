Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    type: false,
  },

  Toolbar: {
    items: {
      btnCloseCustom: {
        tpl: `<button data-fancybox-close class="gallery__close-btn  f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>`,
      },
    },
    display: {
      left: [""],
      right: ["btnCloseCustom"],
    },
  },

  caption: (fancybox, slide) => {
    const caption = slide.caption || "";

    return `${slide.index + 1} / ${
      fancybox.carousel?.slides.length
    } <br /> ${caption}`;
  },
});
