// ANCHOR --- Pop-ups
let popup = document.querySelectorAll(".popup");
let popupClose = document.querySelectorAll(".popupClose");
let popupOverlay = document.querySelectorAll(".popupOverlay");
let popupWindow = document.querySelectorAll(".popupWindow");
let popupLink = document.querySelectorAll('[data-popup="pre-order]');

if (popup) {
  const closePopup = (el, timer = 0) => {
    setTimeout(() => {
      for (elem of el) {
        elem.addEventListener("click", e => {
          e.currentTarget.closest(".popup").classList.remove("active");
        });
      }
    }, timer);
  };
  closePopup(popupOverlay);
  closePopup(popupClose);
}

// const activePopup = el => {
//   let popupActivated = document.querySelector(el);
//   el.classList.add("active");
// };
// if (popupLink) {
//   for (elem of popupLink) {
//     elem.addEventListener("click", activePopup);
//   }
// }
