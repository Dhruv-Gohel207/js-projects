const promiseOne = new Promise (function  (resolve, reject ) {
        //Do an async task
        //DB class , cryptography , network

        setTimeout(() => {
            console.log('Async task is compelete');
            resolve()
        }, 1000);
})

promiseOne.then(function (){
    console.log("promise consumed");
    
})

new Promise(function (resolve , reject){
        setTimeout(() => {
            console.log('async task 2')
            resolve()
        }, 1000);
}).then(function(){
    console.log("async 2 resolved");   
})


const promiseThree = new Promise (function (resolve, reject ){
    setTimeout(() => {
        resolve({username: 'coffe' , emial:'coffe@exp.com'})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject ){
        setTimeout(() => {
            let error = true
            if (!error) {
                    resolve({username: 'dhruv' , password: '2007'})
            }else{
                reject('ERROR : Something went Wrong ')
            }     
        }, 1000);
})



promiseFour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function consumeproFive () {
   try {
    const response = await promiseFive   
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
}
consumeproFive()


//  async function getAllUsers(){
//      try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//          const data = await response.json()
//             console.log(data);
//      } catch (error) {
//          console.log("E: ", error);
//      }
//  }
//  getAllUsers()  



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))