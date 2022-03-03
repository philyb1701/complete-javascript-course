
//First task - variables
const country = "United Kingdom"
const continent = "Europe"
let population = 65

console.log(country, continent, population)

//Second task - data types
const isIsland = true;
const language = "English"; 
console.log(typeof isIsland, typeof population, typeof country, typeof language);

//Third task - let, const, var
population = 65;
console.log (population);

//Fourth task - basic operators

population /= 2; // population = population / 2
console.log(population);
population++ ; // population = population + 1 or population += 1;
console.log(population);
const finlandPop = 6;
console.log(population > finlandPop);
const averagePop = 33;
console.log(population < averagePop);

//Fifth task - strings and template literals
console.log (`${country} is in ${continent}, and its ${population} million people speak ${language}.`)

//Sixth task - taking decisions with if / else statements
if (population > averagePop){
    console.log(`${country}'s population is ${population - averagePop} above average.`)
} else {
    console.log(`${country}'s population is ${averagePop - population} million below average.`)
}

