var num = +prompt("Enter a psoitive integer")
if(num>0){
    document.write("number"+ num + "<br>")
    document.write("round of value"+ Math.round(num) + "<br>")
    document.write("floor value"+ Math.floor(num) + "<br>")
    document.write("ceil value"+ Math.ceil(num) + "<br><br>")
}else{
   alert("Enter a negative integer please!")
}

var num = +prompt("Enter a negative integer")
if(num<0){
    document.write("number"+ num + "<br>")
    document.write("round of value"+ Math.round(num) + "<br>")
    document.write("floor value"+ Math.floor(num) + "<br>")
    document.write("ceil value"+ Math.ceil(num) + "<br><br>")
}else{
     alert("Enter a negative integer please!")
}


var num = +prompt("Enter an absolute num")
document.write("The absoluete value of" + num + "is"+ Math.abs(num) +"<br><br>" )

var randomNum = Math.random() * 6
document.write("random dice value"+ Math.floor(randomNum)+"<br><br>")

var coin = Math.random() *2
coin = Math.floor(coin)

if(coin == 0){
    document.write("Random coin value: Heads"+"<br><br>")
}else{
    ("Random coin value: tails")
}


var randomNumber = Math.random() * 100
document.write("random num between 1 and 100 is:" + Math.floor(randomNum)+"<br><br>")

var userInput = +prompt("Enter your weight in kilograms")
var weight = parseFloat(userInput)
document.write("The weight of user is"+ " " + weight+ " " + "kilograms"+"<br><br>")

var secretNumber = Math.floor(Math.random() * 10) ;

var userGuess = Number(prompt("Enter a number between 1 and 10"));
if(userGuess === secretNumber) {
        document.write("Congratulations! You guessed the secret number");
} else {
        document.write("Try again! The secret number was " + secretNumber);
}