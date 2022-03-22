// import functions and grab DOM elements

import { renderCandy } from './render-utils.js';
import { getCandies } from './fetch-utils.js';


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const candiesListEl = document.querySelector('.candies-list');
//grabbing list in html to update DOM 

window.addEventListener('load', async () => {
    fetchAndDisplayCandies();
});
//async does what again? 
  


async function fetchAndDisplayCandies() {

    const candies = await getCandies();
  //why is it const if candies is going to be itterated through?
  //await waits for superbase right?
  for (let candy of candies) {
    //can candy be any word? 
        const candyEl = renderCandy(candy);
        candiesListEl.append(candyEl);
    }
}
        
   
