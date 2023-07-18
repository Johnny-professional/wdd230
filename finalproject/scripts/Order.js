function clickFunction(event) {
  event.preventDefault();
  displayOrder();
}


let userOrder = document.querySelector(".userOrder");
let userName = document.querySelector(".userName");
let useremail = document.querySelector(".email");
let userphone = document.querySelector(".phone");
let userDesc = document.querySelector(".description");
let f1 = document.querySelector(".f1");
let f2 = document.querySelector(".f2");
let f3 = document.querySelector(".f3");
let total = document.querySelector(".total");

// Get the button element from the HTML document
let button = document.getElementById("FormBtn");

// Attach the event listener to the button
button.addEventListener("click", clickFunction);

let dataUrl = "./data.json";
async function datafetch() {
  const resp = await fetch(dataUrl);
  const data = await resp.json()
  return data
}

async function displayOrder() {
  const Uname = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const tel = document.querySelector("#tel").value;
  const description = document.querySelector("#textarea").value;

  const userinput1 = document.querySelector("#Subject1").value;
  const userinput2 = document.querySelector("#Subject2").value;
  const userinput3 = document.querySelector("#Subject3").value;


  const data = await datafetch();
  function findFruitByName(fruitName){
    return data.find((fruit) => fruit.name === fruitName);
  }

  if (userinput1 === "Selet Fruit") {
      Uname.textContent = "Your Order is faild: please complete the first fruit";
      alert("Your Order is faild: please complete the first fruit")
  } else{
      userName.textContent = `Hey! ${Uname}, welcome`;
      useremail.textContent = `We sent an Email to ${email}`;
      userphone.textContent = `This is you phone number: ${tel}`;
      // userDesc.textContent = description;
      // f1.textContent = `Your first Fruit is: ${userinput1}`;
      // f2.textContent =  `Your second fruit is: ${userinput2}`;
      // f3.textContent = `You third fruit is:  ${userinput3}`;

      const fruit1 = findFruitByName(userinput1);
      const fruit2 = findFruitByName(userinput2);
      const fruit3 = findFruitByName(userinput3);
      // ---FRUIT1
        f1.innerHTML = `Your first Fruit is: <span class="nutri">${userinput1}</span> <br>
          Nutritional information for <span class="nutri"> ${userinput1}</span>:<br>
          Carbohydrates: <span class="nutri"> ${fruit1.nutritions.carbohydrates}</span> <br>
          Protein: <span class="nutri"> ${fruit1.nutritions.protein}</span> <br>
          Fat: <span class="nutri">${fruit1.nutritions.fat}</span> <br>
          Calories: <span class="nutri">${fruit1.nutritions.calories}</span> <br>
          Sugar: <span class="nutri">${fruit1.nutritions.sugar}</span>`;
        
        
        // ---FOR FRUIT2
        f2.innerHTML = `Your second Fruit is: <span class="nutri">${userinput2}</span> <br>
        Nutritional information for <span class="nutri">${userinput2}</span>: <br>
        Carbohydrates: <span class="nutri">${fruit2.nutritions.carbohydrates}</span> <br>
        Protein: <span class="nutri">${fruit2.nutritions.protein}</span> <br>
        Fat: <span class="nutri">${fruit2.nutritions.fat}</span> <br>
        Calories: <span class="nutri">${fruit2.nutritions.calories}</span> <br>
        Sugar: <span class="nutri">${fruit2.nutritions.sugar}</span>`;
        
      
        // ---FOR FRUIT3
        f3.innerHTML = `Your Third Fruit is: <span class="nutri">${userinput3}</span><br>
        Nutritional information for <span class="nutri">${userinput3}</span>:<br>
        Carbohydrates: <span class="nutri">${fruit3.nutritions.carbohydrates}</span><br>
        Protein: <span class="nutri">${fruit3.nutritions.protein}</span><br>
        Fat: <span class="nutri">${fruit3.nutritions.fat}</span><br>
        Calories: <span class="nutri">${fruit3.nutritions.calories}</span><br>
        Sugar: <span class="nutri">${fruit3.nutritions.sugar}</span>`;

        // ---FOR TOTAL 
        let t1 =  fruit1.nutritions.carbohydrates + fruit2.nutritions.carbohydrates + fruit3.nutritions.carbohydrates;
        let t2 =  fruit1.nutritions.protein + fruit2.nutritions.protein + fruit3.nutritions.protein;
        let t3 =  fruit1.nutritions.fat + fruit2.nutritions.fat + fruit3.nutritions.fat;
        let t4 = fruit1.nutritions.calories + fruit2.nutritions.calories + fruit3.nutritions.calories;
        let t5 = fruit1.nutritions.sugar + fruit2.nutritions.sugar + fruit3.nutritions.sugar;

        total.innerHTML = `This is the Total of all the nutritions: <br>
        Carbohydrates: <span class="totalNutri">${Math.round(t1)}</span> <br>
        Protein: <span class="totalNutri">${Math.round(t2)}</span><br>
        Fat: <span class="totalNutri">${Math.round(t3)}</span><br>
        Calories: <span class="totalNutri">${Math.round(t4)} </span><br>
        Sugar: <span class="totalNutri">${Math.round(t5)}</span>`

        userDesc.textContent = `We receive Your note to make it more Delicious ${description}`;
  }

}



  
