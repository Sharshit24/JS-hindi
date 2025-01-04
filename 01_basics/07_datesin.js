// Dates

let myDate= new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log((typeof (myDate)));

let myCreatedDate=new Date(2024,0,4)
console.log(myCreatedDate.toDateString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
