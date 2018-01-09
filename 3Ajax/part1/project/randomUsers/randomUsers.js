var url = "https://randomuser.me/api/"; 
var btn = document.querySelector("#btn");
var fullname = document.querySelector("#fullname"),
    username = document.querySelector("#username"),
    email = document.querySelector("#email"),
    city = document.querySelector("#city"),
    avatar = document.querySelector("#avatar");

btn.addEventListener("click", function(){
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError);
});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response;
}

function parseJSON(response) {
    return response.json().then(function(parsedData){
        return parsedData.results[0];
    });
}

function updateProfile(data) {
    fullname.innerText = data.name.first + " " + data.name.last;
    username.innerText = data.login.username;
    email.innerText = data.email;
    city.innerText = data.location.city;
    avatar.src = data.picture.medium;
}

function printError(error) {
    console.log("INSIDE displayErrors!")
    console.log(error);
}