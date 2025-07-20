const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 200,
};

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}




ScrollReveal().reveal(".header__container h1", scrollRevealOption);
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 400 });
ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 600 });
ScrollReveal().reveal(".section__header", scrollRevealOption);
ScrollReveal().reveal(".menu__card", { ...scrollRevealOption, interval: 200 });
ScrollReveal().reveal(".about__container", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".book__container form", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".contact__form", { ...scrollRevealOption, origin: "bottom" });
ScrollReveal().reveal(".contact__info", { ...scrollRevealOption, origin: "top" });
