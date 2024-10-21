//date

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleDateString());
// console.log(typeof newDate);

// let createDate = new Date("2023-01-14")
// let createDate = new Date("2-2-20")
// let createDate = new Date(2022, 4 , 20)
// console.log(createDate.toDateString());

// let newcreated = new Date("7-20-2020")
// console.log(newcreated.toDateString());
// const mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(newcreated.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.toLocaleString(newDate.getDay()));




console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));










