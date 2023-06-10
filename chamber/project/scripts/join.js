document.querySelector(".fullYear").textContent = new Date().getFullYear();
let options = {weekday:"short", day:"numeric", month:"short", year:"numeric"};
document.querySelector(".date").textContent = new Date().toLocaleDateString("en-US", options);

window.addEventListener('DOMContentLoaded', function ()  {
    const datetimefield = document.getElementById('datetime');
    const currentDate = new Date();
    const formatDate = currentDate.toISOString();

    datetimefield.value = formatDate;
})