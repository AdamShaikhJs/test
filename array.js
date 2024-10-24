// function a() {
//     console.log("Function A");
//     b();
// }
// function b() {
//     console.log("Function B");
//     c();
// }
// function c() {
//     console.log("Function C");
// }
// a();
// function executor() {
//     console.log("Executor function");
//     (function() {
//         console.log("Anonymous function");
//     })();
// }

// executor();

// function greet(callback) {
//     console.log("Hello");
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye");
// }
// const arr=(()=>{
//     console.log("hii")
// })

// greet(sayBye);
// arr()

// console.log("dhiii");



// ------------------------------------------------------
// console.log("Synchronous 1");

// function normalFunction() {
//     console.log("Normal function execution");
// }

// normalFunction(); // Called synchronously, executed immediately

// setTimeout(() => {
//     console.log("Macrotask 1");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Microtask 1");
// });

// console.log("Synchronous 2");

// setTimeout(() => {
//     console.log("Macrotask 2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Microtask 2");
// });

// console.log("Synchronous 3");

// Updated Execution Order:
// Synchronous 1
// Normal function execution (since it's a normal synchronous function call)
// Synchronous 2
// Synchronous 3
// Microtask 1 (queued during synchronous execution)
// Microtask 2 (queued during synchronous execution)
// Macrotask 1 (queued by setTimeout)
// Macrotask 2 (queued by setTimeout)



// ---------------------------------------------------
// var x = 1;
// a()
// b()

// function a() {
//     var x = 10;
//     console.log(x)
// }
// function b() {
//     var x = 100;
//     console.log(x)
// } 
// console.log(x)

// 10 100 1

// ---------------------------------------------------------------------------------
// const privateData = new WeakMap();
// class Person {
//     constructor(name, age) {
//         privateData.set(this, { name, age });
//     }
//     getDetails() {
//         const data = privateData.get(this);
//         return `Name: ${data.name}, Age: ${data.age}`;
//     }
// }
// const person = new Person('John', 30);
// console.log(person.getDetails());  // Output: Name: John, Age: 30



//------------------------------------------------------------------------------------
// Promises handles 
// const p1=new Promise((resolved,reject )=>{
//     setTimeout(()=>{
//         resolved("promised resovled values V1!!")
//     },5000)
// })

// const p2=new Promise((resolved,reject )=>{
//     setTimeout(()=>{
//         resolved("promised resovled values V2!!")
//     },10000)
// })
// const handlePromises=async( )=>{
//     console.log("hellow it start")

//     const val =await p1;
//     console.log(val)
//     console.log("v1 is completed ---------")

//     console.log("--------- middle  ----------")

//     const val2=await p2;
//     console.log(val2)
//     console.log("v2 is completed ---------")
// }
// handlePromises()



//---------------------------------------------------------
const nums= [1,2,3,5,6]
let result = nums.map((val,i,arr)=>{
    return arr[i]
})
console.log(result)