/*
.find(callback[i],i,callback)
    - invokes on arrays; returning values found within array if found and undefined if not found
*/

    [1,2,3].find(function(val){
        return val === 3; 
    });
    // 3

/*
.findIndex(callback[i],i,callback)
    - similar to find, but returns an index or -1 if value is not found
    - pretty much exactly like .indexOf();
*/

    [1,2,3].findIndex(function(val){
        return val === 3;
    })
    // 2

/*    
.includes()
    - a boolean alternative of .indexOf() and .findIndex();
    - will return a boolean of a value input
*/

    [1,2,3].includes(3);
    // true;

/*
Number.isFinite()
    - a boolean testing if a value is a number
*/

    const val = 1;
    Number.isFinite(val);
    