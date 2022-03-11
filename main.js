let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getUTCDate();
let currentYear = new Date().getFullYear();

function calcDate() {
    console.log(currentMonth + "/" + currentDay + "/" + currentYear) 
}
calcDate()

let secondsPerMonth = 2592000
let secondsPerYear = 31104000

function secondsSinceBirth(birthMonth,birthYear) {
    let year1 = secondsPerMonth * (12 - birthMonth);
    //console.log(year1)
    let age = currentYear - birthYear;
    let midYears = secondsPerYear * (age - 1);
    //console.log(midYears)
    let endYear = secondsPerMonth * currentMonth;
    // console.log(endYear)
    let totalSeconds = year1 + midYears + endYear;
    console.log(totalSeconds); 
}

secondsSinceBirth(2,1997)