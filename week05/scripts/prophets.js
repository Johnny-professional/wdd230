const url = " https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json.";

const cards = document.querySelector("#card");

async function getProphetData () {
    const response = await fetch(url);
    const data = await response.JSON();
    console.table(data, prophets)
}
getProphetData();

