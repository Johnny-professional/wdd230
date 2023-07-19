const hamburgerMenu = document.getElementById("hamburgerMenu");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".link");

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("active");
    menu.classList.toggle("active");

})

links.forEach(link =>link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    menu.classList.remove("active");
}))

const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute('src',(image.getAttribute('data-src')));
    image.onload = ()=> {image.removeAttribute('data-src')};
}

const imgOptions ={
    threshold: 1,
    rootMargin:"0px 0px 50px 0px"
}
if ('intersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) =>{
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}else{
    imagesToLoad.forEach((img)=>{
        loadImages(img);
    })
}

let numVisite = Number(window.localStorage.getItem("visits-ls"));

if (numVisite !== 0) {
    userVisit.textContent = `This is your ${numVisite} visits`;
}else {
    userVisit.textContent = `🤝Hey welcome to our page, this is your first visit!🤝`;
}

numVisite++

localStorage.setItem("visits-ls", numVisite);




