const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
    }
const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(programming[key]);   
}
 
const coding=["js","ruby","java","python","cpp"]
// coding.forEach(function(val){
//     console.log(val);
    
// })

coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
});

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    // console.log(item);  
})