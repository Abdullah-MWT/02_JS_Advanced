// ******************   SINGLETON OBJECTS   ********************

const appleApp = new Object();     // it,s a singleton object

appleApp.Name = "Apple";     // assigning the above values to above objects
appleApp.Storage = "32GB";
console.log(appleApp);


// let,s see Objects inside Objects
const userApp = {
    email: "abdullah@apple.com",
    userName: {
        userFullName: {
            userFirstName: "Abdullah",
            userLastName: "Developer"
        }
    }
}

console.log(userApp.userName.userFullName.userFirstName);  // Accessing the firstName inside nested objects



// Merging Objects with Objesct    2 ways for doing this
const obj1 = {1: "A",  2: "B", 3: "C"};
const obj2 = {4: "D",  5: "E", 6: "F"};

const obj3 = Object.assign({}, obj1, obj2);  // Here the {} represents the target while others are sources, Less used and not Recommended 
console.log(obj3);
 

const obj4 = {...obj1, ...obj2};   // Most Used and Recommended
console.log(obj4);