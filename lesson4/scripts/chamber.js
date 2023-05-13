document.querySelector(".fullYear").textContent = new Date().getFullYear();
let options = {weekday:"short", day:"numeric", month:"short", year:"numeric"};
document.querySelector(".date").textContent = new Date().toLocaleDateString("en-US", options);
function toggleMenu(){
    document.getElementById('menu').classList.toggle('open');
    document.getElementById('hamburgerMenu').classList.toggle('open');

    // console.log("it works")

}
const x = document.getElementById('hamburgerMenu');
x.onclick = toggleMenu;

