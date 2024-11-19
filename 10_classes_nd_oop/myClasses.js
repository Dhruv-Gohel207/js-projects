//ES6

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

        encryptpassword (){
            return `${this.password}abc`
        }
        changeusername(){
            return `${this.username.toUpperCase()}`
        }
}

const newitem = new user ('item', 'item@insta.com', '852')

console.log(newitem.encryptpassword());
console.log(newitem.changeusername());


//behind the scence
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

