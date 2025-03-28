const toggleDropDownBtn = document.querySelector(".btn__toggle-menu");
const mobileNav = document.querySelector(".mobile-nav");

let menuOpen = false;

const toggleDropDownMenu = () => {
  if (!menuOpen) {
    menuOpen = true;
  } else if (menuOpen) {
    menuOpen = false;
  }

  if (menuOpen) {
    mobileNav.style.display = "flex";
  } else {
    mobileNav.style.display = "none";
  }
};

toggleDropDownBtn.addEventListener("click", toggleDropDownMenu);
