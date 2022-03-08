
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3 / 3);
//Data 1
// const scoreKoalas = calcAverage(65,54,49)
// const scoreDolphins = calcAverage(44,23,71)
//Data 2

const scoreKoalas = calcAverage(23,34,27)
const scoreDolphins = calcAverage(85,54,41)

function checkWinner (averageKoalas, averageDolphins){
    if (averageDolphins >= averageKoalas * 2){
        return `Dolphins win! ${scoreDolphins} to ${scoreKoalas}`
    } else if (averageKoalas >= averageDolphins * 2){
        return `Koalas win! ${scoreKoalas} to ${scoreDolphins}`
    } else {
        return `No winner! ${scoreKoalas} and ${scoreDolphins}`
    }
}
console.log(checkWinner(scoreKoalas, scoreDolphins))