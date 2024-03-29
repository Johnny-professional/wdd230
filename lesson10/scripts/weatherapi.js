const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const currentWind =document.querySelector("#current-wind");
const captionDesc = document.querySelector("figcaption");
 

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-18.7915&lon=47.4740&appid=27b46718914c1af76842268cb9d3c1e4";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log("error");
    }
}
function displayResults(weatherData) {
    currentWind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    // let weatherIcon = document.querySelector('#weather-icon');
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc)
    captionDesc.textContent = desc;
}

apiFetch();

// function displayResults(weatherData) {
//     currentTemp.innerHTML = `<strong> ${weatherData.main.toFIxed(0)}</strong>`;
    
//     const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
//     const desc = weatherData.weather[0].description;

//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = desc; 


// }