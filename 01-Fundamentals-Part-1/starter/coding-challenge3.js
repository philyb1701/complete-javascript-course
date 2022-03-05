//Data 1
// const dolphinsScore = Math.round((96 + 108 + 89) / 3);
// const koalasScore = Math.round((88 + 91 + 110) / 3);

//Data 2
// const dolphinsScore = Math.round((97 + 112 + 101) / 3);
// const koalasScore = Math.round((109 + 95 + 123) / 3);

//Data 3
const dolphinsScore = Math.round((97 + 112 + 101) / 3);
const koalasScore = Math.round((88 + 91 + 106) / 3);

const minimumScore = 100;

console.log(dolphinsScore, koalasScore)

if (dolphinsScore > koalasScore && dolphinsScore >= minimumScore){
    console.log("Dolphins win!")
} else if (koalasScore > dolphinsScore && koalasScore >= minimumScore){
    console.log("Koalas win!")
} else if (koalasScore === dolphinsScore && dolphinsScore >= minimumScore){
    console.log("It's a draw!")
} else {
    console.log("No one wins.")
}
    

