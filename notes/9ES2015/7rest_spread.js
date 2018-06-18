// Rest Arguments allow for an indefinite number of arguments
    // Rest Arguments can only be rest arguments if it is a parameter in a function
    // Rest Arguments are converted to array
    
    // A1: old school method of summing arguments
    function sumArg(){
        var total = 0;
        for(var i = 0; i < arguments.length; i++){
            total += arguments[i];
        }
        return total;
    }
    sumArg(1,2,3,4,5)
    
    // A2: array method
    function sumArg(){
        var arr = [].slice.call(arguments);
        return arr.reduce(function(acc, next){
            return acc + next; 
        });
    }
    sumArg(1,2,3,4,5)
    
    // A3: using Rest Arguments and Arrow Function
    var sumArg = (...args) => args.reduce((acc,next) => acc+next);
    sumArg(1,2,3,4,5)
    
// Spread works similarly to .apply method in that it spreads the values of an array
    
    // Example 1:    
        // in JS, Math.max does not work with array. As such we spread the array by using apply or spread
            var arr = [1,2,3,4,5];
        
        // A1: .apply
            Math.max.apply(this, arr); // 5
            
        // A2: spread
            Math.max(...arr); // 5
    
    // Example 2:
            function sumVal(a,b,c){
                return a + b + c;
            }
            var nums = [1,2,3]
       
        // B1: .apply
            sumVal.apply(this, nums); // 6
        
        // B2: spread
            sumVal(...nums); // 6