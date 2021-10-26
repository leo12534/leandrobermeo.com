const navToggle = document.querySelector(".header__hamburger-toggle");
const navLinks = document.querySelectorAll(".header__nav-link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("header__nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("header__nav-open");
  });
});
