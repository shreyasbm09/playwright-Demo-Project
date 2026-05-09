let message  = "Hello"
//Data types in JS are Number, String, Booleean, Object, Array, Null, Undefined. 
message = 2;
let age = 20;
let isActive = true;
let numbers = [1,3,5,6];
console.log(message);
console.log(age);
function add1(a,b)
 {
    return a+b;
}

let user = {name:"BOB",age:"34"}
user.location = "banglore"


// Can a object hold a function as a property? Yes, it can. Such functions are called methods.

const person ={
    name: "Shreyas",
    age:26,
    greet: function(){{
        console.log("Hello, I am "+this.name);
    }
}
}
person.greet();


// What are anonymous functions? Functions without a name are called anonymous functions. They are often used as arguments to other functions or assigned to variables.

const add2 = function(a,b){
    return a+b;
}
 
console.log(add2(5,7));

// Arrow functions are a more concise syntax for writing functions in JavaScript. They are often used for shorter functions and do not have their own 'this' context.
const add3 = (a,b) => a+b;
console.log(add3(10,15));

//var, let and const are used for variable declaration in JavaScript. x=3 is also valid but it creates a global variable which is not recommended.
// var is function-scoped and can be redeclared and updated. 
// let is block-scoped and can be updated but not redeclared. 
// const is block-scoped and cannot be updated or redeclared.


// push and pop are methods used to add and remove elements from an array respectively.
//  push adds an element to the end of the array, 
// while pop removes the last element from the array.
//slice and splice are methods used to manipulate arrays in JavaScript.
// slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.
//shift and unshift are methods used to add and remove elements from the beginning of an array respectively.
// shift removes the first element from an array and returns that removed element. This method changes the length of the array.
// unshift adds one or more elements to the beginning of an array and returns the new length of the array.  

//push, pop, slice, splice, shift and unshift are all methods used to manipulate arrays in JavaScript. Each method serves a specific purpose for adding, removing, or modifying elements in an array.


const fruits = ["apple", "banana", "cherry"];
fruits.push("orange");// Adds "orange" to the end of the array
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]     
fruits.pop(); // Removes the last element ("orange") from the array
console.log(fruits);

fruits.unshift("grape"); // Adds "grape" to the beginning of the array
console.log(fruits); // Output: ["grape", "apple", "banana", "cherry"]

fruits.shift() // Removes the first element ("grape") from the array
console.log(fruits);

//Asynchronous programming in JavaScript allows you to perform tasks without blocking the main thread. This is achieved using callbacks, promises, and async/await. Asynchronous programming is important for tasks that take time to complete, such as fetching data from an API or reading a file, as it allows the program to continue executing other code while waiting for the task to finish.

console.log("Hi I am 1 st Program");

setTimeout(function(){
console.log("Hi I am 2 nd Program");
},2000);

    console.log("Hi I am 3 rd Program");


    //Callbacks are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used in asynchronous programming to handle the completion of tasks.
function fetchData(callback,) {
    //fetch data from an API or perform some asynchronous operation
    setTimeout(() => {
        console.log("Data fetched");
        const data = "Sample Data";
        callback(data);
    },2000)
}

function processData(data){
    console.log("ProcessingData: "+data);
}

function modifyData(data){
    console.log("Modifying Data: "+data);
}
//  data = fetchData();
//  processData(data);

 fetchData(processData);
 fetchData(modifyData);

 // Promises are a way to handle asynchronous operations in JavaScript.
 //  A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
 // Promises can be in one of three states: pending, fulfilled, or rejected. 
 // They provide a cleaner and more manageable way to handle asynchronous code compared to callbacks.

 function fetchData(callback) {
    //fetch data from an API or perform some asynchronous operation

    return new Promise((resolve)=>{
setTimeout(() => {
        console.log("Data fetched");
        const data = "Sample Data";
        resolve(data);
    },2000)
    });
    
}

// function processData(data){
//     console.log("ProcessingData: "+data);
// }

fetchData().then(function(data){
     console.log("Processing promise Data: "+data);
  //  processData(data);
})

const data =await fetchData();
console.log("Processing async await Data: "+data);  

// Async/await is a syntactic sugar built on top of promises that allows you to write asynchronous code in a more synchronous and readable manner.
//  The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until a promise is resolved. 
// Async/await makes it easier to work with promises and can help improve the readability of your code when dealing with asynchronous operations.  



// In JavaScript, the 'this' keyword refers to the context in which a function is executed.
//  The value of 'this' can change depending on how a function is called. 
// In a regular function, 'this' refers to the global object (window in browsers) when not in strict mode, and is undefined in strict mode. 
// In an object method, 'this' refers to the object itself. 
// In an arrow function, 'this' is lexically bound to the surrounding context, meaning it takes the value of 'this' from the enclosing scope. 
// Understanding how 'this' works is crucial for writing effective JavaScript code, especially when dealing with object-oriented programming and event handling.

//super() is a keyword used in JavaScript to call the constructor of a parent class from a child class. It is used in the context of class inheritance. When a child class extends a parent class, it can use the super() function to access and call the constructor of the parent class, allowing it to inherit properties and methods from the parent class. This is essential for setting up the inheritance chain and ensuring that the child class has access to the functionality defined in the parent class.


// == and === are comparison operators in JavaScript. The == operator checks for equality of values, while the === operator checks for both value and type equality.
//  For example, 5 == '5' would return true because the values are equal, but 5 === '5' would return false because the types are different (number vs string). 
// It is generally recommended to use === for comparisons to avoid unexpected type coercion and ensure that both value and type are considered in the comparison.   
 console.log(5 == '5'); // true
 console.log(5 === '5'); // false


//Differnce between null and undefined in JavaScript is that null is an assigned value that represents the intentional absence of any object value,
//  while undefined is a type that indicates that a variable has been declared but has not been assigned a value.
//  In other words, null is a value that can be assigned to a variable to indicate that it has no value,
//  while undefined is the default value of a variable that has been declared but not initialized. 
// It is important to understand the difference between null and undefined when working with JavaScript, as they can have different implications in your code and may require different handling.   

let a = null;
console.log(a); // null
console.log(typeof a); // object
let b;
console.log(b); // undefined
console.log(typeof b); // undefined
