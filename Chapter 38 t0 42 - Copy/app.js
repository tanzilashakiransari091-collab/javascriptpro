function power(a, b) {
    var result = Math.pow(a, b);
    return result;
}

document.write(power(2, 3) + "<br><br>");   
document.write(power(5, 2)+ "<br><br>");   

function power(a,b){
    var result = a ** b
    return result;
}
document.write(power(2,3)+ "<br><br>")
document.write(power(4,2)+ "<br><br>")


function checkLeapYear(year){
    if(year % 4 == 0){
        return "leap year <br><br>";
    }else{
        return "not a leap year  <br><br>"
    }
}

var y = prompt("Enter a year:")
var result = checkLeapYear(y)
document.write(result)


function calculateS(a,b,c){
    var S = (a+b+c)/2;
    return S;
}

function calculateArea(a,b,c){
    var S = calculateS(a,b,c)
    var area = S * (S-a)*(S-b)*(S-c)
    return area;
}

var a = prompt("Enter side a:")
var b = prompt("Enter side b:")
var c = prompt("Enter side c:")

var result = calculateArea(a,b,c)
document.write("Area value="+ result + "<br><br>")


function calculateAvg(m1,m2,m3){
    var avg = (m1+m2+m3)/3;
    return avg;
}

function calculatePercentage(m1,m2,m3){
    var totalMarks = 300;
    var obtained = m1+m2+m3;
    var percent = (obtained/totalMarks)* 100;
    return percent;
}

function mainFunc(){
    var marks1 = +prompt("Enter marks of subject 1:");
    var marks2 = +prompt("Enter marks of subject 2:");
    var marks3 = +prompt("Enter marks of subject 3:");

    var avg = calculateAvg(marks1,marks2,marks3)
    var percent = calculatePercentage(marks1,marks2,marks3)

    document.write("Avg Marks: "+ avg + "<br><br>")
    document.write("pecetage: "+ percent + "%<br><br>")
}
mainFunc();


function index(str, char) {
    var num;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            no = i
            break;
        }
    }
    return num
}
var str = "hello world"
var indexOf = prompt("Write character to find ");
var result = index(str, indexOf);
document.write("The indexOf " + indexOf + " is " + result +"<br><br>")


function removeVowels(sentence) {
    var result = ""; 

    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i];

        if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' &&
            char !== 'A' && char !== 'E' && char !== 'I' && char !== 'O' && char !== 'U') {
            result += char; 
        }
    }

    return result;
}

var sentence = "please read this application and give me gratuity";
document.write(removeVowels(sentence)+ "<br><br>"); 


function countDoubleVowels(sentence) {
    var count = 0;

    for (var i = 0; i < sentence.length - 1; i++) {
        var first = sentence[i];
        var second = sentence[i + 1];

        
        switch (first) {
            case 'a': 
            case 'e': 
            case 'i': 
            case 'o': 
            case 'u':
            case 'A': 
            case 'E': 
            case 'I':
            case 'O':
            case 'U':
        switch (second) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
              count++; 
                  break;
            }
                break;
        }
    }

    return count;
}

var sentence = "please read this application and give me gratuity";
document.write(countDoubleVowels(sentence)+ "<br><br>"); 

function toMeters(km){
    return km * 1000;
}

function toFeet(km){
    return km * 3280.84; // 1 km = 3280.84 feet
}

function toInches(km){
    return km * 39370.1; // 1 km = 39370.1 inches
}

function toCentimeters(km){
    return km * 100000; // 1 km = 100,000 cm
}

var distanceKm = parseFloat(prompt("Enter distance in kilometers:"));

document.write("Distance in meters: " + toMeters(distanceKm)+ "<br><br>");
document.write("Distance in feet: " + toFeet(distanceKm)+ "<br><br>");
document.write("Distance in inches: " + toInches(distanceKm)+ "<br><br>");
document.write("Distance in centimeters: " + toCentimeters(distanceKm)+ "<br><br>");


var workingHours = +prompt("Enter your working hours: ")
var overTime, overTimePay;
var overTimeHourPay = 12;

if(workingHours > 40){
  overTime = workingHours - 40;
  overTimePay = overTime * overTimeHourPay;
  document.write("Your overtime pay cost is: " + overTimePay + "rupees");
}

else{
  document.write("You have to work more to get overtime <br><br>")
}



function calculateNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    amount = amount % 100;

    var fifties = Math.floor(amount / 50);
    amount = amount % 50;

    var tens = Math.floor(amount / 10);
    amount = amount % 10;

   
    document.write("Hundred notes: " + hundreds+ "<br>");
  document.write("Fifty notes: " + fifties+ "<br>");
    document.write("Ten notes: " + tens+ "<br>");
}

var amount = +prompt("Enter amount to withdraw:"); 
calculateNotes(amount);


