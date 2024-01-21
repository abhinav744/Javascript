const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btnButton=document.querySelector("#btn");

const getFacts=async()=>{
    console.log("getting data..... ");
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data[4].text);
    factPara.innerText=data[4].text;
};

btnButton.addEventListener("click", getFacts)