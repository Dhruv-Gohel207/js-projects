const user = {
    username : 'john',
    userId: 23,
    isloggedIn : true,

        getUserDetails : function (){
            console.log("Get detailed from user database");
            
        }
}

// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());

    function User (username, userId, isloggedIn){
        this.username = username
        this.userId = userId
        this.isloggedIn = isloggedIn

        this.greeting = function (){
            console.log(`welcome ${this.username}`);
            
        }

        return this  
    }

    const userOne = new User ("dhruv" , 12, true)
    const userTwo = new User ("tushar" , 11, false)

    console.log(userOne.constructor)
    console.log(userTwo)