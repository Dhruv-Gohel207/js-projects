const user ={
    username : "anyone",
    price : 666,

    welcomeMessage : function(){
//         console.log(`${this.username} , welcome to the website and course price is ${this.price}`);
// console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="john"
// user.welcomeMessage()

// console.log(this);


// function func(){
    // let user = "abc"
    
//     console.log(this);
    
// }
// func()

// const some = function (){
//     let user = "abc"
//     console.log(this.username);
    
// }
// some()

// const arr =  ()=>{
//     let user = "abc"
//      console.log(this.username);
// } 
// arr()

// const addition = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addition(5, 8));

const addition = (num1, num2) =>  (num1 + num2)
console.log(addition(5, 8));

