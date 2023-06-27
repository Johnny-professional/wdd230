const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#WeatherIcon");
const windSpeed = document.querySelector("#speed");
const description = document.querySelector("#description");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-18.7915&lon=47.4740&units=metric&appid=27b46718914c1af76842268cb9d3c1e4"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeather(data);
            
        }else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log("Something went wrong");
    }
}

function displayWeather(weatherData){
    currentTemp.textContent = weatherData.main.temp.toFixed(1);
    windSpeed.textContent = weatherData.wind.speed.toFixed(1);

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    description.textContent = desc;
}

apiFetch();


