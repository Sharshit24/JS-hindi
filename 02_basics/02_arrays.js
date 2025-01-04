const marvel_heroes = ["thor","Ironman","Spiderman"]
const dc_heroes =["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

const allHeroes=marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

const allNewHeroes=[...marvel_heroes,...dc_heroes]
console.log(allNewHeroes);

const anotherArr=[1,2,3,4,[5,6,7],8,[6,7,3,[2,6,3]]]
const realAnotherArr=anotherArr.flat(Infinity)
console.log(realAnotherArr);

console.log(Array.isArray("sumit"));
console.log(Array.from("sumit"));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
