const tabsScrollSlider = new Swiper(".tabs-container", {
  slidesPerView: "auto",
});

const tabs = document.querySelectorAll(".tab");

const tabActiveChanger = e => {
  if (e.target.classList.contains("tab--active")) return;

  tabs.forEach(tab => tab.classList.remove("tab--active"));
  e.target.classList.add("tab--active");
};

tabs.forEach(tab => {
  tab.addEventListener("click", tabActiveChanger);
});
