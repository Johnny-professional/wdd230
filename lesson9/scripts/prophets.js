const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getPropheteData() {
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.prophetes)
    displayProphetes(data. prophets);

}
function displayProphetes(prophets) {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');


        let portrait = document.createElement('img');


        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p.textContent = `Date of birth: ${prophet.birthdate}`;
        p1.textContent = `Place of birth: ${prophet.birthplace}`;
        p2.textContent = `Children: ${prophet.numofchildren}`;
        p3.textContent= `Prophet year: ${prophet.length}`;
        p4.textContent= `Death: ${prophet.death}`;
        // p3.textContent= `: ${prophet.length}`;






        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt',`portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', 'auto');


        card.appendChild(h2);  
        card.appendChild(p);
        card.appendChild(p1);
        card.appendChild(p2);
        


        card.appendChild(portrait);  
        card.appendChild(p3);
        card.appendChild(p4);

        cards.appendChild(card);
    });
}

getPropheteData();