const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const mainContent = document.getElementById("mainContent");

  mobileMenu.classList.toggle("mobile-menu-open");
  mainContent.classList.toggle("main-content-hidden");
}
