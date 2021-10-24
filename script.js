const navPopUp = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const textarea = document.querySelector("textarea");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};
navPopUp();

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".container-bakes img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    //Dynamic change text and image
    const originalScr = preview.getAttribute("data-original");
    original.src = `./full/${originalScr}`;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflow: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});
