const codes = ["js", "ruby", "java", "python", "cpp"]

// codes.forEach(function(val){
//     console.log(val);
    
// })

// codes.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe (item){
//     console.log(item);
// }
// codes.forEach(printMe)

// codes.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })


const mycode = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "java",
        fileName: "java"
    },
    {
        languageName: "python",
        fileName: "py"
    }
]

mycode.forEach((item)=>{
    console.log(item.languageName);
    
})