//question # 1:
var a = 10;
console.log(a);
document.write("<b>1.  </b>" + "The value of a is: " + a + "<br><br>");  //10

document.write("The value of ++a is: " + ++a + "<br>");  //11
document.write("Now the value of a is: " + a + "<br><br>");  //11

document.write("The value of a++ is: " + a++ + "<br>");   //11
document.write("Now the value of a is: " + a + "<br><br>");   //12

document.write("The value of --a is: " + --a + "<br>");   //11
document.write("Now the value of a is: " + a + "<br><br>");   //11

document.write("The value of a-- is: " + a-- + "<br>");  //11
document.write("Now the value of a is: " + a + "<br>");  //10

//question # 2:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<b>2.  </b> <br>a is 1 <br> b is 0 <br> result is 3");

//question # 3:
var firstName = prompt("Enter your first name");
console.log(firstName);
var lastName = prompt("Enter your last name");
console.log(lastName);
document.write("<h4 class = 'heading'>3.  " + "<br>" + "Hello " + firstName + " " + lastName + "! Welcome 😊" + "</h4>");
document.write("<p class = 'para'>Good morning, everyone! It is with great enthusiasm that I welcome you to the first day of our 2025-2026 journey. Whether you are returning or joining us for the first time, you are the heart and soul of this institute.</p></br><hr>")

//question # 4:
var num = prompt("Enter a number");
console.log(num);
var i = 1
document.write("<h2 class = 'heading'>Table of " + num + "</h2><br>");
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")
i++
console.log(num + " x "+ i + " = "+ i*num);
document.write(num + " x "+ i + " = "+ i*num + "<br>")

//question # 5:
var sub1 = prompt("Enter first subject!");
console.log(sub1);
var sub2 = prompt("Enter second subject!");
console.log(sub2);
var sub3 = prompt("Enter third subject!");
console.log(sub3);

var totalMarks = 100;
console.log(totalMarks);

var m1 = +prompt("Enter marks of " + sub1);
console.log(m1);
var m2 = +prompt("Enter marks of " + sub2);
console.log(m2);
var m3 = +prompt("Enter marks of " + sub3);
console.log(m3);

var obtained = m1 + m2 + m3;
console.log(obtained);
var percentage = (obtained / 300) * 100;
console.log(percentage);

document.write("<table border='1'>");

document.write("<tr><th>Subject</th><th>Total</th><th>Obtained</th><th>%</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + m1 + "</td><td>" + (m1) + "%</td></tr>");

document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + m2 + "</td><td>" + (m2) + "%</td></tr>");

document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + m3 + "</td><td>" + (m3) + "%</td></tr>");

document.write("<tr><th></th><th>300</th><th>" + obtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");

document.write("</table>");
                                