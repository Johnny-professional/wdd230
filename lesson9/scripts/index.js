// console.log("about the fetch"); 
// fetch('superheroes.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('something went wrong'));

const url= 'https://pokeapi.co/api/v2/pokemon/ditto';
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuff(data);
    }
}

function doStuff(data) {
    results = data;
    console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);




// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// let results = null;
// async function getPokemon(url) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     doStuff(data);
//   }
// }
// function doStuff(data) {
//   results = data;
//   console.log("first: ", results);
// }
// getPokemon(url);
// console.log("second: ", results);