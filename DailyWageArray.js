// UC-6 Storing Daily Wage in a Array

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HOURS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.florr(Math.random * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calucDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - total Days: " + totalEmpHrs + " Emp wage: " + empWage);