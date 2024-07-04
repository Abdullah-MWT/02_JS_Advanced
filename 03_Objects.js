// ******************   Literal or NON-SINGLETON OBJECTS   ********************

//  literals:-                  Note: Key of objects is always treated as String behind the scenes

const jsDevs = {
    name:  "Abdullah",
    emial: "abdullah@google.com",
    "full Name": "Abdullah Developer",
    age: "18",
    address: "Lahore",
    isLoggedIn: false,

}
// We can access the values of arrays either by name or value itslef through two main ways


// way# 1  
console.log(jsDevs.age);   // "The simple and most common method of accessing but here are some porblems"
console.log(jsDevs.emial);
// console.log(jsDevs.full Name);  // it,ll give us error



// way# 2
// But what if we want to access the "full Name" here through the way# 1 , it will give us error , that,s why here is way#2
console.log(jsDevs["full Name"]);  // it,s correct syntax for accessing such type of values



// changing values in Objects
 jsDevs.emial = "abdullah@apple.com";
 Object.freeze(jsDevs);   // it,ll freeze the object and no more values will be changed after that
 jsDevs.emial = "abdullah@microsoft.com";
 console.log(jsDevs.emial);  
