document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("overlay");
    const openBtn = document.querySelector(".menu-mobile");

    function openMenu() {
      menu.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      overlay.classList.add("opacity-100");
    }
    function closeMenu() {
      menu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      overlay.classList.remove("opacity-100");
    }
    openBtn.addEventListener("click", openMenu);
    overlay.addEventListener("click", closeMenu);
  });