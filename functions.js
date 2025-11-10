// reuseability ,split etc..

// 1.named functions
// 2.arrow function
// 3.anonomous function
// 4.function expression
// 5.IIFE (Immediately invoked function expression)
// 6.generator function
// 7.callback function ,higher order function
// 8.constructor function

// function Data(a,b){ //  parameter ,params,formal arguments: the varaibles passed in function declaration
//   return // it can return any datatype ,return is last stament  of any function excution,
//   // function without return or empty return statment will return undefined
//   console.log("hii")
// }

// Data(1,4) // the values or variable that we pass in function calling we call it as arguments /actual arguments

// // differnt parameter
// // 1.default parameters
// // 2.Rest parameters

// function User(num, password){
//     console.log("n",num)
//     console.log("p",password)
//     // before es6
//     if(num==undefined){
//       num=0
//     }
//   console.log("n",num)
// }

// User(7999909,123)
// User()

// function User1(num=0, password=""){//props
//     console.log("n",num)
//     console.log("p",password)

// }

// User1(7999909,123)
// User1()

// // rest parameters
// function addtocart(p1,...r1){
//  console.log(p1)
//  console.log(r1)
// }

// addtocart("mobile")
// addtocart("mobile","card","chain")

// function example(){
//   return
//   console.log("hii")  //Unreachable code detected.
// }

// // let res=example()
// // console.log(res)// undefined
// // console.log(res*2)//NaN

// // simple syntax :syntatic sugar  of  named function
//  function Arrexample(){

//  }
// //  fn   calling
//  Arrexample()

// //  syntax
//  let arr=()=>{}
// //  arrow function calling
// arr()

// // arrow function doesnt require paranthersis when we pass single parammter
// let arr1=a=>console.log(a)
// arr1("hii")
// // arrow function require   paranthersis when we pass morethan one  parammter
// let arr2=(a,b)=>console.log(a,b)
// arr1("hii")
// // arrow function doesnt require return statemnt & curly braces when we pass single expression
// let arr3=(a,b)=>a+b;
// let res=arr3(1,4)
// console.log(res)// 5

// function example(a,b){
//  return a+b
// }
// let res2=example(1,4)
// console.log(res2)//undefined

// // arrow function  require return statemnt & curly braces when we pass more than one expression
// let arr4=(a,b)=>{
//   a+b
//   a-b;
//   return {a:a+b, b:a-b}
// }
// let res3=arr4(1,4)
// console.log(res3)// undefined

// // arrow function doesnt have its own these keyword (own these binding)
// // arrow function shouldnot be used as methods ,constructor function
// // arrow function doesnt have its own argument object

// console.log(this) //window used for refering object location

// function data(){
//   console.log(this)// windoww
// }
// data()

// let userinfo={
//   name:"raju",
//   // method
//   details:function (){
//   console.log(this.name.toUpperCase())
// }
// }

// console.log(userinfo.name)
// console.log(userinfo.details())

// let userinfo1={
//   name:"raju",
//   // method
//   details: ()=>{
//   console.log(this.name.toUpperCase())
// }
// }

// console.log(userinfo1.name)
// console.log(userinfo1.details())

// arrow function doesnt have its own argument object
// function data(){
//  console.log(...arguments)
// }

// data(1,3,4,5,6,76)

// let data1=()=>{
//  console.log(...arguments)//arguments is not defined
// }

// data1(1,3,4,5,6,76)

// guess() //  undefined
// function guess(){
//   console.log("hello")
// }
// guess()// hello

// types of errors
// 1.syntax error
// 2.refrence error
// 3.type error
// debugger
// console.log(guess1)
// let guess1=()=>{
//   console.log("hello")
// }
// guess1()// hello

// setTimeout()

// What kind of langauge is Javascript
// for(let i=0;i<=100000;i++){
//   console.log("hello-1")
// }
// console.log("hello1")
// for(let i=0;i<=100000;i++){
//   console.log("hello2")
// }
// console.log("hello3")

// synchrounous
// debugger
// console.log("hii")
// setTimeout(()=>{
//  console.log("speaking")
// })
// console.log("bye")

// callback
function A(callback) {
  console.log("hii");
  callback();
}
function B() {
  console.log("bye");
}
A(B);

//
// select a product : username productname
// addtocart
// increase or decrease quantity
// checkout
// payment
// order

function selectProduct(name, product, callback) {
  console.log("name:", name);
  console.log("product:", product);
  console.log("callback:", callback(name, product)); //calling function-arguments
}

function addtocart(name, product, callback) {
  console.log("aname:", name);
  console.log("aproduct:", product);
  console.log("call:", callback(name, product));
}
function incredec(name, product, callback) {
  console.log("increment");
  console.log("aname:", name);
  console.log("aproduct:", product);
  console.log("call:", callback(name, product));
}

function checkout(name, product, callback) {
  console.log("increment");
  console.log("aname:", name);
  console.log("aproduct:", product);
  console.log("call:", callback(name, product));
}

function payment(name, product, callback) {
  console.log("increment");
  console.log("aname:", name);
  console.log("aproduct:", product);
  console.log("call:", callback(name, product));
}
function order(name, product) {
  console.log("increment");
  console.log("aname:", name);
  console.log("aproduct:", product);
}
// selectProduct("ravi","apple",function(n,p){//parameters
//    addtocart(n,p,function(n,p){
//       incredec(n,p,function(n,p){
//          checkout(n,p,function(n,p){
//             payment(n,p,function(n,p){
//               order(n,p)
//             })
//          })
//       })
//    })
// })

