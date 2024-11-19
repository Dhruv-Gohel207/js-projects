function setUsername (username){
    this.username = username
}

function createUser (username, email, password){

    setUsername.call(this, username)
    this.email= email
    this.password = password
}

const coffe = new createUser ("coffe" , "coffe@fb.conm" , "123")
console.log(coffe);
