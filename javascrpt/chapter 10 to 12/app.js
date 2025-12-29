//question no 1:
var city = prompt("ENTER CITY NAME!");
if (city === "Karachi") {
    document.write("<h2>WELCOME TO THE CITY OF LIGHTS!</h2>");
    console.log(city);      
}

//question no 2:
var gender = prompt("GENDER:");
var note = ("<p>We’re glad you’re here. This platform is designed to help you discover, learn, and grow.<br>Take your time exploring — your journey starts here!</p>");

if (gender == "male") {
    document.write("<h2>Good Morning Sir!</h2>" + note);
    console.log(gender);
}
else if (gender == "female") {
    document.write("<h2>Good Morning Ma'am!</h2>" + note);
    console.log(gender);
}

//question no 3:
var color = prompt("Enter color of road traffic signal!");
if (color == "red") {
    document.write("<h2>Must stop!</h2>");
    console.log(color); 
}
else if (color == "yellow") {
    document.write("<h2>Ready to move!</h2>");
    console.log(color); 
}
else if (color == "green") {
    document.write("<h2>Move now!</h2>");
    console.log(color);    
}

//question no 4:
var fuel = prompt("Remaining fuel in car (in litres)");
if (fuel == "0.25 litres") {
    document.write("<h2>Please refill the fuel in your car!</h2>");
    console.log(fuel);    
}

//question no 5:
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");                      
    console.log(a);
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");                     
    console.log(b);
}

var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");                                        
    console.log(c);
}
else if (c === 13) {
    alert("Condition 2 is true");                                      
    console.log(c);
}
else if (++c < 14) {
    alert("Condition 3 is true");                                      
    console.log(c);
}
else if (c === 14) {
    alert("Condition 4 is true");                                    
    console.log(c);
}

var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;

if (totalCost === labourCost + materialCost) {                        
    alert("The cost equals");
    console.log(totalCost);
}

if (true) {
    alert("true");
    console.log(true);
}

if (false) {
    alert("false");
    console.log(false);
}

if ("car" < "cat") {
    alert("Car is smaller than cat");                                  
    console.log("Car is smaller than cat");
}

// question no 6:
var sub1 = +prompt("Enter marks of subject 1");
var sub2 = +prompt("Enter marks of subject 2");
var sub3 = +prompt("Enter marks of subject 3");

var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var Grade, Remarks;

if (percentage > 80) {
    Grade = "A-one"; 
    Remarks = "Excellent";
}
else if (percentage > 70) {
    Grade = "A"; 
    Remarks = "Good";
}
else if (percentage > 60) {
    Grade = "B"; 
    Remarks = "You need to improve!";
}
else {
    Grade = "Fail"; 
    Remarks = "Sorry!";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<b>Total Marks : " + totalMarks + "<br></b>");
document.write("<b>Marks Obtained : " + obtainedMarks + "<br></b>");
document.write("<b>Percentage : " + percentage + "%<br></b>");
document.write("<b>Grade : " + Grade + "<br></b>");
document.write("<b>Remarks : " + Remarks + "</b>");

// question no 7:
var secretNum = 7;
var userGuess = +prompt("Guess the secret number (1 to 10)");

if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
}
if (userGuess + 1 === secretNum) {
    alert("Close enough to the correct answer");
} else { 
    alert("Try again!");
}

// question no 8:
var weather = +prompt("Check Weather");
var finalWeather = weather / 3;
alert("Today weather is " + finalWeather);

// question no 9:
var num = +prompt("Enter a number:");
if (num % 2 === 0) {
    alert("The number is Even");
} else {
    alert("The number is Odd");
}

// question no 10:
var temperature = +prompt("Enter today's temperature");
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The weather today is normal.");
}
else if (temperature > 20) {
    alert("Today's weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
} else {
    alert("It's very cold today");
}

// question no 11:
var firstNum = +prompt("Enter first number");
var secondNum = +prompt("Enter second number");
var operation = prompt("Enter operation like (+,-,*,/,% )");

var result;

if (operation === "+") {
    result = firstNum + secondNum;
}
else if (operation === "-") {
    result = firstNum - secondNum;
}
else if (operation === "*") {
    result = firstNum * secondNum;
}
else if (operation === "/") {
    result = firstNum / secondNum;
}
else if (operation === "%") {
    result = firstNum % secondNum;
} else {
    alert("Invalid operator");
}

alert("Result : " + result);

