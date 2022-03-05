
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

//Seventh task - type conversion and coercion
let n = '1' + 1;//11
n = n - 1;//10
console.log(n);//Will output n
console.log(9 + '5')//Javascript (+ operator will convert numbers to strings).
console.log('9'-'5');//Javascript (- operator converts to numbers). 
console.log('19' - '13' + '17'); // "617"
console.log('19' - '13' + 17); // 23
console.log("123" < 57); //False
console.log(5 + 6 + '4' + 9 - 4 - 2);//*11)4(3)

//Eigth Task - Truthy and Falsy

// 5 falsy values: 0, '', undefined, null, NaN
// Anything else is truthy.

//Ninth Task - Inequality operators == vs ===
//=== doesn't perform type coercion, only returns true when both are EXACTLY the same.
//== loose equality does type coercion, so strings can equal numbers. 
//!== (strictly), !=== (strictly not) also works.

//let numNeighbours = Number(prompt("How many countries border your own country?","No. of borders?"));
//This uses a string by default. Number forces it to use number. Commented out to get rid of prompt.
// if (numNeighbours === 1) {
//     console.log("Only 1 border!")
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border!") 
// } else {console.log("No borders.")
// }

//Tenth Task - Logical Operators

if (language === "English" && population < 50 && isIsland){
    console.log(`You should live in ${country}`)
}   else {console.log(`${country} does not meet your criteria.`)
}

//Eleventh Task - Switch Statement
switch (language) {
    case "mandarin": // language === "mandarin" - strict equality
        console.log("MOST number of native speakers");
        break;
    case "spanish":
        console.log("SECOND most number of native speakers.");
        break;
    case "english":
        console.log("THIRD most number of native speakers");
        break;
    case "hindi":
        console.log("FOURTH most number of native speakers.")
        break;
    case "arabic":
        console.log("FIFTH most number of native speakers.")
        break;
    default:
        console.log("A great language too!")
}

//Task 12 - Conditional Ternary Operator

// if (population > 33) {
//     console.log(`${country}'s population is above average.`)
// } else {
//     console.log(`${country}'s population is below average.`)
// } 

//Below is the same as above, using ternary operator

population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);

//Below is the same, more efficident and can use tenary operator within template literals!

console.log(`${country}'s population ${population > 33 ? "above" : "below"} average`,
);