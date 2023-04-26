document.querySelector(".fullYear").textContent = new Date().getFullYear();
let options = {weekday: "short", day: "numeric", month:"short", year:"numeric"};
document.querySelector(".date").innerHTML = new Date().toLocaleDateString("en-US", options);