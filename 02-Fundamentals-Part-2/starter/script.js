"use strict";//activates strict mode. https://www.w3schools.com/js/js_strict.asp

// Part 1- Functions

function describeCountry(country, population, capitalCity) {
    const countryDesc = `${country} has a population of ${population} million and ${capitalCity} is its capital.`
    return countryDesc;
}

const countryEngland = describeCountry("England", 50, "London"); 
console.log(countryEngland)
const countryScotland = describeCountry("Scotland", 8, "Edinburgh");
console.log(countryScotland);
const countryWales = describeCountry("Wales", 5, "Cardiff");
console.log(countryWales)

// Part 2-- Function Declarations vs Expressions. Main difference is that declarations are always hoisted.

//Function Declaration - FUnction that can be used before its declared (hoisted)
function percentageOfWorld1 (population){
    return population / 7900 * 100;
}

const percentageChina = percentageOfWorld1(1441)
console.log(percentageChina);
const percentageUSA = percentageOfWorld1(365)
console.log(percentageUSA);
const percentageRussia = percentageOfWorld1(120)
console.log(percentageRussia)

//Function Expression - Essentially a function value stored in a variable
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const percentageChina2 = percentageOfWorld2(1441)
console.log(percentageChina2);
const percentageUSA2 = percentageOfWorld2(365)
console.log(percentageUSA2);
const percentageRussia2 = percentageOfWorld2(120)
console.log(percentageRussia2);

//Part 3 - Arrow functions - Great for a quick one line functions but has no THIS keyword. 

//Refactor of above into simple arrow function.

const percentageOfWorld3 = population => (population / 7900 * 100);
const percentageChina3 = percentageOfWorld3(1441)

console.log(percentageChina3);
const percentageUSA3 = percentageOfWorld3(365)
console.log(percentageUSA3);
const percentageRussia3 = percentageOfWorld3(120)
console.log(percentageRussia3)

// More Arrow Function practice, for when you need more than one parameters.

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1986, "Phil"));
console.log(yearsUntilRetirement(1991, "Sarah"));

// Part 4 - Functions Calling Other Functions

const describePopulation = (country, population) => {
    const worldPopulation = percentageOfWorld1(population)//Calling function above.
    return `${country} has a population of ${population} which is about ${worldPopulation} of the world population.`
}

console.log(describePopulation("China", 1445));
console.log(describePopulation("USA", 365));
console.log(describePopulation("Russia", 120));

//Part 5 - Intro to Arrays


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3 / 3);
const scoreKoalas = calcAverage(65,54,49)
const scoreDolphins = calcAverage(44,23,71)

function checkWinner (averageKoalas, averageDolphins){
    if (averageDolphins >= averageKoalas * 2){
        return `Dolphins win! ${scoreDolphins} to ${scoreKoalas}`
    } else if (averageKoalas >= averageDolphins * 2){
        return `Koalas win! ${scoreKoalas} to ${scoreDolphins}`
    } 
    else {return `No winner! ${scoreKoalas} and ${scoreDolphins}`}
}

console.log(checkWinner(scoreKoalas, scoreDolphins))
