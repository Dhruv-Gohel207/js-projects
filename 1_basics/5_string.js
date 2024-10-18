let name= "dhruv"
let city = "surat"

console.log(`my name is ${name} and i'm live in ${city} city`)


const str = new String("water-bottle")
// console.log(str[2])
// console.log(str.__proto__);

// console.log(str.toUpperCase());
// console.log(str.charAt(5));
// console.log(str.indexOf("tt"));

const newstr = str.substring(1, 6)
// console.log(newstr);
const anotherstr = str.slice(-8, 5)
console.log(anotherstr);


const newstr2 = "     space         "
console.log(newstr2);
console.log(newstr2.trim());


console.log(str.replace("water", "milk"));
