const usermail = []

// if (usermail) {
//     console.log("Got the user mail");    
// }
// else{
//     console.log("Don't have user mail");
// }

//false's values

// flase 0 , -0, Bigint, "", null, undefine, NaN  

//trueth's Values

//true, "0","false", " ", [], {}, function(){}

// if (usermail.length === 0) {
//     console.log("array is empty");
    
// }

const emptyobj ={}

if (Object.keys(emptyobj).length === 0) {
    // console.log("object is empty");  
}

// -------------------Nullish coalescing Operator (??) : null undefined ---------

let val1;
// let val1 = 5 ??10
// val1 = null ?? 20
val1 = undefined ?? 20

// console.log(val1);


//--------------------------Terniary Operator------------------------

//Condition ? true : false

let coffePrice = 100

coffePrice <= 80 ? console.log("less than 80") : console.log("more than 80");

