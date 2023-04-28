const body = document.body;

// Menu
const menuBtnOpen = document.querySelector(".js-menu-btn--open");
const menuBtnClose = document.querySelector(".js-menu-btn--close");
const menu = document.querySelector(".menu");

menuBtnOpen.addEventListener("click", () => {
  menu.classList.add("menu--active");
  body.classList.add("body-lock");
});
menuBtnClose.addEventListener("click", () => {
  menu.classList.remove("menu--active");
  body.classList.remove("body-lock");
});

// Search
const searchBtnOpen = document.querySelector(".js-header-search-btn--open");
const searchBtnClose = document.querySelector(".js-header-search-btn--close");
const searchWrapper = document.querySelector(".header-search");

const searchForm = document.querySelector(".header-search__form");
const searchInput = document.querySelector(".header-search__form-input");
const searchResult = document.querySelector(".header-search__result");
const searchCategories = document.querySelector(".header-search__categories");

searchBtnOpen.addEventListener("click", () => {
  searchWrapper.classList.add("header-search--active");
  body.classList.add("body-lock");
});
searchBtnClose.addEventListener("click", () => {
  searchWrapper.classList.remove("header-search--active");
  body.classList.remove("body-lock");
});

searchInput.addEventListener("input", e => {
  if (e.target.value.length >= 1) {
    searchResult.classList.add("header-search__block--active");
    searchCategories.classList.remove("header-search__block--active");
  } else {
    searchResult.classList.remove("header-search__block--active");
    searchCategories.classList.add("header-search__block--active");
  }
});
