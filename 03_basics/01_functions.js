function sayMyName(){
    console.log("Sumit");
    
}

// sayMyName()

function addTwoNumbers(num1,num2){
    // console.log(num1+num2);
}

addTwoNumbers(3,6)

function loginUserMessage(username){
     if (username===undefined){
        console.log("Please enter a username");
        return
     }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sumit Verma"));


function calculateCartPrice(...num_1){
    return num_1
}

console.log(calculateCartPrice(200,300,500));

const user={
    username:"sumit",
    age:20
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age} `);
}

handleObject(user)

const myNewArray=[200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
