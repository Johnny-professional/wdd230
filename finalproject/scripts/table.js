// let table_Body = document.querySelector(".table_body");

let fruitData = "./data.json"; 

async function getFruitData(){
    const response = await fetch(fruitData);
    const data = await response.json()
    displayFruit(data)
}
getFruitData();

function displayFruit(fruits){
    fruits.forEach((fruit) => {
        let table_Body = document.querySelector(".table_body");
        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.textContent = fruit.name;

        // let family = document.createElement('td');
        // family.textContent = fruit.family;

        let carbohydrates = document.createElement("td");
        carbohydrates.textContent = fruit.nutritions.carbohydrates

        let protein = document.createElement("td");
        protein.textContent = fruit.nutritions.protein;

        let fat = document.createElement("td");
        fat.textContent = fruit.nutritions.fat;

        let calories = document.createElement("td");
        calories.textContent = fruit.nutritions.calories;

        let sugar = document.createElement("td");
        sugar.textContent = fruit.nutritions.sugar;



        row.appendChild(name);
        // row.appendChild(family);
        row.appendChild(carbohydrates);
        row.appendChild(protein);
        row.appendChild(fat);
        row.appendChild(calories);
        row.appendChild(sugar);

        table_Body.appendChild(row);
 
    })
}


