//  for loop
for (let i = 0; i < 10; i++) {
    const element = i;  
    // console.log(element);
}

// console.log(element);

for (let i = 0; i < 11; i++) {
    //console.log(`outer loop value:${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value:${j}and inner loop value ${i}`);
    }
}
let myArray=["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// break

// for (let index = 0; index < 21; index++) {
//     if (index==5) {
//         console.log(`5 detected`);
//         break
//     }
//     console.log(`value of index is ${index}`);
// }
for (let index = 0; index < 21; index++) {
    if (index==5) {
        console.log(`5 detected`);
        continue
    }
    console.log(`value of index is ${index}`);
}