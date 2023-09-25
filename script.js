/* chapter No : 21(Changing Case) */
// Q1
// var allLower = userInput.toLowerCase();
// Q2
// var x = "Hello World";
// x = x.toLowerCase();
// console.log(x);
// Q3
// var y = "hello world";
// y = y.toUpperCase();
// console.log(y);
// Q4
// var a = "HELLO USER😊";
// var b = a.toLowerCase();
// console.log(b);
// Q5
// var arry = ["HELLO WORLD"];
// var newArr = arry[0].toLowerCase();
// console.log(newArr);
// Q6
// var A = "Hello User🙂";
// var B = A.toUpperCase();
// alert(B);
// Q7
// var cityName = ["karachi", "lahore", "islamabad", "hyderabad", "multan", "peshawar", "quetta"];
// var userInput = prompt("Enter Where do you live?");
// var firstCharacter = userInput.slice(0, 1).toUpperCase();
// var remainCharacters = userInput.slice(1).toLowerCase();
// var completeWord = firstCharacter + remainCharacters;
// for (var i = 0; i < cityName.length; i++) {
//     if (completeWord === cityName[i]) {
//         console.log("It's a Match for Your City...");
//         break; 
//     }
// }
// console.log(completeWord);
// ===================================CHAPTER 21 END====================================


/* Chapter 22 - 25 (Strings) */
// Q1
// var someWords = "Captain";
// var result = someWords.slice(0,1) + someWords.slice(3);
// console.log(result);
// Q2
// var number = "Hello World";
// var str = number.length;
// console.log(str);
// Q3
// var animal = "elephant";
// var seg = animal.slice(1,4);
// console.log(seg);
// Q4
// var a = "hello world!";
// var b = a.length;
// console.log(b);
// Q5
// var myString =  "Hello, World!";
// var countString = myString.length;
// var sliceString = myString.slice(1, -3);
// console.log("Origninal String:",myString);
// console.log("characters Count:",countString);
// console.log(" Slice String:",sliceString);
// Q6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);
// Q7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);
// Q8
// var text = "Your Text goes here";
// var indx = text.lastIndexOf("go");
// console.log("Index:",indx);
// console.log("Text:",text);
// Q9
// Q10
// var myString = "abcde";
// var addCharacter = myString.charAt(2);
// console.log(addCharacter);  
// Q11
// var text = "Hello World";
// var cha = text.charAt(9);
// console.log(cha);
// Q12
// var str = "Hello World";
// var x = str.charAt(str.length -1);
// console.log(x);
// Q13
// var input = "Hello World";
// var cha = input.charAt(4);
// console.log(cha);
// Q14
// Q15
// var reply = "no, not now, maybe later";
// var characterArray = []; 

// for (var i = 0; i < reply.length; i++) {
//   characterArray.push(reply.charAt(i));
// }

// console.log("Character Array:", characterArray);
// var revisedReply = reply.replace("no", "yes");
// console.log("Revised Reply:", revisedReply);

// Q16
// var str = "This is 123.";
// var newStr = str.replace("1", "one");
// console.log(newStr);
// Q17
// var x = "appear";
// var y = x.replace(/a/g, "z");
// console.log(y);
// ======================== 22 - 25 Chapter END==========================

/* Chapter 26 (Rounding Numbers) */
// Q1
// var num = 2.45;
// console.log(Math.round(num));
// Q2
// var origNum = 4.9;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);
// Q3
// var originalNum = 9.45;
// var roundNumber = Math.floor(orignalNum);
// console.log(roundNumber);
// Q4
// var origNumber = 3.5;
// var roundNum1 = Math.round(origNumber);
// console.log(roundNum1);
// Q5
// var number = 0.5;
// var res = Math.floor(number);
// console.log(res);
// ==============================26 chapter END==================

// Chapter 27 (Random Numbers)
// Q1
// var num1 = 49.2;
//  var num2 = Math.random(num1 * 50);
//  console.log(num2);
//  Q2
// var num = 2.49;
// console.log(Math.random()*10);
// Q3
// function rollDice(){
//     return Math.floor(Math.random()*6)+1;   
// }
//   console.log("You RollDice :"+rollDice());
// Q4
// var randomNumber = Math.random();
// var tossNumber = randomNumber < 0.5 ? "Head" : "Tails";
// console.log("The coin landed on: " +tossNumber);
// =========================Chapter 27 END=====================


// JavaScript Assignment 5
// Q1
// var  str = "234";
// var  num = Number(str);
// console.log("String Number :",str);
// console.log("Convert Integer Number : ",num);
// Q2
// var  str = "123";
// var num1 = +(str);
// console.log("String Number :",str);
// console.log("Convert Integer Number : ",num1);
// Q3
// var str = "2.4567";
// var floatNum = Number(str);
// console.log(floatNum);
// Q5
// var num = 235;
// var strnum  = num.toString();
// console.log(strnum);
// Q6
// var num = 42;
// var str = num.toString();
// console.log(str);
// Q7
// var str = "3.14";
// var num = Number(str);
// console.log(num);
// ====================Chapter 28, 29 END ===================

// Chapter 30 (Controlling the length of decimals)
// Q1
// var num = 3.12345;
// var newNum = num.toFixed(4);
// console.log(newNum);
// Q2
// var num = 3.14563490
// num = parseFloat(num.toFixed (2));
// console.log(num);
// Q3
// var num = 2.68;
// if (num.toFixed(2).toString().length >= 4) {
//     console.log(num);
// }
// Q4
// var num = 24.56789;
// num = parseFloat(num.toFixed(2));
// alert(num);

// ============================COMPLETE ASSIGNMENT ======================

















