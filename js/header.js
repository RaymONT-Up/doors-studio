const headerMenuBtn = document.querySelector(".header__menu-btn");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".menu");
const body = document.body;
headerMenuBtn.addEventListener("click", e => {
  headerMenu.classList.toggle("menu--active");
  header.classList.toggle("header-menu--active");
  body.classList.toggle("body-lock");
});
