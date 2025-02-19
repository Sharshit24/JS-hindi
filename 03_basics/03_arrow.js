const user ={
    username:"Sumit",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="Harsh"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username="Sumit"
//     console.log(this);
// }

// chai()

const chai = ()  =>{
    let username="Sumit"
    console.log(this.username);
}
chai()

// const addTwo=(num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(5,9));

const addTwo=(num1,num2) =>  num1+num2
console.log(addTwo(5,9));

const myArray=[2,3,4,5,6]

myArray.forEach()
