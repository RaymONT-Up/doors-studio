const sizesContainer = document.querySelector(".product__size-list");
const mineSizeSelectsWrapper = document.querySelector(
  ".product-size__list--mine"
);

sizesContainer.addEventListener("click", e => {
  const target = e.target.closest(".product__label");
  if (target === null || target === undefined) return;

  if (target.querySelector(".input-radio").value === "custom") {
    mineSizeSelectsWrapper.classList.add("active");
  } else {
    mineSizeSelectsWrapper.classList.remove("active");
  }
});
