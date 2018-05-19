var btn = document.querySelector("button");

/* 
    There are two type of errrors: 
        1) delivered by fetch (e.g. internet is down)
            - this is delivered by .catch
        2) user defined error due to request status (e.g. 404)
            - this is delivered by user throwing an error (see handleErrors fn)
*/


btn.addEventListener("click", function(){
    var url = "https://api.github.com/users/mykkelol";
    fetch(url)
    .then(handleErrors)
    .then(function(request){
        console.log("WORKS");
        console.log(request);
    })
    .catch(function(error){
        console.log(error);
    });
});

function handleErrors(request){
    if(!request.ok){
        throw Error(request.status);
    }
    return request; /*pass request to subsequent promise if request.ok = 200*/
}