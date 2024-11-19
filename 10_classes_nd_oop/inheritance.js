class User {
        constructor(username){
            this.username= username
        }
        logMe(){
            console.log(`username is ${this.username}`);
            
        }
}

class Teacher extends User{
    constructor(username, email , password ){
        
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course added by ${this.username}`);  
    }
}

const some = new Teacher("some", "some@google.com", "456")

some.addCourse()

const something = new User ("something")
something.logMe()