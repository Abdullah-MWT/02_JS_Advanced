// ***********************  ARRAYS  **************************

// Difference between .push    .concat  and spread in case  of Merging two Arrays

//  1:-  .push 
const arr1 = ["Abdullah", "Zaryab", "Sufyan", "Zulkifful"];
const arr2 = ["Heera", "Hafsa", "Wafa", "Hania"];
 arr2.push(arr1);
console.log(arr2); // in the output you,ll see that the arr1 becomes the 4th[index] element of arr2 intead  of merging



// 2:-    .concat
let concated = arr2.concat(arr1);
console.log(concated); // It works opposite of .push , means that it merges all elements off both Arrays


// 3:-   spread-method   
const spreaded = [...arr1, ...arr2];
console.log(spreaded);     // it works the same as .concat but  it,s  more preferred



// Now , what f there are Arrays inside Array. Means Nested arrays : for this purpose we can use .flat method 
const myArray = [1, 2, 3, 4, [5, 6], 7, [8, 9, [4, 5]]]; 
const flatArray = myArray.flat(Infinity);
console.log(flatArray);


// while scrapping data from somwhere, we might get difffernt dataTypes but we it in Array. Let,s see this case
console.log(Array.isArray("Abdullah")); // Asking just, that is it an Array or not

console.log(Array.from("Abdullah"));   // Used for converting other dataType into an Array



// .map  "Used to perform action on each element of an Array"
const nums = [2, 4, 8, 16, 32, 64, 128, 256];
function myFuncton(digit) {
    return (digit * 2) +1 ;
}

let squareRoots = nums.map(myFuncton);
console.log(squareRoots);



// .filter  "Used to filter out somethings out of an Array"
function myFunction2(value) {
    return value < 100 ;
}

let filteredNums = nums.filter(myFunction2);
console.log(filteredNums);



// .reduce  "Used to perform action on each value to combine or reduce them into  a  single value"
function myFunction3(a,b) {
    return a + b
}

let reducedNums =  nums.reduce(myFunction3);
console.log(reducedNums);


//   .every     "Checks each element of an Array to check whether it follows the below instructions or not"
function myFunction4(value1) {
    return value1 > 18
}
let everyChecked = nums.every(myFunction4);
console.log(everyChecked);



//  .some     "Checks Elements of an Array to check whether any element follows the instructuons or not"
function myFunction5(value2) {
    return value2 > 18
}
let someChecked = nums.some(myFunction5);
console.log(someChecked);

