/* global $ */
/*
    Async Function
        - to simplify asynchronous code; specifically, promises by utilizing async, awaits, try (equivalent to successful then), and catch
            + await: reserved keyword for async functions that pauses the execution of async function and is followed by a Promise
              by waiting for the promise to resolve and then resuming the execution of an async function
                - like a pause button (like yield in a generator function)
*/

        // Example A:
            async function getMovieData(){
                console.log('starting');
                var movieData = await $.getJSON('https://omdbapi.com/?t=warrior&apikey=thewdb');
                console.log('ending');
                console.log(movieData);
            }
            getMovieData();
                // 'starting' > promise is made (does not console.log yet) > 'ending' > 'movieData....'
             
                
        // Example B: Object Async:
            var movieCollector = {
                data: 'titanic',
                async getMovieData(title){
                    var response = await $.getJSON(`https://omdbapi.com/?t=${title}&apikey=thewdb`);
                    console.log(response);
                }
            }
            
            movieCollector.getMovieData('warrior');
            
        // Example C: Class Async:
            class MovieData {
                constructor(name) {
                    this.name = name;
                }
                async getMovieData() {
                    var response = await $.getJSON(`https://omdbapi.com/?t=${this.name}&apikey=thewdb`);
                    console.log(response);
                }
            }
            
            var m = new MovieData('warrior');
            m.getMovieData();
            
        // Example D (try/catch):
            async function getMovieData(user){
                try {
                    var res = await $.getJSON(`https://api.github.com/users/${user}`);
                    console.log(res.name);
                } catch(err) {
                    console.log('User does not exist');
                }
            }
            getMovieData('mykkelol');
            getMovieData('sadawfdaf');