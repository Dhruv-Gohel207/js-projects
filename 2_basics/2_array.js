const Marvel_heros = ["iron-man", "thor", "hulk"]
const Dc_heros = ["batman", "superman", "flash"]    


// console.log(Marvel_heros.concat(Dc_heros))
const newheros = [...Marvel_heros, ...Dc_heros]
// console.log(newheros);


const nes_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [1, 2]]]
    // console.log(nes_array.flat(Infinity));


    console.log(Array.isArray("abcd"));
    console.log(Array.from("abcd"));
    console.log(Array.of("abcd"));
    console.log(Array.from({name:"abcd"}));  //its given an empty array

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3));


    
    