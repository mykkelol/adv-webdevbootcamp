var btn = document.querySelector("button");
btn.addEventListener("click", function(){
    var url = 'https://api.github.com/users/mykkelol';
    example2();
    
function example1() {
    fetch(url)
    .then(function(){
        console.log("EVERYTHING IS FINE");
    }).catch(function(){ 
        // catch only run if there's a problem with the request itself e.g. internet off, connection, credential and with the actual response
        // to respond to that, we have to pass and return a request in the first then
        console.log("THERE IS A PROBLEM"); 
    });
}

function example2() {
    // this is a standard format and an alternative form to example1()
    fetch(url)
    .then(handleErrors)
    .then(function(request){
        console.log("EVERYTHING IS FINE!");
        console.log(request);
    })
    .catch(function(error){
        console.log(error); // error values is passed from Error that was thrown early in response
    });
}

function handleErrors(request){
    // if request 200 is not ok
    if (!request.ok){
        throw Error(request.status);
    }
        return request; // returning to pass request to next then
}
});

