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