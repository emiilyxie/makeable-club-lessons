"use strict";
// this is a comment
// use strict is kind of like doctype, it allows you to use the modern version
// of js

/* ************** 4/12/21 ***************** */

/*
console.log("Hello, World!"); // remember semicolon and quotes

// variables
let x = 1;
// x = 1;   no! must use let

console.log(x);  // will now print 1

let y = 4;

let result = x + y;
console.log(result); // notice that this is not in quotes

// mini exercise answers
let ans1 = 2740 + 832;
let ans2 = ans1 - 36;

console.log(ans1);
console.log(ans2);

let name = "Emily";
let greeting = "Hi, my name is " + name;
console.log(greeting);
*/

/* ************** 4/19/21 ***************** */

/*
// define function w/ name
function myFirstFunction() {
  // add code inside function
  console.log("this is my first function");
  console.log("i am printing some text in the console");
}

// calling function
myFirstFunction();
myFirstFunction(); // you can call it as many times as you want!

function addThreeTo(number) {
  console.log(number + 3);
}

addThreeTo(4);

// multiple parameters
function add(n1, n2) {
  console.log(n1 + n2);
}

add(9, 394);

// while loop

let i = 0;
while(i > 10) {
  console.log("in while loop. i equals " + i);
  i++; // ++ is incrementing, the same as i = i + 1
}

for(let j = 0; j > 10; j++) {
  console.log("in for loop. i equals " + i);
}
*/

/* ************** 4/26/21 ***************** */

// challenge exercise answer
for(let i = 1; i <= 12; i++) {
  for(let j = 1; j <= 12; j++) {
    console.log(i * j);
  }
}

// if statement example
let timeOfDay = "evening";
if(timeOfDay == "day") {
  console.log("It's daytime");
}
else if(timeOfDay == "evening") {
  console.log("It's evening")
}
else {
  console.log("It's neither daytime nor evening");
}

// array example
let shoppingList = ["apples", "bananas", "pears", "sandwich"];
console.log(shoppingList[0]) // will print apples
// shoppingList[4] will create an error
shoppingList[4] = "pencil"
console.log(shoppingList);
console.log(shoppingList.length);

// mini exercise #1 answer
let shoppingList = ["apples", "bananas", "sandwiches"];
let haveDog = false;

if(haveDog) {
  shoppingList[3] = "dogTreats";
}
else {
  shoppingList[3] = "popsicles";
}

for(let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}

// object example
let instrument = {
  "type": "flute",
  "brand": "Yamaha",
  "created": 1978,
  "key": "value"
}

alert("This is an alert");
prompt(
  "What is your favorite color"
);