const options = {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'};
document.getElementById("currentDate").textContent = new Date().toLocaleDateString('en-US', options);

// using ` ` methode
`current date: ${dauName} , ${monthName} ${d.getDate()} , ${year}`;
let quantity = document.querySelector('#q');
// write a text in html
document.querySelector('h4').innerHTML = 'welcome to <em>our</em> Neighbborhood!!!'

document.querySelector('#temp') = getTemperature();
// select all div
const divs = document.querySelectorAll('div');

// filter
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let filterC = citynames.filter(city => city.charAt(0) === 'C');