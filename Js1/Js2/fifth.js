// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);

// let para=document.querySelector("p");
// console.log(para.setAttribute("class","Newclass"))

// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// div.style.fontSize="26px";
// div.innerText="Hello";

// let newBtn=document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);
// let div=document.querySelector("div");
// div.append(newBtn);
// let div=document.querySelector("div");
// div.prepend(newBtn);
// let div=document.querySelector("div");
// div.before(newBtn);
// let div=document.querySelector("div");
// div.after(newBtn);
// let p=document.querySelector("p");
// p.after(newBtn);

// let newHeading=document.createElement("h1");
// newHeading.innerHTML="hello i am here";
// document.querySelector("body").prepend(newHeading);
// let para=document.querySelector("p");
// para.remove()

let newBtn=document.createElement("button");
newBtn.innerText="click me";
newBtn.style.backgroundColor="red";
newBtn.style.color="white"
document.querySelector("body").prepend(newBtn);