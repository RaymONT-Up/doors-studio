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

  accordionBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      if (!e.target.classList.contains("catalog-filter__accordion-btn")) return;

      const parent = e.target.parentElement;
      const content = e.target.nextElementSibling;

      if (parent.classList.contains("catalog-filter__accordion--open")) {
        parent.classList.remove("catalog-filter__accordion--open");
        content.style.maxHeight = 0;
        return;
      }
      parent.classList.add("catalog-filter__accordion--open");
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  });
};
window.addEventListener("load", catalogAccordion);
