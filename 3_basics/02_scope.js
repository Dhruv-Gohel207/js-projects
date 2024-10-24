let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// function parenet (){
//     const userone = "dharm"

//     function child(){
//         const usertwo = "satya"
//         // console.log(userone);   

        
//     }
//     child()
//     // console.log(usertwo);

// }
// parenet()



if (true) {
    const aa= "abc"
    if (aa==="abc") {
        const bb = " pqr"
        // console.log(aa + bb);
    }
    // console.log(bb);
    
}
// console.log(aa);

//++++++++++++++++++++++++++++++++++++ New Concept ++++++++++++++++++++++++++++++++++++

console.log( AddValue(5)); 
function AddValue(num){   //this function can access thw value anywhere
    return  num +1
}

Addvalue2(5)
const Addvalue2= function (num1){ //if we same that like upper function its not working 
    return num1+2
}
