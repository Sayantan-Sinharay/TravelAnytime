const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const subNavbar = document.querySelector(".sub-navbar");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  subNavbar.classList.toggle("active");
});
