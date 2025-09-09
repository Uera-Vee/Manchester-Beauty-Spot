document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".hero-img");
  setTimeout(() => {
    heroImg.classList.add("shrink");
  }, 500);
});
