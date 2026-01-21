var fName = prompt("Enter your first name")
var lName = prompt("Enter your last name")
var fullName = fName.concat(" "+ lName)
console.log(fullName)

var phone = prompt("Enter your favourite mobile phone model")
console.log("My favourite mobile phone model is"+ phone)
console.log("Length of string:"+ phone.length)

var country = "Pakistan"
console.log("string"+" "+ country)
console.log("Index of n:"+ country.indexOf("n"))

var World = "Hello World"
console.log("string:"+ " "+ World)
console.log("Index of n:"+ World.lastIndexOf("l"))

var countryName = "Pakistani"
console.log("string"+ countryName)
console.log("character at 3rd index:"+ countryName.charAt(3))

var city = ("Hyderabad")
console.log (city.replace("Hyderabad","Islamabad"))

var message = "Ali and sami are bestfriends. They play circket and football together"
console.log(message.replaceAll("and","&"))

var str = "472"
console.log("value:" + " "+  str)
console.log("Type:" + " "+ typeof str)

var str = "472"
console.log("value:" + " "+str )
console.log("Type:" + " "+ typeof str)

var dryFruit = prompt("Enter here")
console.log("user input:" + " "+ dryFruit)
console.log("upper case:"+ ""+ dryFruit.toUpperCase())

var userInput = prompt("Enter a word")
var firstChar = userInput.slice(0,1).toUpperCase()
var remainingChar = userInput.slice(1).toLowerCase()
var titleCase = firstChar+remainingChar
console.log(titleCase)

var num2 = 35.36
var string = num2.toString()
var result = string.replace(".","")
console.log("Value is:"+ num2)
console.log(result)

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");
userInput = userInput.toLowerCase();

var found = false;

for (var i = 0; i < bakeryItems.length; i++) {
  if (bakeryItems[i] === userInput) {
    console.log(userInput + " is available at index " + i + " in our bakery");
    found = true;
    break;
  }
}

if (found === false) {
  console.log("We are sorry. " + userInput + " is not available in our bakery");
}



var university = "University of karachi"

for(i=0 ; i<university.length ; i++){
    console.log(university.charAt(i))
}


var country2 = "Pakistan"
console.log(country2)
console.log(country2.charAt(7))


// var text = "The quick brown fox jumps over the lazy dog"
// console.log(text)