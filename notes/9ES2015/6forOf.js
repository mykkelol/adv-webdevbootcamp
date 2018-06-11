// JS ES2015 has a new datatype called "symbol"
    // for of loop can only be used if datatype are symbols
    // for of loop cannot access indices

// see code below
    // test if data are symbols:
        dir([]) // symbol.iterator exists
        dir({}) // symbol.iterator does not exist
    
    // using for of
    var arr = [1,2,3,4,5];
    for(let val of arr){
        console.log(val);
    }