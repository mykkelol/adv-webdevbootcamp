/* global $ */
/*
    Promise.all
        1. accepts an array of promises and resolves or rejects them all at once
            - if a single promise has been rejected, all promises are rejected (fast fail)
            - if all the passed-in promises are resolved, Promise.all is fulfilled with
            an array of values in the same exact order as the array with the passed-in promises
        2. does not resolve sequentially, but promise.all will wait for all promises to complete
*/

    // Promise.all alternative of code written with Promise in 5promise.js:
        function getMovie(title){
            return $.getJSON(`https://omdbapi.com/?t=${title}&apikey=thewdb`);
        }
        
        var titanicPromise = getMovie('titanic');
        var shrekPromise = getMovie('shrek');
        var warriorPromise = getMovie('warrior');
        
        Promise.all([titanicPromise, shrekPromise, warriorPromise]).then(function(movies){
            return movies.forEach(val => console.log(`${val.Title} was released in the year of ${val.Year}.`)); 
        });