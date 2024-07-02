// ************************  ARRAYS  **********************

let myCars = ["Ferrari", "BMW", "Toyota", "Corrola", "Fortuner", "Tesla"]; // "Used to store multiptle values in a single variable"
console.log(myCars[3]);

//**************  Different Array Methods **************

// 1:-  .push  "Used to add new values into the array"
myCars.push("Mercedes"); 
console.log(myCars);


// 2:-  .pop  "Used to remove the last value in an Array"
myCars.pop();
console.log(myCars);


// 3:-  .unshift and .shift just works like .push and .pop respectively : Means unshift






// Looping in Arrays   through for loop
const myFriends = ["Zaryab", "Sufyan", "Fawad", "Hafsa", "Mustafa", "Muhammad", "Royan"];
let fLen = myFriends.length;
let text = "My Best Relatives are: \n";
for(i=0; i < fLen; i++) {
    text = text + "_ " + myFriends[i] + "\n";
}
console.log(text);


// Looping in Arrays   through forEach loop
const myFruits = ["Apple", "Banana", "Orange", "Grapes", "PineApple", "Date", "Melon"];
let text2 = "My favourite Fruits are: \n";
function myFunction(value) {
    text2 = text2 + "- " + value + "\n"
}

myFruits.forEach(myFunction);
console.log(text2);


// Printing first 10-digits through "for"
// const myNums  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text6 = "First ten digits are: \n";

for (let i = 0; i <= 10; i++) {
    text6 = text6 + "- " + i +"\n"  
    
}
console.log(text6);