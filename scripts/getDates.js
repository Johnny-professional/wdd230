function show() {
    document.querySelector('.hamburger').classList.
    toggle('open ')
    document.querySelector('.navbar').classList.
    toggle('active')
}
function pasword() {
    let userPasword1 = document.getElementById("#userName1").value;
    let userPasword2 = document.getElementById("#userName2").value;
    console.log(userPasword1, userPasword2);
    let message = document.getElementById("message ")
    
    if (userPasword1.length != 0) {
        if (userPasword1 == userPasword2) {
            message.textContent = "correct"
            message.style.backgroundColor = "rgb(0, 170, 8)"
        }
        else {
            message.textContent ="please try again"
            message.style.backgroundColor = "rgb(255, 0, 0)"
        }

    }
    else {
        alert("password can't be empty lva");
        message.textContent="";
    }
}
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);




