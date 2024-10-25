//if
// `let temp = 41   
// if (temp == 40) {
//     console.log("les than 50");
    
// }else {
//     console.log("temp is greatere than 50");   
// }`

// <,>,<=,>=,==,!=,===,!==

// const mark = 200

// if (mark > 100) {
    // const power ="fly"
    // console.log(`user power : ${power}`);
    
// }
// console.log(`user power : ${power}`);

// const balance = 1200 
// // if (balance>500) console.log("test");

// if (balance < 600) {
//     console.log("less than 600");
// }else if (balance < 800){
//     console.log("less than 800");
// }else if(balance < 1000){
//     console.log("less than 1000");
// }else{
//     console.log("less than 1200");
     
// }


const userloggedIn = true
const debitCard = true
const loggedinfromGoogle = false
const loggedinfromgmail = true

if (userloggedIn && debitCard) {
    console.log("allowed to buy course");   
}else{
    console.log("you dont have debit card or please login first");
}
if(loggedinfromGoogle || loggedinfromgmail){
    console.log("user logged in");
    
}