const hamburgerBtn = document.querySelector(".hamburger-button");

hamburgerBtn.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("hamburger-button--is-active");
});
