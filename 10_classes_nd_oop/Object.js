function multiBy5 (num){
    return num*5 
}
multiBy5.power = 2

console.log(multiBy5(5));
console.log(multiBy5.power);
console.log(multiBy5.prototype);

function createUser (username , price ){
    this.username = username
    this.price = price 
}
createUser.prototype.increment = function () {
    this.price++
}
createUser.prototype.printMe  = function (){
    console.log(`price is ${this.price}`);
    
}

const chai = new createUser ("chai", 25)
const Tea = new createUser ("tea", 250)

chai.printMe()