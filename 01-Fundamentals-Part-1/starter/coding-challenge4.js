//Data Values - 275, 40, 430
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 15/100*bill : 20/100*bill; //if bill =>50 AND bill <=300 THEN(?) bill = 15 :(ELSE) bill = 20;

console.log(`The bill was £${bill}, the tip was £${tip}, and the total value is £${bill+tip}`)







// population > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);

// //Below is the same, more efficident and can use tenary operator within template literals!

// console.log(`${country}'s population ${population > 33 ? "above" : "below"} average`,
// );