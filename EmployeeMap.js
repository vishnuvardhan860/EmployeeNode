//UC-8 Storing Daily Wage In A Map

const MAX_HOURS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new map();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    letEmpHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs)); 

}

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalwage + dailyWage; 
}
console.log("UC7A - Emp Wage MapTotalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));