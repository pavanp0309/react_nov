// // ====================================================================
// // 🔍 SCOPE & VARIABLE ACCESSIBILITY IN JAVASCRIPT
// // ====================================================================
// //
// // Scope defines where variables, functions, and objects are accessible
// // in your code. It also determines their lifetime.
// //
// // Types of Scope:
// // 1️⃣ Global Scope
// // 2️⃣ Local Scope
// //     - Block Scope
// //     - Function Scope
// //     - Module Scope
// //
// // Variables can be declared using:
// // - var  → Function Scoped (or Global if outside a function)
// // - let  → Block Scoped
// // - const → Block Scoped (constant value)
// // ====================================================================


// // ====================================================================
// //  GLOBAL SCOPE
// // ====================================================================

// // var a = 10;
// // let b = 20;
// // const c = 30;

// // console.log(a); // Accessible
// // console.log(b); // Accessible
// // console.log(c); // Accessible


// // ====================================================================
// // 🧱 BLOCK SCOPE
// // ====================================================================
// // Variables declared with `let` and `const` inside a block are not
// // accessible outside of it.

// if (true) {
//   var a = 100;    // var → accessible outside the block (function/global)
//   let b = 200;    // let → block scoped
//   const c = 300;  // const → block scoped

//   console.log("Inside Block:", a); // 100
//   console.log("Inside Block:", b); // 200
//   console.log("Inside Block:", c); // 300
// }

// console.log("Outside Block (var):", a); // ✅ Accessible (100)
// console.log("Outside Block (let):", b); // ❌ ReferenceError


// // ====================================================================
// // ⚙️ FUNCTION SCOPE
// // ====================================================================
// // Variables declared with `var`, `let`, and `const` inside a function
// // are not accessible outside that function.

// function example() {
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   console.log("Inside Function:", a);
//   console.log("Inside Function:", b);
//   console.log("Inside Function:", c);
// }

// example();

// console.log("Outside Function:", a); // Works (from global var)
// console.log("Outside Function:", b); // ReferenceError


// // ====================================================================
// // 🚀 HOISTING
// // ====================================================================
// // Hoisting means all variable and function declarations are moved
// // to the top of their scope *during compilation*.
// //
// // Only the declarations are hoisted — not initializations.

// console.log(x); // ❌ undefined (var is hoisted but not initialized)
// var x = 10;

// console.log(y); // ❌ ReferenceError (let is hoisted but in TDZ)
// let y = 20;

// console.log(z); // ❌ ReferenceError (const is hoisted but in TDZ)
// const z = 30;


// // ====================================================================
// // 🔁 REDECLARATION
// // ====================================================================
// // Redeclaration means declaring the same variable name again
// // in the same scope.

// var num = 10;
// var num = 20; // Allowed with var

// // let val = 30;
// // let val = 40; ❌ Not allowed

// // const pi = 3.14;
// // const pi = 3.15; ❌ Not allowed

// {
//   let blockVar = 50;  //  Allowed (different scope)
//   const blockConst = 60; //  Allowed
// }


// // ====================================================================
// // 📦 MODULES (IMPORT & EXPORT)
// // ====================================================================
// // Modules allow code to be split into separate files.
// // - export → makes variables/functions available to other files.
// // - import → brings exported code into a file.
// //
// // Types of Exports:
// // 1️⃣ Named Export → multiple per file
// // 2️⃣ Default Export → only one per file
// // ====================================================================


// // ---------- variables.js ----------
// export var a = 10;
// export let b = "Hi";
// export const c = true;

// export function username() {
//   console.log("Hi, this is Pavan");
// }

// export function userDetails() {
//   console.log("From Hyderabad");
// }

// export function userInfo() {
//   console.log("Contact: 7995524942");
// }


// // ---------- main.js ----------
// import { a, b, c, username, userDetails, userInfo } from "./variables.js";

// console.log(a); // 10
// console.log(b); // "Hi"
// console.log(c); // true

// username();     // Hi, this is Pavan
// userDetails();  // From Hyderabad
// userInfo();     // Contact: 7995524942




// Named exports :🎯 can have multiple per file
export let user="raju"
export let user1="ravi"
//  default export :🎯 one per file
let username="ramu"
// let username1="ramu"
// export default username
// export default username1 //A module cannot have multiple default exports.

// Export the follwing values and prints it results in variables 
export function Add(a,b){
    return a+b
} // call these inside varible and print the result of 2 values
export default function Mul(m1,m2){
    return m1*m2
}  // call these inside varible and print the result of 2 values
export let data={
    name:"ramu"
} // print the name in varaible
export let arr=[1,2,3,4,,6] // display all the values using map method
export let ovter=true // print eligible or not using ternary operator
