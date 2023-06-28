const file = './data.json';

async function getCompaniesData() {
  const response = await fetch(file);
  const data = await response.json();

  // console.table(data.companies);
  displayCompanies(data.companies);
}

function displayCompanies(companies) {
  const Gridcards = document.querySelector('#directory_cards div');
  // const Listcards = document.querySelector('#directory_cards .ListV');
  companies.forEach((company) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('a');
    let p3 = document.createElement('a');
    let p4 = document.createElement('p');

    let logo = document.createElement('img');
    // let link = document.createElement('a');
    
    h2.textContent = company.name;
    p.textContent = `Owner: ${company.Owner}`;
    p1.textContent = `Address: ${company.Address}`;
    p2.textContent = `${company.sitWeb}`;
    p3.textContent = `Phone: ${company.phone}`
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


    p3.setAttribute('class', 'add');
    p4.setAttribute('class', 'add');


    
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p);

    card.appendChild(logo);
    card.appendChild(p2);
    card.appendChild(p3);


    
    Gridcards.appendChild(card);
    // Listcards.appendChild(card);
  });
}

// const gridView = document.querySelector('.gridV');
// const listView =  document.querySelector('.listV');
// const gridBtn = document.querySelector('.clickGrid');
// const listBtn = document.querySelector('.clickList');
// // let UseGrid = true;

// gridBtn.addEventListener((onclick) = function(){
//   gridView.style.display = 'flex';
//   listView.style.display = 'none';
// });
// listBtn.addEventListener((onclick) = function(){
//   listView.style.display = 'flex';
//   gridView.style.display = 'none';
// })

getCompaniesData();










