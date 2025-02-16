const Mysym=Symbol("Mykey1")

const JsUser={
    name:"sumit",
    full_name:"Sumit Verma",
    [Mysym]:"Mykey1",
    age:20,
    email:"vermaharshit@gmail.com"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);
// console.log(typeof(JsUser.Mysym));

// console.log(JsUser[Mysym]);
// console.log(JsUser[Mysym]);

// console.log(JsUser);

JsUser.email="sumit@chat.com"
// Object.freeze(JsUser)
JsUser.email="sumit@laptop.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`hello JS user,${this.full_name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());










