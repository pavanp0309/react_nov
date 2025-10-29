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



const {id:d=10,rating:{count:c=10,rate:r=10}}=product
console.log(d)


