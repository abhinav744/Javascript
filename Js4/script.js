// console.log("One");
// console.log("Two");

// setTimeout(()=>{
//     console.log("hello");
// },4000);    //timeout

// console.log("Three");
// console.log("Four");

// function sum(a, b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum)

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     });
// });

// let promise=new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     reject("some error occured");
// });

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("success")
//         reject("error");
//     });
// };
// let promise=getPromise();
// promise.then(()=>{
//     console.log("fulfilled");
// });
// promise.catch(()=>{
//     console.log("rejected");
// });

// function asynscFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1")
//             resolve("success")
//         },4000)
//     })
// }
// function asynscFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2")
//             resolve("success")
//         },4000)
//     })
// }
// //Promise chain
// console.log("fetching data 1..")
// asynscFunc1().then((res)=>{
//     console.log("fetching data 2..")
//     asynscFunc2().then((res)=>{
//     })
// })

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data")
            resolve(200)    //200 represent a successfull api call
        },4000)
    })
}
async function getWeatherData(){
    console.log("get api 1")
    await api();    //1st
    console.log("get api 2")
    await api();    //2nd
    console.log("get api 3")
    await api();    //3nd
    console.log("get api 4")
    await api();    //4th
    console.log("get api 5")
    await api();    //5th
}