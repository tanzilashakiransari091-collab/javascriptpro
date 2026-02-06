function todaytime() {
  var time = new Date();
  console.log(time);
}
todaytime();



// function greetUser(){
//     document.write(`welcome to the website ${firstName} ${lastName}`);

// }
// var firstName =prompt("enter your first name");
// var lastName =prompt("enter your last name");
// greetUser();



// function sum(){
//     console.log(a+b);

// }
// var a =Number(prompt("enter number"));
// var b =Number(prompt("enter number"));

// sum();


function calculator(num1, num2, oper) {
  var result;
  if (oper === "*") {
    result = num1 * num2;
  } else if (oper === "/") {
    result = num1 / num2;
  } else if (oper === "+") {
    result = num1 + num2;
  } else if (oper === "-") {
    result = num1 - num2;
  } else if (oper === "%") {
    result = num1 % num2;
  } else {
    result = "select correct symbol";
  }
  console.log(result);
}
calculator(2, 2, "%");

function square(a) {
  console.log(a * a);
}
square(5);

// Q6. 
// function factorial(num){
//     result = 1;
//     for(var i =1 ;i <= num ; i++){
//         result = result * i
//     }
//     console.log(result);
// }
// factorial(5)

// // Q7. 
// function counting(startNum,endNum){
//     for(var i = startNum ;i <= endNum ; i++){
//         console.log(i);

//     }
// }
// counting(4,12)

// Q8. 
// function hypothe(base,per){
// function square(num){
//     return num**2
// }
// var hypothes = square(base) + square(per);
// return hypothes;

// }

// console.log(hypothe(2,3));

// Q9. 
// function area(width,height){
//    var a = width * height;
//     console.log(a);

// }
// area(6,7)
// function areavAr(){
//     var height = 20;
//     var width = 10
//     var a = height*width
//     console.log(a);

// }
// areavAr()

// Q10. 
// function palindrome(word) {
//   var myWord = "";
//   for (var i = word.length - 1; i >= 0; i--) {
//     myWord += word[i];
//   }
//   if (myWord === word) {
//     console.log("its plaindrome");
//   } else {
//     console.log("its not");
//   }
// }
// palindrome("hareem");

// Q11. 
function capital(str) {
  var mystr = str.split(" ");
  console.log(mystr);
  //     var word = "";
  //     for(var i = 0 ; i < mystr.length; i++){
  //          word += ` ${mystr[i][0].toUpperCase()}${mystr[i].slice(1)}`;

  //     }
  // return word;
  //     console.log(word);

  var cap = mystr[0][0].toUpperCase();
  var cap2 = mystr[1][0].toUpperCase();
  var cap3 = mystr[2][0].toUpperCase();
  var cap4 = mystr[3][0].toUpperCase();
  console.log(cap, cap2, cap3, cap4);
  var word1 = cap + mystr[0].slice(1);
  var word2 = cap2 + mystr[1].slice(1);
  var word3 = cap3 + mystr[2].slice(1);
  var word4 = cap4 + mystr[3].slice(1);
  var sentece = word1 + " " + word2 + " " + word3 + " " + word4;
  console.log(sentece);
}
// console.log(capital("my name is maheen zuhra and i am th estudent in smit how are you all"));

capital("the quick brown fox");

// 

// function longestWord(mystr) {
//   var mystr1 = mystr.split(" ");
//   console.log(mystr1);

//   var logW = "";
//   for (var i = 0; i < mystr1.length; i++) {
//     console.log(mystr1[i]);

//     if (mystr1[i].length > logW.length) {
//       logW = mystr1[i];
//     }
//   }
//   console.log(logW);
// }
// longestWord("Web Development Tutorial");

// Q13.
function occurrences(str,letter){
    var occur = str.indexOf(letter)
    console.log(occur);
    
}
occurrences("JSResourceS.com","o")


// Q14. 

function calcCircumference(r){
var circum = 2*(3.15)* r
return circum

}
console.log(calcCircumference(5));


function calcArea(rad){
    var circle = (3.15)* (rad**2) ;
    return circle;
}
console.log(calcArea(12));