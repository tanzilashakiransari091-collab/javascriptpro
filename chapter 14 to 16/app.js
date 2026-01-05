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


