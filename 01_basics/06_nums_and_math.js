const score=400

const balance=new Number(200)
console.log(typeof(balance));
console.log(typeof(score));
console.log(balance);


const otherNumber=123.5593

console.log(otherNumber.toPrecision(3));

const hundreds=10000000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++=  maths ---------------

console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(4.5));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.max(4,3,2,7,9));
console.log(Math.min(4,3,5,12,6));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min);
