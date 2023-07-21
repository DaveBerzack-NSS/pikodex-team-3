const container = document.querySelector('#container')
import { getPikomon } from "./database.js";

// Grab the database
// Converting database to HTML string
// set string to variable
// return variable
// put it on website

const pikomon = getPikomon()

console.log(pikomon)

let pikoCards = ``

for (const pikoman of pikomon) {
    pikoCards += `<section class="piko-card">
    <img class="piko-img" src="${pikoman.imageUrl}"/>
    <h3>${pikoman.name}</h3>
    <p class="piko-info">Category:${pikoman.category}</p>
    <p class="piko-info">Abilities:${pikoman.abilities}</p>
    <p class="piko-info">Weakness:${pikoman.weakness}</p> 
</section>`
}

container.innerHTML = pikoCards

