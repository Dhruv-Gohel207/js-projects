const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(discriptor);


// console.log(Math.PI);
// Math.PI = 4 
// console.log(Math.PI);
// console.log(Math.ceil(Math.PI));

const cars = {
    name: 'pagani',
    model: 'hayura',
    modelYear: 2024,
    isAvailble: true
}

console.log(Object.getOwnPropertyDescriptor(cars, "model"));

// Object.defineProperty(cars, 'model',{
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(cars, "model"));


for (let [key, value] of Object.entries(cars) ) {
    if(typeof value != 'function'){

        console.log(`${key} : ${value}`);
        
    }
    
}