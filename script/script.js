const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".headRightnav");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
