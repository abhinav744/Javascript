// let btn1=document.querySelector("#btn1");
// // btn1.onclick=()=>{
// //     console.log("btn1 was clicked");
// //     let a=25;
// //     a++;
// //     console.log(a); //26
// // }

// // let div=document.querySelector("div");
// // div.onmouseover=()=>{
// //     console.log("you are inside div");
// // }

// btn1.addEventListener("click", ()=>{
//     console.log("button was clicked");
// });
// btn1.addEventListener("click", ()=>{
//     console.log("button was clicked-handler 2");
// });

let modeBtn=document.querySelector("#mode");
let currMode="light";   //dark
modeBtn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        document.querySelector("body").style.background="black";
    }else{
        currMode="light";
        document.querySelector("body").style.background="white"
    }
    console.log(currMode);
});