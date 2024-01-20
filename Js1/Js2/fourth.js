// let headings=document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

// let firstEl=document.querySelector("p");
// console.dir(firstEl);

// let h2=document.querySelector("h2");
// console.dir(h2);
// h2.innerText=h2.innerText+" from apna college";

let divs=document.querySelectorAll(".box");
// divs[0].innerText="new value 1";
// divs[1].innerText="new value 2";
// divs[2].innerText="new value 3";
let idx=1;
for(div of divs){
    div.innerText=`new value ${idx}`;
    idx++;
}