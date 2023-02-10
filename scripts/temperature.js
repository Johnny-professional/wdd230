const tempElement = document.querySelector(".temperature-value p");
const discElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};

weather.temperature = {
    unit: "celsius"
}
const KELVIN = 273;    

const key ="07ff7fade2674467cd0a7eeaa8be2853"

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else {
    notificationElement.style.display = "block";
    notificationElement.innerHtml = "<p>Browser doesn't support Geolocation</p>"
    
}
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`
}

// async function getTemples ()  { 
//     const response = await fetch(
//       "https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=07ff7fade2674467cd0a7eeaa8be2853"   
//     );
//     currenteWeather = await response.json();
// };
// document.createElement()
function getWeather(latitude,longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json()
            return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    })

}
function displayWeather(){
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    discElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    
}
