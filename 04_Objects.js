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
