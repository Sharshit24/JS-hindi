// const tinderUser = new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sumit"
tinderUser.age=20

// console.log(tinderUser);

const regularUser={
    email:"sumit@google.com",
    fullName:{
        userFullname:{
            firstName:"Sumit",
            lastName:"Verma"
        }
    }
}

// console.log(regularUser.fullName?.userFullname.firstName);


const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
const obj4={...obj1,...obj2}
console.log(obj4);
