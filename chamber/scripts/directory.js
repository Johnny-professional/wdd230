const file = './data.json';
const Gridcards = document.querySelector('.gridV');


async function getCompaniesData() {
  const response = await fetch(file);
  const data = await response.json();

  // console.table(data.companies);
  displayCompanies(data.companies);
}

function displayCompanies(companies) {
  // const Listcards = document.querySelector('#directory_cards .ListV');
  companies.forEach((company) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('a');
    let p3 = document.createElement('a');
    let p4 = document.createElement('p');
    let br = document.createElement('br');
    let hr = document.createElement('hr');

    let logo = document.createElement('img');
    // let link = document.createElement('a');
    
    h2.textContent = company.name;
    p.textContent = `Owner: ${company.Owner}`;
    p1.textContent = `Address: ${company.Address}`;
    p2.textContent = `${company.sitWeb}`;
    p3.textContent = `Phone: ${company.phone}`;
    br.innerHTML
    hr.innerHTML


    // p4.textContent

    
    logo.setAttribute('src', company.picture);
    logo.setAttribute('alt', `company ${company.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '250');
    // logo.setAttribute('heith', 'auto');
    card.setAttribute('class', 'company');
    p.setAttribute('class', 'add');
    p1.setAttribute('class', 'add');
    p2.setAttribute('class', 'add');
    p2.setAttribute('src', company.sitWeb);
    p3.setAttribute('class', 'add');
    p3.setAttribute('src', company.phone);
    hr.setAttribute('class', 'hr');


    p3.setAttribute('class', 'add');
    p4.setAttribute('class', 'add');


    
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p);

    card.appendChild(logo);
    card.append(hr);
    card.appendChild(p2);
    card.append(br);
    card.appendChild(p3);


    
    Gridcards.appendChild(card);
    // Listcards.appendChild(card);
  });
}

const gridBtn = document.querySelector('.clickGrid');
const listBtn = document.querySelector('.clickList');

gridBtn.addEventListener('click', () => {
  Gridcards.classList.add('gridV');
  Gridcards.classList.remove('listV');
})

listBtn.addEventListener('click', () => {
  Gridcards.classList.add('listV');
  Gridcards.classList.remove('gridV');
})




// let UseGrid = true;

// function UseGrid() {
//   UseGrid = true;
//   gridView.style.display = 'flex';
//   listView.style.display = 'none';
// }

// function UseList() {
//   UseList = false;
//   listView.style.display = 'flex';
//   gridView.style.display = 'none';
// }

// gridBtn.onclick = function(){UseGrid()};
// listBtn.onclick = function(){UseList()};

// gridBtn.addEventListener((onclick) = function(){
//   gridView.style.display = 'flex';
//   listView.style.display = 'none';
// });
// listBtn.addEventListener((onclick) = function(){
//   listView.style.display = 'flex';
//   gridView.style.display = 'none';
// })

getCompaniesData();










