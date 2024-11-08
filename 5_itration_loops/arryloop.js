//for of 

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

// for( const num of arr){
//     // console.log(num);
// }

const greeting = "hello world"
// for (const greet of greeting) {
//     console.log(`Each char is: ${greet}`);
    
// }

//maps 

const map = new Map()
map.set('IN', "india")
map.set('USA', "united state of america")
map.set('FR', "france")
map.set('IN', "india")

// console.log(map);


for (const [key , value] of map) {
    console.log(key, ":-", value);
    
}