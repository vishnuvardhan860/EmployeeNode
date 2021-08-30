//UC-7A to 7C Array Helper Functions And Calc Total Wage Using Array for Each Traversal or Reduce Method

let toEmpWage = 0;
function sum(empDailyWage){
    toEmpWage += empDailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + " Emp Wage: " + toEmpWage);
function totalWages(totalWage, dailyWage){
    return totalWage+dailyWage;
}
console.log("UC7A -Emp Wage With Reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B - Show The day along with wage using array map helper function 
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log("mapDayWithWageArr");

//UC 7C - show Days When Full Time Wage OF 160 Were Earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When Full time Wage Earned");
console.log(fullDayWageArr);