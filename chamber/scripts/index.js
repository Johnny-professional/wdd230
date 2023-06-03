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

let newOptions = {weekday:"long", day:"numeric", month:"long", year:"numeric"};
document.querySelector("#head-year").textContent= new Date().toLocaleDateString("en-US", newOptions);

const today = new Date().getDay();
if(today ===1 || today ===2){
    const date = document.querySelector('#header-date');
    date.style.display = "block";
}

// discovery JS






