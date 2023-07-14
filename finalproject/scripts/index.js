const hamburgerMenu = document.getElementById("hamburgerMenu");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".link");

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("active");
    menu.classList.toggle("active");

})

links.forEach(link =>link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    menu.classList.remove("active");
}))