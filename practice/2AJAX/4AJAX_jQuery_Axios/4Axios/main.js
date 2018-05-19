/* global axios */

/*
    Axios is better than jQuery in that it's a lightweight (when a library is main for only one purpose)
    library because it's made specifically for XHR.
    
    Imagine jQuery.ajax() and its shorthand without other things in the library like animation, etc.

    Syntax were purposely made to be like Fetch, but everything is still XHR because many browsers are not yet compatible with Fetch.
*/


var url = "https://opentdb.com/api.php?amount=1";

axios.get(url)
.then(function(res){
    console.log(res.data.results[0].question);
})
.catch(handleErrors);

/*
    Axios will handle two type of errors.
        1) Response error, e.g. 404
        2) Request error, e.g internet dying
    See fn handleErrors below
*/


function handleErrors(err) {
    if (err.response) {
      console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
      console.log("Problem With Request!");
    } else {
      console.log('Error', err.message);
    }
  }

