const newuser = {}

newuser.id = "1"
newuser.name= "john"
newuser.isloggedIn = false

// console.log(newuser);


const regularUser = {
    email: "firstU@gmai.com",
    fullname:{
        userFullName:{
             firstName:"adam",
             lastName:"ev"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

// const obj3 =Object.assign ({},  obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);4

const users = [
    {
        email:"a@mail.com",
        id:"1"
    },
    {
        email:"b@mail.com",
        id:"2"
    },
    {
        email:"c@mail.com",
        id:"3"
    },
]

// console.log(users[1].email);
// console.log(newuser);
// console.log(Object.keys(newuser));
// console.log(Object.values(newuser));
// console.log(Object.entries(newuser));

// console.log(newuser.hasOwnProperty("isloggedIn"));

const course ={
    coursename:"javascript",
    price:655,
    courseInstructor :"moria"
}

const {courseInstructor: cI} = course
console.log(cI);

// {
//     "name":"dhruv",
//     "id":"2",
//     "email":"dg@mail.com"
// }

[
    {},
    {},
    {}
]

