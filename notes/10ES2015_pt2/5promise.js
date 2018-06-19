/*
Promise
    1. is a one time garunteed return of some future 
        - See this asyncronous example at the comment section of Example 2
    2. when the value is settled - the promise is resolved or rejected
    3. a promise always returns something that has a .then, allowing us to chain. This is called 'thenable'
*/

    /* Basic Example */
        function displayAtRandomTime(){
            return new Promise(function(resolve, reject){
                setTimeout(function(){
                    if(Math.random() > .5){
                        resolve('Yes!');
                    } else {
                        reject('No!');
                    }
                },1000); 
            }).then(function(val){
                console.log(val);
            }).catch(function(err){
                console.log(err);
            });
            /*
                Alternative Code: 
                    displayAtRandomTime()
                        .then...
                        .catch...
            */
        }
        
    /* Basic Example 2: Thenable Promise */
    /* global $ */
        
        var years = [];
        $.getJSON('https://omdbapi.com/?t=titanic&apikey=thewdb')
        .then(function(movie){
            years.push(movie.Year);
            return $.getJSON('https://omdbapi.com/?t=shrek&apikey=thewdb')
        }).then(function(movie2){
            years.push(movie2.Year);
            console.log(years);
        });
        console.log('ALL DONE!'); // This will execute before our promise; demonstrating asynchronous code
        
        
        
