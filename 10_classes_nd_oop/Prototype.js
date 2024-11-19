let Heros = ["ironman", "spiderman"]

let heroPower ={
    ironman : "Technology",
    spiderman : "sling", 

    getspiderPower : function (){
        console.log(`spiderman power is  ${this.spiderman}`);
        
    }
}

Object.prototype.john = function (){
    console.log(`john is present in all objects`);
    
}
Array.prototype.heyjohn = function (){
    console.log(`john say hello `);
    
}
Heros.john()
// heroPower.heyjohn()
Heros.heyjohn()
// heroPower.john()

//inheritance

const User = {
    name : "aric",
    emial : "aric@google.com"
}

const youtuber = {
    makeVideo : true
}

const teachingSupprot = 
{
    isAvailabel : false
}

const TASupprort = {
    makeAssignment : 'js Assignment',
    fullTime : true,
    __proto__: teachingSupprot
}

youtuber.__proto__= User

//modern syntax 
Object.setPrototypeOf(teachingSupprot, youtuber)

let anotherUsername = "something else"

String.prototype.trueLength= function (){
    console.log(`${this }`);    
    console.log(`${this.name}`);
    console.log(`true Length is ${this.trim().length}`);
    
}
anotherUsername.trueLength()
// "john".trueLength()
"coldCoffe".trueLength()