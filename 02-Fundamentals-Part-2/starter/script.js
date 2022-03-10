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

const countryPopulations = [365, 1445, 120, 65];
console.log(countryPopulations.length === 4);//Querying if the array has 4 elements.
console.log(countryPopulations.length === 3);//Same as above, but 3. Should be false.

// Calls function above (percentageofworld1)
const percentages = 
[percentageOfWorld1(countryPopulations[0]), 
percentageOfWorld1(countryPopulations[1]), 
percentageOfWorld1(countryPopulations[2]), 
percentageOfWorld1(countryPopulations[countryPopulations.length - 1])]; 
console.log(percentages);
//.length - 1 etc is good practice for the last in array.

// Part 6 - Methods - (Basic Array Operations)
const neighbours = ["Belgium", "France", "Poland"]
console.log(neighbours);
neighbours.push ("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
//Use ! changes it to DOES NOT include.

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country...")
}
console.log(neighbours.indexOf("Poland"));
neighbours[neighbours.indexOf("Poland")] = "Polish Federation";//Mutates the array element
console.log(neighbours)

// Part 7 - Intro to Objects

// const myCountry = {
//     country: "England",
//     capital: "London",
//     language: "English",
//     population: 65,
//     neighbours: ["Scotland", "Wales"]
// }
// console.log(myCountry);
// console.log(myCountry.country);//Dot notation, we have to put a value.
// console.log(myCountry['country']);//Bracket notation, we can put anything.

// Part 8 - Dot vs Bracket Notification

//Lecture Challenge
// const phil = {
//     firstName: "Phil",
//     friends: ["George", "Chris", "Beril"],
//     job: "Teacher",
//     lastName: "Burkhill",
//     location: "Liverpool",
//     twitter: "@philcodebreaker",
// }
// console.log(`${phil.firstName} has ${phil.friends.length} friends, and his best friend is ${phil.friends[0]}!`)

//Using object and values from PART 7

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.population}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}!`)

// Part 9 - Object Methods. 
//A function attached to an object is known as a method. So object methods.
//.this key, why would we use it? DRY (DONT REPEAT YOURSELF)

//Lecture Challenge. Write method for returning info.

// const phil = {
//     firstName: "Phil",
//     lastName: "Burkhill",
//     birthYear: 1986,
//     friends:["George", "Chris", "Beril"],
//     job: "English Teacher",
//     location: "Liverpool",
//     twitter: "@philycodebrreaker",
//     passport: true,
//     //Methods
//     calcAge: function(){
//         this.age = 2021 - this.birthYear
//         return this.age;
//     },
//     //Second method uses the calcAge function too!
//     personInfo: function (){
//         return `${this.firstName} is ${this.calcAge()} years old. He works as a ${this.job}, he has ${this.friends.length} friends and his twitter handle is ${this.twitter}! He has ${this.passport ? "a" : "no"} passport, so ${this.passport ? "can" : "can not"} travel.`//Ternary operator!
//     }
//     //Order doesn't really matter because of hoisting.
// }
// console.log (phil.personInfo());//Phil is the object calling the method (personInfo)

//Use the object from Part 7

const myCountry = {
    country: "England",
    capital: "London",
    language: "English",
    population: 65,
    neighbours: ["Scotland", "Wales"],
    describeMyCountry: function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}!`
    },
    checkIsland: function(){
        return this.neighbours ? this.neighbours.length === 0 : this.neighbours.length > 0}
        //more simple way
        //return this.neighbours.length === 0 ? true : false;
    } //if this.neighbours legnth is equal to 0, true else neighbours length greater than 0 false.

console.log (myCountry.describeMyCountry())
console.log (myCountry.checkIsland())

//Part 10 - For Loop - for loop repeats until we tell it to stop, usually with a counter.

//(Executed before the execution of the code, condition for executing the code, executed after the code block is executed,.)
//i = counter variable. good practice to use i especially in variables.
for (let i = 1; i <= 50; i++){ 
    console.log (`Voter number ${i} is currently voting.`)
}

//Part 11 - Looping Arrrays, Breaking and Continuing

// const years = [1986, 2001, 2005, 2019];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push (2021 - years[i]);
// }
// console.log(ages);

//Using countrypopulations array from above
//const countryPopulations = [365, 1445, 120, 65];
const percentages2 = [];
for (let i = 0; i < countryPopulations.length; i++){
    percentages2.push (percentageOfWorld1(countryPopulations[i]));
}
console.log(percentages2)
//Don't forget the i. Need more practice?

//Part 12 -
const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
console.log(``)




