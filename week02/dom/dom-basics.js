const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

// const newDiv = document.createElement("div");
// newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
// document.body.appendChild(newDiv);

//            FIRST WAY TO ADD AN ELEMENT IN HTML
// const newSection = document.createElement("section");
// newSection.innerHTML = "<h2> SCE 121 b</h2><p>Welcome to Javascript</p>";
// document.body.appendChild(newSection)

//              SECOND WAY TO ADD AN ELEMENT IN HTML
const newSection = document.createElement("Section");
const newH2 = document.createElement("h2");
newH2.innerText = "SCE 121b";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "welcome to Javascript language";
newSection.appendChild(newP);

// const newSection = document.createElement("section");
// const newH2 = document.createElement("h2");
// newH2.innerText = "CSE 121b";
// newSection.appendChild(newH2);
// const newP = document.createElement("p");
// newP.innerText = "Welcome to Javascript Language";
// newSection.appendChild(newP);

document.body.appendChild(newSection);

