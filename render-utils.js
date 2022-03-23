export function renderCandy(candy) {

    const candyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const typeEl = document.createElement('ul');
    const sweetnessEl = document.createElement('p');
    const yummyEl = document.createElement('p');

    candyEl.classList.add('candy-item');

    nameEl.textContent = candy.candy;
    // typeEl.textContent = candy.type;
    sweetnessEl.textContent = candy.sweet;
    yummyEl.textContent = candy.yummy;

    for (let item of candy.type) {
        const li = document.createElement('li');

        li.textContent = item;
        //tells to create a li element then update text to that element
        //then append it to the li we just created
        typeEl.appendChild(li);
    }

    candyEl.append(nameEl, sweetnessEl, typeEl, yummyEl);

    return candyEl;
}




export function renderOwls(owl) {

    const owlEl = document.createElement('div');
    const habitatEl = document.createElement('p');
    const lifespanEl = document.createElement('p');
    const imgEl = document.createElement('img');

    owlEl.classList.add('owl-item');

    habitatEl.textContent = owl.Habitat;
    lifespanEl.textContent = owl.Lifespan;
    imgEl.src = owl.Image;

    owlEl.append(habitatEl, lifespanEl, imgEl);
 
    return owlEl;
}


export function renderArtists(artist) {

    const artistEl = document.createElement('div');
    const artistNameEl = document.createElement('p');
    const countryEl = document.createElement('p');
    const famousPieceEl = document.createElement('p');
    const yearOfDeathEl = document.createElement('p');
    
    artistEl.classList.add('individual-artist');

    artistNameEl.textContent = artist.name;
    countryEl.textContent = artist.country;
    famousPieceEl.textContent = artist.famous_piece;
    yearOfDeathEl.textContent = artist.year_of_death;

    artistEl.append(artistNameEl, countryEl, famousPieceEl, yearOfDeathEl);

    return artistEl;
}


export function renderInstruments(instrument) {

    const instrumentEl = document.createElement('div');
    const brandEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const famousPlayersEl = document.createElement('li');
    const instrumentTypeEl = document.createElement('p');
    const coolEl = document.createElement('p');

    for (let item of instrument.famous_players) {
        const li = document.createElement('li');
        li.textContent = item;
        famousPlayersEl.append(li);
    }

    brandEl.textContent = instrument.brand;
    priceEl.textContent = instrument.brand;
    instrumentTypeEl.textContent = instrument.instrument;
    coolEl.textContent = instrument.cool;

    instrumentEl.append(brandEl, priceEl, famousPlayersEl, instrumentTypeEl, coolEl);

    return instrumentEl;
    
}