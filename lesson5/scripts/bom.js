const button = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("#list");


button.addEventListener('click', function(){
    // create a li element to hold the items
    const userInput = input.value.trim();
    
    if (userInput !== ''){
        // create a li element to hold the items
        const listItems = document.createElement('li');
        listItems.textContent = userInput;
        listItems.style.fontSize = "2em";
        listItems.style.textDecoration = "none";
        listItems.style.listStyleType = "none";
        listItems.style.backgroundColor = "rgb(0,0,0,.4";
        listItems.style.color = "white";
        listItems.style.justifySelf = "center";
    
        

        // creat a delet button
        const delet = document.createElement('button')
        delet.innerHTML = "X";
        delet.style.color = "white";
        delet.style.backgroundColor = "red";
        delet.style.fontSize = "1em";
        // delet.style.marginLeft = "23rem";
        delet.style.justifyItems = "end";
        
        //add an event listener to delet buton 
        delet.addEventListener('click', function(){
            listItems.remove();
        })

        listItems.append(delet);

        list.appendChild(listItems);

        input.value = '';
        
    }

});


