// Destructuring  : is the way to unpack the values from array or objects into distanct varible
let u="username"
let userInfo={
    [u]:"ramu",
    
    mobile:799945678
}

// different ways to extract the values 
// console.log(userInfo)
// console.log(userInfo.name) //dot notation 
// console.log(userInfo["age"]) //dot notation 
// console.log(userInfo[u]) //dot notation 
// console.log(Object.keys(userInfo))
// console.log(Object.values(userInfo))
// console.log(Object.entries(userInfo))


// const {age}=userInfo;
// console.log(age)


// const {age:a}=userInfo;
// console.log(a)

// const {age:b=20}=userInfo;
// console.log(b)


const product={
"id":1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
"rating": {
"rate": 3.9,
"count": 120
}
}

// extract the following values using  destructuring 
// title price  image id category ,count 
// and extract title as t and category as c

// const {title:t,price,image,id,category:c,rating:{count}}=product
// console.log(t,price,c,id,count,image)

// const data= {...product,...product}
// ...rest operator ...spread operator
// const {title,id:d,...p}=product
// console.log(p)



// const {id:d=10,rating:{count:c=10,rate:r=10}}=product
// console.log(d)


// destructuring with function 

// function  Data(a=0,b=1,...r){// parameters params formal arguments
//  console.log(a+b) //12 //null 
//  console.log(r) //[]

// return {add:a+b}// "hii"//

// }

// // Data(10,2)// values : actual arguments 
// // Data()// values : actual arguments 
// // Data(2,3,5,4,5,6,6,7)// values : actual arguments 
// let res=Data(1,2,4,5,6,7)
// console.log(res)
// console.log(res.add)




// function UserInfo(a){ //props :properties
//     console.log(a)
//     let {name,age,address:{pincode}}=a
//     console.log(name,age,pincode)

// }

// let user={name:"raju",age:20,mobile:5678956765,address:{city:"hyderabad",pincode:500072}}
// UserInfo(user)
// // UserInfo({name:"raju",age:20,mobile:5678956765,address:{city:"hyderabad",pincode:500072}})


// function UserInfo1({name,age,address:{pincode}}){ //props :properties
//      console.log(name,age,pincode)
// }

//  UserInfo1(user)



//  let arr={name:"raju",age:30,mobile:66666}
//  let arr2={name:"ramu",age:30,mobile:66666}
//  let b={...arr2,...arr}
//  console.log(b)

//  const {name,age,...t}= arr2
//  console.log(t)


// let arr=[1,2,3,4,5]
// console.log(arr[0])
// // map filter reduce foreach find findeIndex
// // arr.map(()=>{})
// // arr.map(function(){})

// // function printv(){}
// // arr.map(printv)
// let res=arr.forEach((ele,i,newarr)=>{
//     console.log("ele",ele)
//     console.log("index",i)
//     console.log("index",newarr)
//    return ele+1
// })
//  console.log(res)

//  let res1=arr.forEach(function(ele,i,newarr){
//   console.log("ele",ele)
//     console.log("index",i)
//     console.log("index",newarr)
//    return ele+1
//  })


//  function repeatAr(ele,i,newarr){

//  }

//  let res2=arr.forEach(repeatAr)


let arr=[1,2,3,4,5]

const [a,c]=arr
console.log(a)
console.log(c)

// skip the element 
const [t,,d]=arr
console.log(d)

// nested array
const data=[1,[4],5,6]
const [r,[e=0,m=15]]=data;
console.log(e)
console.log(m)


function Home(d){
 console.log(d)
 const [w,y]=d
 console.log(w,y)
}

Home(data)