class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

   static createId(){
        return `123`
    }
}

const john = new User("john")
// console.log(john.createdId());
  

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const phone = new Teacher ("phone", "phone@new.com")
phone.logMe();
// console.log(phone.createId())
