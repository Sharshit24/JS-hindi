const name= "sumit"
const repoCount="6"

// console.log(name+repoCount);

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName= new String ('Sumitxharshit')

console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString=gameName.substring(0,5)
console.log(newString);

const anotherString=gameName.slice(-4,4)
console.log(anotherString);

const newStringOne="  sumit  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://sumit.com/hitesh%20verma"
console.log(url.replace('%20','-'));
console.log(url.includes('sumit'));