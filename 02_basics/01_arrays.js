// arrays

const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]
const myArr2=new Array(0,1,2,3,4,5)
console.log(myArr[3]);
console.log(myArr2[3]);

//   array methods
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(0)
console.log(myArr);
myArr.shift()
console.log(myArr);


const newArr=myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice, splice

console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);
const myn2 =myArr.splice(1,3)
console.log(myn2);

console.log("C",myArr);









