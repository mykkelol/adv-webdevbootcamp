var btn = document.querySelector("#btn");
var image = document.querySelector("#photo");

// listen for click
btn.addEventListener("click", function(){
    // make request when clicked
    var XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var url = JSON.parse(XHR.responseText).message; /* parse json to objects and as objects you can do .message which is an element in the JSON's object*/
            image.src = url;
        }
    }
    
    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});