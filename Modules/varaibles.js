// Importing variables and functions from another file (main.js)
// import { a, b, c, username, userDetails, userInfo } from "./main.js";

// // Showing imported variable values
// console.log(a);
// console.log(b);
// console.log(c);

// // Calling imported functions
// username();
// userDetails();
// userInfo();

// // Exporting variables so they can be used in other files
// export var a = 10;
// export let b = 20;
// export const c = 30;

// named imports 
// import {user} from "../Modules/main.js";

// default imports
// import u from  "../Modules/main.js"
// // console.log(user)
// console.log(u)


//named import with alasing 
// import {user as username} from "../Modules/main.js";
// console.log(username)

// mixed imports
// import u, { user } from "../Modules/main.js";
// console.log(u)//ramu
// console.log(user)//ramu


// // Import as object 
// import * as info from "../Modules/main.js"

// console.log(info)//
// {
//   default: 'ramu',        
//   user: 'raju',
//   user1: 'ravi'
// }

// console.log(info.user) //raju named import 
// console.log(info.default) //ramu- deafult import 

import M,{ Add,data,arr,ovter } from "../Modules/main.js";


let res=M(10,5)
console.log(res)
let res1=Add(10,5)
console.log(res1)
console.log(data.name)
arr.map(ele=>console.log(ele));
let op=ovter?"eligble":"not-eligible"
console.log(op)