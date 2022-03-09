//OLD CODE FOR REFERENCE

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? 15/100*bill : 20/100*bill; //if bill =>50 AND bill <=300 THEN(?) bill = 15 :(ELSE) bill = 20;

// console.log(`The bill was £${bill}, the tip was £${tip}, and the total value is £${bill+tip}`)

//OG CODE
// function calcTip (bill){
//     bill = bill >= 50 && bill <= 300 ? 15/100*bill : 20/100*bill;
//     return bill
// }

function calcTip (bill){
    return bill >= 50 && bill <= 300 ? 15/100*bill : 20/100*bill;
}

const bills = [125, 555, 44]
console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));
const total = [bills[0]+calcTip(bills[0]), bills[1]+calcTip(bills[1]), bills[2]+calcTip(bills[2])]
console.log(total);

//Did it differently, but still works the same!