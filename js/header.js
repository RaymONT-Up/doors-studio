const menuBtnOpen = document.querySelector(".js-menu-btn--open");
const menuBtnClose = document.querySelector(".js-menu-btn--close");
const menu = document.querySelector(".menu");

menuBtnOpen.addEventListener("click", () => {
  menu.classList.add("menu--active");
  document.body.classList.add("body-lock");
});
menuBtnClose.addEventListener("click", () => {
  menu.classList.remove("menu--active");
  document.body.classList.remove("body-lock");
});
