// Chap # 06 to 09

// Question #01
// var a=1;

// document.write("<h1>Result:</h1>");
// document.write("The value of a is: " +a);
// document.write("<br /><br />.............................................");
// document.write("<br /><br />The value of ++a is: " + ++a);
// document.write("<br />Now the value of a is: " + a);
// document.write("<br /><br />The value of a++ is: " + a++);
// document.write("<br />Now the value of a is: " + a);
// document.write("<br /><br />The value of --a is: " + --a);
// document.write("<br />Now the value of a is: " + a);
// document.write("<br /><br />The value of a-- is: " + a--);
// document.write("<br />Now the value of a is: " + a);

// Question #02
// var a = 2;
// var b = 1;

// document.write("a is " +a);
// document.write("<br />b is" +b);

// var result = --a - --b + ++b + b--;
// --a;1
// --a - --b;1
// --a - --b + ++b;2
// --a - --b + ++b + b--;3

// document.write("<br />result is " +result);

// Question #03
// var name = prompt("Enter your Full Name");
// alert("Hello " + name)

// Question #04
// undefined

// Question #05
// var num = prompt("Enter a number");
// var num5 = 5
// var count = 0
// if (num < 1) {
//     document.write("<h2>Table Of 5</h2>");
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
//     document.write("<br />" + num5 + " x " + ++count + " = " + num5 * count);
// }

// if (num >= 1) {
//     document.write("<h2>Table Of " + num + "</h2>");
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
//     document.write("<br />" + num + " x " + ++count + " = " + num * count);
// }

// Question #06
// var firSub, mrkFirSub, secSub, mrkSecSub, 
// thirSub, mrkThirSub, totMark, firSubPer, secSubPer, thirSubPer
// ,sumObtnMrk , sumTotMrk , totPer;

// firSub = prompt("Enter the name of first subject");
// secSub = prompt("Enter the name of second subject");
// thirSub = prompt("Enter the name of third subject");
// mrkFirSub = prompt("Enter the marks of " + firSub + " subject");
// mrkSecSub = prompt("Enter the marks of  " + secSub + " subject");
// mrkThirSub = prompt("Enter the marks of " + thirSub + " subject");
// totMark = 100
// firSubPer = mrkFirSub / totMark * 100
// secSubPer = mrkSecSub / totMark * 100
// thirSubPer = mrkThirSub / totMark * 100
// sumObtnMrk = firSubPer + secSubPer + thirSubPer
// sumTotMrk = totMark*3
// totPer = sumObtnMrk/sumTotMrk *100
// document.write(
//     "<table><tr> <th>Subject</th> <th>Total Marks</th> <th>Obtain Marks</th> <th>Percentage</th></tr>" +
//     "<tr> <td>" + firSub + "</td> <td>" + totMark + "</td> <td>" + mrkFirSub + "</td> <td>" + firSubPer + "%</td></tr>" +
//     "<tr> <td>" + secSub + "</td> <td>" + totMark + "</td> <td>" + mrkSecSub + "</td> <td>" + secSubPer + "%</td></tr>" +
//     "<tr> <td>" + thirSub + "</td> <td>" + totMark + "</td> <td>" + mrkThirSub + "</td> <td>" + thirSubPer + "%</td></tr>" +
//     "<tr> <td></td> <td>" + sumTotMrk + "</td> <td>" + sumObtnMrk + "</td> <td>" + totPer + "%</td></tr> </table>"
// );
