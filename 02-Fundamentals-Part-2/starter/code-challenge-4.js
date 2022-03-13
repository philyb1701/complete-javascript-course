//Recreate Tip Calculator with while loops.

//OG code for reference

    function calcTip (bill){
        return bill >= 50 && bill <= 300 ? 15/100*bill : 20/100*bill; }

    function calcAverage (arr){
        const sum = 0;
    }
// const bills = [125, 555, 44]
// console.log(calcTip(bills[0]));
// console.log(calcTip(bills[1]));
// console.log(calcTip(bills[2]));
// const total = [bills[0]+calcTip(bills[0]), bills[1]+calcTip(bills[1]), bills[2]+calcTip(bills[2])]
// console.log(total);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    tips.push (calcTip(bills[i]));
    totals.push (calcTip(bills[i])+bills[i]);
}
console.log(tips)
console.log(totals)

//alt way from video

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills.length; i++){
    const tip1 = calcTip(bills1[i]);
    tips1.push(tip1)
    totals1.push(tip1 + bills1[i])
}

console.log(tips1)
console.log(totals1)
//Why is tip a const? Well the original si not mutating, just a new one is created.

function calcAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));