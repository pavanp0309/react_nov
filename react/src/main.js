// //         <h1>welcome to React <span>hello<span></h1>

// let rootele=document.getElementById("root")

// // create an element 
// let h1ele=document.createElement("h1")
// let text=document.createTextNode("welcome to react")

// // appending the childs
// h1ele.appendChild(text)
// console.log(h1ele)

// // adding styling to it 
// h1ele.style.backgroundColor="yellow"
// // adding attributes
// h1ele.setAttribute("id","id1")

// h1ele.className="c1"
// h1ele.classList.add("c2")
// h1ele.classList.remove("c2")
// h1ele.classList.toggle("c2")
// h1ele.classList.toggle("c2")
// // h1ele.classList.add("c1")


// rootele.appendChild(h1ele)

// In React
{/* <div>
        <p>Hi</p>
        <p>Welcome</p>
    </div> */}
    

//  let h1ele=React.createElement("h1",{className:"c1"},React.createElement("span","","welcome to react"))
// console.log(h1ele)

// let p=React.createElement("p",{},"hi")
// let divele=React.createElement("div",{className:"c1"},React.createElement("p",{},"hi"))
// console.log(divele)

// let root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(divele)

// card 
        // <div>
        //     <img src="" alt="">
        //     <h1>iphone</h1>
        //     <p id="id1">iphone max the best seller</p>
        //     <p>1000</p>
        //     <button>addtocart</button>
        //   </div>

        // to create ui we use React library and display the created element in the browser we use ReactDom
        let product=React.createElement("div",{className:"card"},
           React.createElement("img",{src:"",width:"100px"}),
           React.createElement("h1",{className:"card-title"},"iphone"),
           React.createElement("p",{className:"card-text"},"iphone max the best seller"),
           React.createElement("p",{className:"card-text",id:"price"},"1000"),
           React.createElement("label",{className:"card-text",id:"price",htmlFor:"name"},"username"),
           React.createElement("button",{className:"btn btn-primary",id:"btn",onclick:""},"addtocart"),
           
        )

        console.log(product)

      ReactDOM.createRoot(document.getElementById("root")).render(product)

        // all html element attributes must be written in capital
        //  class==> className
        //  onclick==>onClick 
        // for==> htmlFor 
      import App from "./App" 
