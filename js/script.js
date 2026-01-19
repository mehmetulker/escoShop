// Hamburger Menu Toggle

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});
