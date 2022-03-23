// import functions and grab DOM elements

import { renderCandy } from './render-utils.js';
import { getCandies } from './fetch-utils.js';



import { renderOwls } from './render-utils.js';
import { getOwls } from './fetch-utils.js';


import { renderArtists } from './render-utils.js';
import { getArtists } from './fetch-utils.js';



// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const candiesListEl = document.querySelector('.candies-list');
//grabbing list in html to update DOM 

window.addEventListener('load', async () => {
    fetchAndDisplayCandies();
    fetchAndDisplayOwls();
    fetchAndDisplayArtists();
});
//async does what again? 
  
async function fetchAndDisplayCandies() {

    const candies = await getCandies();
  //why is it const if candies is going to be iterated through?
  //await waits for superbase right?
    for (let candy of candies) {
    //can candy be any word? 
        const candyEl = renderCandy(candy);
        candiesListEl.append(candyEl);
    }
}



//OWLS 

const owlsListEl = document.querySelector('.owls-list');

// window.addEventListener('load', () => {
//     fetchAndDisplayOwls();
// });

async function fetchAndDisplayOwls() {
    const owls = await getOwls();
    for (let owl of owls) {
        const owlEL = renderOwls(owl);
        owlsListEl.append(owlEL);
    }
}

        
// ARTIST 

const artistListEl = document.querySelector('.artist-list');

async function fetchAndDisplayArtists() {
    const artists = await getArtists();
    for (let artist of artists) {
        const artistEl = renderArtists(artist);
        artistListEl.append(artistEl);
    }

}
