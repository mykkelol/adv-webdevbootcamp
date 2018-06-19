/* global $ */
/*
Generator Function (function*):
    - when invoking a generator function with .next(), a yield expression is executed which specifies
    the values of an object with two keys/properties (a value property and done property)
        + the value key/property contains the value to be yield; see ln 24
        + the done key/property contains a boolean of true/false (whether or a yield has been executed); see ln 11
*/

    // Code Example A: 
        function* generator(n){
            yield n; // after execution with .next() in ln 24, done key/property is true and goes to the next yield 
            yield* anotherGenerator(n);
            yield n + 10;
        }
        
        function* anotherGenerator(n){
            yield n + 1;
            yield n + 2;
            yield n + 3;
        }
        
        var gen = generator(10);
        
        console.log(gen.next().value); // accessing the value of the .value key/property; result = 10
        console.log(gen.next().value); // 11
        console.log(gen.next().value); // 12
        console.log(gen.next().value); // 13
        console.log(gen.next().value); // 13
        console.log(gen.next().value); // 20
    
    // Code Example B:
        function* pausedAndReturn(n){
            for(let i = 0; i < n; i++){
                yield i;
            }
        }
        
        // Route 1:
        var gen = pausedAndReturn(3);
        console.log(gen.next().value); // 0
        console.log(gen.next().value); // 1
        console.log(gen.next().value); // 2
        console.log(gen.next().value); // undefined
        
        
        // Route 2:
        for(let val of pausedAndReturn(3)){
            console.log(val);
        }
        
    // Code Example C:
        function* getMovieData(title){
            console.log('starting');
            yield $.getJSON(`https://omdbapi.com/?t=${title}&apikey=thewdb`);
            console.log('ending');
        }
        
        var movieGetter = getMovieData('Warrior');
        movieGetter.next().value.then(val => console.log(val));