const filter = document.querySelector(".catalog-filter");
const filterBtnOpen = document.querySelector(".js-filter-btn-open");
const filterBg = document.querySelector(".catalog-filter__bg");
const filterBtnClose = document.querySelector(".js-filter-btn-close");

const catalogClose = () => {
  filter.classList.remove("catalog-filter--open");
  document.body.classList.remove("body-lock");
};
const catalogOpen = () => {
  filter.classList.add("catalog-filter--open");
  document.body.classList.add("body-lock");
};

// Open events
filterBtnOpen.addEventListener("click", catalogOpen);

// Close events
filterBtnClose.addEventListener("click", catalogClose);
filterBg.addEventListener("click", catalogClose);
window.addEventListener("keydown", e => {
  if (e.key === "Escape") catalogClose();
});

const catalogAccordion = () => {
  // const accordions = document.querySelectorAll(".catalog-filter__accordion");
  const accordionBtns = document.querySelectorAll(
    ".catalog-filter__accordion-btn"
  );
  // const initOpen = document
  //   .querySelector(".services__accordion--open")
  //   .querySelector(".services__accordion-content");

  // initOpen.style.maxHeight = `${initOpen.scrollHeight}px`;

  accordionBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const parent = e.target.parentElement;
      const content = e.target.nextElementSibling;
      console.log("click");
      if (parent.classList.contains("catalog-filter__accordion--open")) {
        parent.classList.remove("catalog-filter__accordion--open");
        content.style.maxHeight = 0;
        return;
      }
      parent.classList.add("catalog-filter__accordion--open");
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  });

  // accordions.forEach(el => {
  //   el.addEventListener("click", e => {
  //     const self = e.currentTarget;
  //     const btn = self.querySelector(".catalog-filter__accordion-btn");
  //     const content = self.querySelector(".catalog-filter__accordion-content");

  //     if (self.classList.contains("catalog-filter__accordion--open")) {

  //       return;
  //     }

  //     self.classList.add("catalog-filter__accordion--open");
  //     content.style.maxHeight = `${content.scrollHeight}px`;
  //   });
  // });
};
window.addEventListener("load", catalogAccordion);
