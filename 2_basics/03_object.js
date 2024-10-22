// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "john",
    "full name": "john shleby",
    [mySym]: "mykey1",
    age: 18,
    location: "tokyo",
    email: "john@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])


// JsUser.email = "john@microsoft.com"
// Object.freeze(JsUser)
// JsUser.email = "john@chatgpt.com"
// console.log(JsUser);

JsUser.newFun = function(){
    console.log("new function created");
}
JsUser.newFun2 = function(){
    console.log(`new function created, js user name is ${this.name}`);
}


console.log(JsUser.newFun());
console.log(JsUser.newFun2());
