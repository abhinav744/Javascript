// // class ToyatCar{
// //     constructor(){
// //         console.log("creating new object");
// //     }
// //     start(){
// //         console.log("start");
// //     }
// //     stop(){
// //         console.log("stop");
// //     }
// // }

// // let fortuner=new ToyatCar;
// // console.log(fortuner);

// class Person{
//     constructor(branch){
//         console.log("enter parent constructor");
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("eat");
//     }
//     // work(){
//     //     console.log("nothing")
//     // }
// }
// class Enigineer extends Person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super();
//     }
//     work(){
//         console.log("solve problems");
//     }
// }
// let shrobj=new Enigineer();
// // console.log(shrobj);

let DATA="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data= ",DATA);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    ediData(){
        DATA="some new value"
    }
}
let student1=new User("shrad","abc@123gmail.com");
let student2=new User("abhi","c@123gmail.com");

let teacher1=new User("brad","ab@123gmail.com");

let admin1=new Admin("admin","admin@college");