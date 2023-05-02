const tabsScrollSlider = new Swiper(".tabs-container", {
  slidesPerView: "auto",
});

const tabs = document.querySelectorAll(".tab");

const tabActiveChanger = e => {
  const tab = e.target.closest(".tab");
  if (tab.classList.contains("tab--active")) return;

  tabs.forEach(tab => tab.classList.remove("tab--active"));
  tab.classList.add("tab--active");
};

tabs.forEach(tab => {
  tab.addEventListener("click", tabActiveChanger);
});
