/* global $ */
/*
    (1) Write a function called getMostFollowers, which accepts
    a variable number of arguments. You should then make an AJAX
    call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user)
    to get the name and number of followers of each argument. 
    The function should return a promise, which when resolved, 
    returns a string which displays the username who has the most followers. 

    Hint - Try to use Promise.all to solve this and remember that the 
    jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

    getMostFollowers('elie','tigarcia','colt').then(function(data){
        console.log(data)
    }); 
    // "Colt has the most followers with 424" 
*/

        function getMostFollowers(...usernames){
            var baseUrl = 'https://api.github.com/users/';
            var userJSON = usernames.map(username => $.getJSON(baseUrl + username));
            return Promise.all(userJSON).then(function(data){
                // .sort, in its original form, sorts strings. However, it allows an annoynomous function
                // to sort other datatypes. For numbers, we can pass a compare function.
                // a - b implies that if it's negative (a < b), positive (a > b), 0 (a = b)
                // if a > b, for example, this tells sort() that b should come before a
                    // but here we did b-a, for descending order!
                var max = data.sort((a,b) => b.followers-a.followers)[0];
                return `${max.name} has the most followers with ${max.followers}`;
            });
        }
        getMostFollowers('mykkelol', 'yuzhoujr');

/*
    (2) Write a function called starWarsString, which accepts a number. 
    You should then make an AJAX call to the Star Wars API 
    (https://swapi.co/api/people/#) to search for a specific character by the number
    passed to the function. Your function should return a promise that 
    when resolved will console.log the name of the character.

    starWarsString(1).then(function(data){
        console.log(data)
    })
    // "Luke Skywalker"
*/

    function starWarsString(num){
        var str = '';
        $.getJSON(`https://swapi.co/api/people/${num}`)
        .then(function(char){
            str += `${char.name} was first featured in`;
            return $.getJSON(char.films[0]);
        }).then(function(film){
            str += ` the film "${film.title}", directed by ${film.director}`;
            return $.getJSON(film.planets[0]);
        }).then(function(planet){
            str += ` and takes place on planet ${planet.name}.`;
            return console.log(str);
        });
    }
    starWarsString(1);

/*
    Bonus 1 - Using the data from the previous AJAX call above,
    make another AJAX request to get the first film that character 
    is featured in and return a promise that when resolved will 
    console.log the name of the character and the film they are featured in 

    starWarsString(1).then(function(data){
        console.log(data)
    });
    // "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
*/

/*
    Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to 
    get the information about the first planet that the film contains. 
    Your function should return a promise that when resolved will 
    console.log the name of the character and the film they are 
    featured in and the name of the planet. 
    
    starWarsString(1).then(function(data){
        console.log(data)
    })
    // "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and takes place 
    // on planet Hoth."
*/


