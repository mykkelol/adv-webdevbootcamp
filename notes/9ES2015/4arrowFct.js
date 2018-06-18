/* 

arrow function is VERY SIMILAR to the keyword function(), but not a complete replacement
    - to utilize arrow function, omit:
        1. return keyword
        2. curly bracelet
    - not a complete replacement because it doesn't get its own 'this' keyword and arguments. 
        1. Instead, the keyword 'this' refers to its "enclosing context"
        2. This works out in our favor, for some rare cases. See code below at C#
        
*/  

// see code comparison

    // A1
        function doubleAndFilter(arr){
            return arr.map(function(val){
                return val * 2;
            }).filter(function(val){
                return val % 3 == 0;
            });
        }
        
    // A2
        var doubleAndFilter = (arr) => arr.map(val => val * 2).filter(val => val % 3 === 0);
        
// Basic comparison

    // B1
        function add(a,b){
            return a + b;
        }
    
    // B2
        var add = (a,b) => a+b;
        
// Utilizing "this" in arrow functions

    // C1
        var instructor = {
            fname: "Colt",
            sayHi: function(){
                setTimeout(function(){
                    console.log("Hello " + this.fname);
                }.bind(this),1000);
            }
        }
        
        // The reason we bind keyword this is because without it, this.fname refers to the sayHi 
        // object instead of the original enclosing context variable, instructor
        
    // C2
        var instructor = {
            fname: "Colt",
            sayHi: function(){
                setTimeout(() => {
                    console.log("Hello " + this.fname);
                },1000);
            }
        }
        
        // "this" in C2's code will work here without having to bind because the arrow function will
        //      continue to have the instructor variable be the keyword "this". This is because the instructor variable is the enclosing context. 
        // Another note: the keyword 'function' was also used here because if we used the arrow function twice, at sayHi and at setTimeout, then
        //      the enclosing context for sayHi's arrow fn would be instructor. As such, the enclosing context for setTimeout would be sayHi.
        