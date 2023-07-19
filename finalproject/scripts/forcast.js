const apiKey = "58c96a7989501d42676ed42af207db7c";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=${apiKey}`;

async function getWeatherForecast() {

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // const forecastData = data.list.slice(0, 8 * 3);
    const forecastData = data.list.filter((forecast, index) => index % 8 === 0 && index / 8 < 3)
    // console.log(forecastData);
    displayWeatherForcast(forecastData);
  } catch(error) {
    console.log('Something went wrong:', error);
  }
}

function displayWeatherForcast(forecastData){

  const forcastweather = document.querySelector(".forcastweather");
  
  forecastData.forEach( (forecast) => {
    const date = new Date(forecast.dt *1000);
    const day = date.toLocaleDateString('en-US', {weekday: 'long'});
    const temp = forecast.main.temp;
    const description = forecast.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`

    const section = document.createElement("section")

    section.innerHTML =`  
    <h4 class="fordays">${day}</h4>
    <img src="${icon}" alt="${description}">
    <p class="fortemp">temperature: ${temp} °C</p>
    <p class="forcastdescript">${description}</p>`

    forcastweather.appendChild(section);
  });

}

getWeatherForecast();















