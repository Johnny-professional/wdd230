// for current temperatur
const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#WeatherIcon");
const windSpeed = document.querySelector("#speed");
const description = document.querySelector("#description");
// for wind calculation Chill 
const temperatureC = parseFloat(document.querySelector('#temperature').textContent);
const speed = parseFloat(document.querySelector('#speed').textContent);
const windChill = document.querySelector('#windChill');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.158092&lon=-117.350594&units=metric&appid=58c96a7989501d42676ed42af207db7c"

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



// create a function windChill Calculation and conversion of Celsuce to Fahr
function windChillCalculation(temperatureC, speed) {
    const tempFahr = (temperatureC * 9/5) + 32;
    const windC = 35.74 + (0.6215 * tempFahr) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempFahr * Math.pow(speed, 0.16));
    return windC.toFixed(2);
}

if (temperatureC <= 10 && speed > 4.8) {
    windChill.textContent = windChillCalculation(temperatureC, speed);
} else {
    windChill.textContent = 'N/A';
}

apiFetch();