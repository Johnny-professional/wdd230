//const forcasturl = "https://api.openweathermap.org/data/2.5/forecast/hourly?lat=33.158092&lon=-117.350594&units=metric&appid=27b46718914c1af76842268cb9d3c1e4"
const forcasturl = "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=-18.7915&lon=47.4740&appid=07ff7fade2674467cd0a7eeaa8be2853"
async function apiforcastFatch() {
    const response = await fetch(forcasturl);
    const data = await response.json();
    console.log(data);
}
apiforcastFatch();