// username password
// settings -whatsapp
// createAccount
// login
// Profile
// setting

// function createAccount(name,password,callback){
//   console.log("create Your Account🚩")
//   console.log("name",name)
//   console.log("password",password)
//   callback(name,password)

// }

// function Login(name,password,callback){
//   console.log("Login to account🚩")
//     console.log("name",name)
//   console.log("password",password)
//   callback(name,password)

// }

// function Profile(name,password,callback){
//   console.log("welcome to profile🚩")
//     console.log("name",name)
//   console.log("password",password)
//   callback(name,password)

// }

// function Settings(name,password){
//   console.log("edit the follwoing🚩")
//     console.log("name",name)
//   console.log("password",password)

// }

// createAccount("ramu","r@123",function(name,password){
// Login(name,password,function(name,password){
//   Profile(name,password,function(name,password){
//     Settings(name,password)
//   })
// })
// })

// Promise : it is an javascript object which represents the eventual completion or failure of an async operation

// the three states of promise
// 1.pending : result undfiend
// 2.fullfilled : successfull completion will result in fullfilled state and gives the values
// 3.rejected :if failed result in rejected state and giver error value

// // to create the promises
// let p1 = new Promise(function (resolved, rejected) {
//   let status = 400;
//   if (status == 200) {
//     resolved("successfull login");
//   } else {
//     rejected("failed to login");
//   }
// });

// console.log(p1);
// // when promised state is fullfilled we collect the values in then method
// // when promised state is rejectd we collect the values in catch method

// p1.then(function (val) {
//   console.log(val);
// }).catch(function (err) {
//   console.log(err);
// });

// 1.validating the user credntials
// 2.authenticate user
// 3.fetching the profile details
// 4.redirecting user to dashboard

// fetch user data
function fetchUser() {
  return new Promise(function (resolve, reject) {
    console.log("fetching.. user");
    setTimeout(() => {
      const data = { name: "raju", mobile: "876567898" };
      if (data) {
        resolve(data);
      } else {
        reject("network eroor");
      }
    }, 2000);
  });
}

// let res = fetchUser();
// console.log(res);
// res
//   .then(function (u) {
//     console.log(u.name.toUpperCase());
//     return u.name.toUpperCase();
//   })
//   .then(function (up) {
//     console.log("welcome to dashbaord", up);
//     return up.toLowerCase();
//   })
//   .then(function (lc) {
//     console.log("welcome to dashbaord", lc);
//   })
//   .catch((err) => console.log(err));


// function delay(ms){
//   return new Promise(function(res){
//     setTimeout(res,ms)
//   })
// }

// function ValidateUser(username,password){
//   return new Promise((resolve,rejected)=>{
//     console.log("validating user....")
//     delay(1000).then(()=>{
//       if(username=="admin" && password=="123"){
//         resolve({username})
//       }else{
//         rejected("invalid creditinals")
//       }
//     })

//   })

// }
// function authenticateUser(user){
//   return new Promise((resolve)=>{
//     console.log("authenticating...")
//     delay(1500).then(()=>{
//     const token="jwt-token123"
//     resolve({...user,token})
//     })
//   })

// }
// function fetchUserProfile(userdata){
//     return new Promise((resolve)=>{
//     console.log("fetching profile...")
//     delay(1000).then(()=>{
//     const profile={role:"ceo",plan:"premium"}
//     resolve({...userdata,profile})
//     })
//   })
// }
// function redirectToDashbaord(userfulldata){
//    return new Promise((resolve)=>{
//     console.log("redirect to dashbaord...")
//     delay(500).then(()=>{

//     resolve(userfulldata)
//     })
//   })
// }

// // Promise chaining 
// ValidateUser("admin","123")
// .then(authenticateUser)
// .then(fetchUserProfile)
// .then(redirectToDashbaord)
// .then(mess=>console.log(mess))
// .catch(err=>console.log("logib failed"))
// .finally("login proccess completed")


// async and await 4
// async : makes the function as asyncrounous and return the Promise 
// await : pauses the execution  until the promised resolve or rejects

// async function ValidateUser(){
//   return "hello"
// }
// let res=ValidateUser()
// console.log(res)
// res.then((val)=>console.log(val))

async function ValidateUser(username,password){
  console.log(username,password)
  console.log("validating user...")
  // if(!username || !password){
  //    throw Error("username or password is not correct")
  // }
  if(username=="admin" && password=="123"){
    return {username}
  }else{
    throw new Error("invalid credintals")
  }
}
async function authenticateUser(user){
   const token="jwt-token123"
    return {...user,token}
}
async function fetchUserProfile(userdata){
 const profile={role:"ceo",plan:"premium"}
    return {...userdata,profile} //{}
}
async function redirectToDashbaord(userfulldata){
   return userfulldata
}


async function  loginflow(username,password) {
  console.log(username,password)
  try {
    console.log("login started...")
    let user=await ValidateUser(username,password) 
    let authdata=await authenticateUser(user) 
    let userProfiel=await fetchUserProfile(authdata) 
    let message=await redirectToDashbaord(userProfiel) 
    console.log(message)
  } catch (error) {
    console.log(error)
  }
  
}
loginflow("admin","123")