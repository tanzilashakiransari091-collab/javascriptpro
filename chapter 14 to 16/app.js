// declare and initialize a string array
var fruits = ["Apple", "Banana", "Orange", "Peach"];

// declare and initialize a number array
var num = [0, 1, 2, 3, 70];

// declare and initialize a boolean array
var boolArray = [true, false];

// declare and initialize a mixed array
var mixedArray = [true, "Ali", 52, "Nameera"];


// Declares an array of qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

console.log("Qualifications:");
document.write("<h2>Qualifications:</h2>");

for (var i = 0; i < qualifications.length; i++) {
  console.log(qualifications[i]);
  document.write(qualifications[i] + "<br>");
}

document.write("<br>");


// Students scores & percentages
var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

document.write("<h2>Students Result:</h2>");

for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;

  console.log(
    "Score of " + students[i] + " is " + scores[i] +
    ". Percentage: " + percentage + "%"
  );

  document.write(
    "Score of " + students[i] + " is " + scores[i] +
    ". Percentage: " + percentage + "%<br>"
  );
}

document.write("<br>");


// Colors array operations
var colors = ["Red", "Green", "Blue"];
console.log("Initial Array: " + colors);
document.write("<h2>Colors Array:</h2>");
document.write("Initial Array: " + colors + "<br><br>");

// Add color at the beginning
var addStartColor = prompt("Enter a color to add at the beginning:");
colors.unshift(addStartColor);
console.log("After unshift: " + colors);
document.write("After adding at beginning: " + colors + "<br><br>");

// Add color at the end
var addEndColor = prompt("Enter a color to add at the end:");
colors.push(addEndColor);
console.log("After push: " + colors);
document.write("After adding at end: " + colors + "<br><br>");

// Add two more colors at the beginning
colors.unshift("Blue", "White");
console.log("After adding two colors at beginning: " + colors);
document.write("After adding two colors at beginning: " + colors + "<br><br>");

// Delete the first color
colors.shift();
console.log("After shift: " + colors);
document.write("After deleting first color: " + colors + "<br><br>");

// Delete the last color
colors.pop();
console.log("After pop: " + colors);
document.write("After deleting last color: " + colors + "<br><br>");

//ask the user at which index he /she wants to add a color and color name then add the color to desired position/index . display the updated array in your browser .//
var index = +prompt("At which index do you want to add the color?")
var colorName = prompt("Enter the color name")
colors.splice(index, 0 , colorName);

console.log("Updated Array: " + colors);
document.write("Updated Array: " + colors +"<br><br>");



//ask the user at which index he /she wants to delete colors,and how many color he she want to delete then remove the same number of color from user defined position index display the updated array in your browser//

var index = +prompt("At which index do you want to delete the color?")
var deletecount = prompt("How many colors you want to delete")
colors.splice(index, deletecount);
document.write("Updated Array: " + colors + "<br><br>");
console.log("Updated Array:", colors);


var stuScores = ["320" , "230", "480" , "120"]
console.log(stuScores.sort());


//write an array to initialize an array with city name , copy 3 array elements from cities array to selectedcitites array .//
var cities = ["karachi","lahore","islamabad","Quetta","peshawar"]

var selectedcities = cities.slice(2,4)
console.log(cities)
console.log(selectedcities)
document.write("Cities List: " + cities + "<br><br>")
document.write("Selected Cities List: " + selectedcities)


//write a program to create a single string from the below mentioned array://
//var arr = [""This", "is", "my", "cat""]//
var cat = ["This", "is", "my", "cat"]
console.log(cat.join(" "))



//Create a new array, store value one by one in such a way that you can access the value in the order in which they were stored. (First In First Out)
var queue = [];

queue.unshift("A");
queue.unshift("B");
queue.unshift("C");

console.log("Queue after inserting values: " + queue)
document.write("Queue after inserting values: " + queue + "<br><br>");

var firstOut = queue.shift();

console.log("First Out Value: " + firstOut)
console.log("Remaining Queue: " + queue)
document.write("First Out Value: " + firstOut + "<br><br>");
document.write("Remaining Queue: " + queue);

