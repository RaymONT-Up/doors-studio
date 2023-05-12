const mineSize = document.querySelector(".product__mine-size");
const mineSizeSelectsWrapper = document.querySelector(
  ".product-size__list--mine"
);
mineSize.addEventListener("click", () => {
  mineSizeSelectsWrapper.classList.add("active");
});
