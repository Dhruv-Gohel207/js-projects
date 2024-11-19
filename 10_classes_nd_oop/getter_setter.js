class User {
    constructor(email, password){
            this.email= email;
            this.password = password
    }
    get email (){
        return this._email.toUpperCase()
    }
    set email(e){
        this._email=e
    }
    get password (){
        return `The${this._password}lostkey`  
    }
    set password(value){
        this._password = value
    }
}

const someNew = new User ("somenew@yahho.com", "abcdef")
console.log(someNew.email);
