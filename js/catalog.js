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
      content.style.maxHeight = `${content.scrollHeight * 2}px`;
    });
  });
};
window.addEventListener("load", catalogAccordion);

//-----
// Показывает только последний активный эелмент, по которому было нажатие в colorsWrapper(фильтр цветов)
//
const colorsWrapper = document.querySelector(
  ".catalog-filter__accordion-content--color"
);

let activeColor;

// Делегирование событий на родительский элемент с цветами в фильтре
colorsWrapper.addEventListener("click", e => {
  const target = e.target.closest(".door-color__label");
  // Если это не .door-color__label, тогда след код не выполняется
  if (!target || e.target.tagName === "INPUT") return;

  // значение input checked
  const isChecked = target.querySelector("input").checked;

  // если элемент уже активен, то при повторном нажатие убирается текст
  if (target.classList.contains("active")) {
    target.classList.remove("active");
    return;
  }

  // Удаляется у активного элемента текст
  if (activeColor) {
    activeColor.classList.remove("active");
  }

  // если input по которому происходит нажатие не имеет true checked тогда добавляется класс active
  if (!isChecked) {
    target.classList.add("active");
    activeColor = target;
  }
});
