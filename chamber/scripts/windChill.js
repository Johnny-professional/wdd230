const temperatureC = parseFloat(document.querySelector('#temperature').textContent);
const speed = parseFloat(document.querySelector('#speed').textContent);
const windChill = document.querySelector('#windChill');

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
