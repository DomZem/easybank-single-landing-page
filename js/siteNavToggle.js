const siteNavToggle = document.querySelector(".site-nav__toggle");
const menuMobile = document.querySelector(".menu--mobile");
const backdrop = document.querySelector(".backdrop");

siteNavToggle.addEventListener("click", () => {
    backdrop.classList.toggle("is-active");
    menuMobile.classList.toggle("menu--is-disable");
});
