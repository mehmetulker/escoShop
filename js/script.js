// Hamburger Menu Toggle

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

const slider = document.querySelector(".new-products-products");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const scrollAmount = 336; // 312 + gap

next.addEventListener("click", () => {
  slider.scrollLeft += scrollAmount;
});

prev.addEventListener("click", () => {
  slider.scrollLeft -= scrollAmount;
});

const sliders = document.querySelector(".new-products-products");

let isDown = false;
let startX;
let scrollLeft;

sliders.addEventListener("mousedown", (e) => {
  isDown = true;
  sliders.classList.add("active");
  startX = e.pageX - sliders.offsetLeft;
  scrollLeft = sliders.scrollLeft;
});

sliders.addEventListener("mouseleave", () => {
  isDown = false;
});

sliders.addEventListener("mouseup", () => {
  isDown = false;
});

sliders.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliders.offsetLeft;
  const walk = (x - startX) * 1.2; // hız
  sliders.scrollLeft = scrollLeft - walk;
});



  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    // 10 saniye sonra aç
    setTimeout(() => {
      popup.classList.add("active");
    }, 2000);

    // çarpıya basınca kapat
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  });

