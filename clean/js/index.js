/*
for(let i = 1; i <= 12; i++) {
  for(let j = 1; j <= 12; j++) {
    console.log(i * j);
  }
}
*/

/*
let timeOfDay = "daytime";

if(timeOfDay == "daytime") {
  console.log("it's daytime");
}
else {
  console.log("it's not daytime :(");
}
*/

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

let instrument = {
  "type": "flute",
  "brand": "Yamaha",
  "created": 1987
};
console.log(instrument["type"]);

//alert("YOU HAVE BEEN HACKED!!!");
//let favFood = prompt("Type your favorite food");
//console.log(favFood);
let result = confirm("Is sushi good?");
console.log(result);