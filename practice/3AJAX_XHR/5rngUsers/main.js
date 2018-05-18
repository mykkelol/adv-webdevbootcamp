var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var img = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click", function(){
    
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

function handleErrors(response){
    if(!response.ok){
        throw Error(response.status);
    }
    return response;
}

function parseJSON(response){
    return response.json()
    .then(function(parsedData){
        return parsedData.results[0];  
    });
}

function updateProfile(data){
    img.src = data.picture.medium;
    fullname.innerText = data.name.first + " " + data.name.last;
    username.innerText = data.login.username;
    email.innerText = data.email;
    city.innerText = data.location.city;
}

function printError(error){
    console.log(error);
}