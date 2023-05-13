// ANCHOR --- Pop-ups
let popup = document.querySelectorAll(".popup");
let popupClose = document.querySelectorAll(".popupClose");
let popupOverlay = document.querySelectorAll(".popupOverlay");
let popupWindow = document.querySelectorAll(".popupWindow");
let popupLinks = document.querySelectorAll("[data-popup]");

if (popup) {
  const closePopup = (el, timer = 0) => {
    setTimeout(() => {
      for (elem of el) {
        elem.addEventListener("click", e => {
          console.log(e);
          e.currentTarget.closest(".popup").classList.remove("active");
        });
      }
    }, timer);
  };
  closePopup(popupOverlay);
  closePopup(popupClose);
}

const activePopup = eId => {
  let popupActivated = document.querySelector(eId);
  popupActivated.classList.add("active");
};
if (popupLinks) {
  popupLinks.forEach(popupLink => {
    popupLink.addEventListener("click", e => {
      e.preventDefault();
      activePopup(`#${popupLink.dataset.popup}`);
    });
  });
}
