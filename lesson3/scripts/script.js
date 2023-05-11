document.querySelector(".fullYear").textContent = new Date().getFullYear();
let options = {weekday:"short", day:"numeric", month:"short", year:"numeric"};
document.querySelector(".date").textContent = new Date().toLocaleDateString("en-US", options);
function toggleMenu(){
    document.getElementById("link").classList.toggle("open");
}
const x = document.getElementById("humbergerMenu");
x.onclick = toggleMenu();