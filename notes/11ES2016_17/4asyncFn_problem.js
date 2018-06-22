/* global $ */


    // Sequential requests
        // - when we await sequential requests, there is a potential problem of second request not starting because first request is not completed; see below.
            
            async function getMovieData(){
                var titanicPromise = await $.getJSON('https://omdbapi.com/?t=titanic&apikey=thewdb');
                var warriorPromise = await $.getJSON('https://omdbapi.com/?t=warrior&apikey=thewdb');
                console.log(titanicPromise);
                console.log(warriorPromise);
            }
            
            getMovieData();
            
    // FIX:
        // - by simply refactoring our code to await after the parallel requests are made, we solve the problem
        // - this is because we don't begin our promise until after the requests are completed; see below.
        
            async function getMovieData(){
                var titanicPromise = $.getJSON('https://omdbapi.com/?t=titanic&apikey=thewdb');
                var warriorPromise = $.getJSON('https://omdbapi.com/?t=warrior&apikey=thewdb');
                
                var titanicData = await titanicPromise;
                var warriorData = await warriorPromise;
                
                console.log(titanicData);
                console.log(warriorData);
            }
            
            getMovieData();
            
    // Await with Promise.all
        
            async function getMovieData(first, second){
                var moviesList = await Promise.all([
                    $.getJSON(`https://omdbapi.com/?t=${first}&apikey=thewdb`),
                    $.getJSON(`https://omdbapi.com/?t=${second}&apikey=thewdb`)
                ]);
                console.log(moviesList[0].Year);
                console.log(moviesList[1].Year);
            }
            
            getMovieData('blade', 'warrior');