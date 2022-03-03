const markHeight = 1.69; 
const markMass = 78;
const markBMI = parseFloat(markMass / markHeight ** 2).toFixed(2);
const johnHeight = 1.95;
const johnMass = 92;
const johnBMI = parseFloat(johnMass / johnHeight ** 2).toFixed(2);

/*
const markHeight = 1.88; 
const markMass = 95;
const markBMI = parseFloat(markMass / markHeight ** 2).toFixed(2); //parseFloat is better to round numbers to a decimal place
const johnHeight = 1.76;
const johnMass = 85;
const johnBMI = parseFloat(johnMass / johnHeight ** 2).toFixed(2); // As above. Better than math.Round*/

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI})is higher than Mark's BMI (${markBMI})!`)
}