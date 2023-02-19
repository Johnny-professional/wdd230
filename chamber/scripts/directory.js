// async function getmembers () {
//     const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
//     membersList = await response.json();
//     // oninput(membersList);
//     console.log(membersList)


const output = (companies) => {
    companies.forEach((company) => {
        let article = document.createElement("div");
    
        let companyName = document.createElement("h3");
        companyName.textContent = company.companyName;
    
        let adress = document.createElement("h4");
        adress.textContent = company.adress;
    
        let phoneNumber  = document.createElement("h4");
        phoneNumber.textContent = company.phoneNumber;

        let Employees = document.createElement("h3");
        Employees.textContent = company.Employees;
    
        let img = document.createElement("img");
        img.setAttribute("src", company.imgURL);
        img.setAttribute("alt", company.companyName); 

        let websiteURL = document.createElement("a");
        websiteURL.innerHTML = company.websiteURL;
    
        article.appendChild(img);
        article.appendChild(companyName);
        article.appendChild(adress);
        article.appendChild(Employees);
        article.appendChild(phoneNumber);
        article.appendChild(websiteURL);
    
        document.querySelector("#companies").appendChild(article);
    });
    };

    
    
    async function getCompany ()  { 
    const response = await fetch(
        "data/members.json"
    );
    companyList = await response.json();
    output(companyList);
    };
    getCompany();
    


const gridbutton = document.querySelector("#grid");

const listbutton = document.querySelector("#list");

const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {


    display.classList.add("grid");

    display.classList.remove("list");

});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
// showList();






