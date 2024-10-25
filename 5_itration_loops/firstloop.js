//for

for (let i = 0; i <= 10; i++) {
    const element =i;
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop Value:- ${i}`);

        for (let j = 0; j <= 10; j++) {
                // console.log(i+ ' * ' + j + ' = ' + i*j);
        }
    
}

//Break And Continue


for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`detected ${index}`);   
        // break;
        continue;
    }
    console.log(`Value of i is ${index}`);
    
    
}

