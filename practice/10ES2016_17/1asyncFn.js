/* -------------------------------------------------------------------------- */
/* ----------------------------- Async Function ----------------------------- */
/* -------------------------------------------------------------------------- */

/* global $ */

/* 
1. Write a function called hasMostFollowers, which accepts a variable number
of arguments. You should then make an AJAX call to the Github User API 
(https://api.github.com/users/#....) to get the name and
number of followers of each argument. The function should return a string which
displays the username who has the most followers. 

Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX
methods ($.getJSON, $.ajax, etc.) return a promise.

hasMostFollowers('elie','tigarcia','colt').then(function(data){
    console.log(data)
});
 
"Colt has the most followers with 424" 
*/

    async function hasMostFollowers(...arr){
        var baseUrl = 'https://api.github.com/users/';
        var usersJSON = arr.map(user => $.getJSON(baseUrl + user));
        var usersList = await Promise.all(usersJSON);
        var max = usersList.sort((a,b) => b.followers-a.followers)[0];
        return `${max.name} has the most followers with ${max.followers}`;
    }
    hasMostFollowers('elie','tigarcia','colt');    

/* 
2. Write a function called starWarsString, which accepts a number. You should 
then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for
a specific character by the number passed to the function. Your function should
return a promise that when resolved will console.log the name of the character.

starWarsString(1).then(function(data){
    console.log(data)
})
 
"Luke Skywalker"
*/

    async function starWarsString(num){
        var str = '';
        var char = await $.getJSON(`https://swapi.co/api/people/${num}/`);
        str += char.name;
        var film = await $.getJSON(char.films[0]);
        str += ` was first featured in ${film.title}, directed by ${film.director}`;
        var planet = await $.getJSON(film.planets[0]);
        str += ` and took place in ${planet.name}.`;
        return str;
    }
    starWarsString(1);

/*
Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX 
request to get the first film that character is featured in and return a promise 
that when resolved will console.log the name of the character and the film they 
are featured in 

starWarsString(1).then(function(data){
    console.log(data)
})
 
"Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
*/

/*
Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the 
information about the first planet that the film contains. Your function should
return a promise that when resolved will console.log the name of the character
and the film they are featured in and the name of the planet. 

starWarsString(1).then(function(data){
    console.log(data)
})
 
"Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin 
Kershner and it takes 
*/