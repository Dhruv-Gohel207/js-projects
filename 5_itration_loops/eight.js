const mynum = [1,2,3]

// const myTotal = mynum.reduce( function (acc , currval){
//     console.log(`acc ${acc} and currval: ${currval}`);
//     return acc +currval

// },0)

// const myTotal = mynum.reduce( (acc , currval) => acc+currval, 0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "react course",
        price : 5999
    },
    {
        itemName : "node course",
        price : 8999
    },
    {
        itemName : "DS course",
        price : 18999
    }
    
]

const priceToPay = shoppingCart.reduce( (acc, item)=> acc + item.price, 0 )
console.log(priceToPay);
