var multi_arr = []
console.log(multi_arr);

var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]


var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < counting.length; i++) {
    console.log(`${counting[i]}`);
    document.write(`<h1>${counting[i]}</h1>`);
}


var table = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter length of multiplication table");

document.write("<h3>Multiplication table of " + table + "</h3>");
document.write("<h4>Length " + length + "</h4><br>");

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br><br><br>");
}


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br><br><br>")
    console.log(fruits[i])
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i]);
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}



document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br><br>");

document.write("<b>Reverse counting:</b><br>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br><br>");


document.write("<b>Even:</b><br>");
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + ", ");
    }
}
document.write("<br><br>");

document.write("<b>Odd:</b><br>");
for (let i = 1; i < 20; i++) {
    if (i % 2 !== 0) {
        document.write(i + ", ");
    }
}
document.write("<br><br>");

document.write("<b>Series:</b><br>");
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + "k, <br>");
    }
}


var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
userInput = userInput.toLowerCase();

var found = false;


for (var i = 0; i < bakeryItems.length; i++) {

    if (bakeryItems[i] === userInput) {
        found = true;
    }
}


if (found === true) {
    document.write(userInput + " is <b>available</b> in our bakery");
} else {
    document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery<br>");
}




var arr = [24, 53, 78, 91, 12];

document.write("<b>Array items:</b> " + arr + "<br>");

var largest = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

document.write("<b>The largest number is</b> " + largest + "<br>");



var arr = [24, 58, 78, 91, 12];

document.write("<b>Array items:</b> " + arr + "<br>");

var smallest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

document.write("<b>The smallest number is</b> " + smallest + "<br>");