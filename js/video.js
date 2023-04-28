const videoWrappers = document.querySelectorAll(".video");
videoWrappers.forEach(wrapper => {
  const preview = wrapper.querySelector(".video__preview");
  const video = wrapper.querySelector("video");
  let firstPlay = true;

  wrapper.addEventListener("click", () => {
    if (!firstPlay) return;

    if (video.paused) {
      firstPlay = false;
      video.play();
      preview.classList.remove("video__preview--show");
    } else {
      video.pause();
    }
  });
});
