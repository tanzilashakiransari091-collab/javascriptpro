// question # 1;
var date = new Date();
document.write(date + "<br>");

// question # 2;
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = month[new Date().getMonth()];
document.write(`Current Month : ${currentMonth} <br>`);

// question # 3;
var today = new Date();
var onlyDay = today.toString();
document.write("Today is " + onlyDay.slice(0,3));

// question # 4;
var days = new Date();
var toDay1 = days.getDate();
if (toDay1 === 0 || toDay1 === 6) {
    console.log("It's fun day!");
} else {
   console.log("It's a weekday.");
}

// question # 5;
var newDate = new Date();
var gtDat = newDate.getDate();
console.log(gtDat);

if (gtDat <= 15) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

