var btn = document.querySelector("#btn");
var price = document.querySelector("#price");
var USDbtn = document.querySelector(".USDbtn"),
    GBPbtn = document.querySelector(".GBPbtn"),
    EURbtn = document.querySelector(".EURbtn");
var XHR = new XMLHttpRequest(); // make request

// satisfying DRY principle 
function XHRresponse(currency){
    // response to request
    XHR.onreadystatechange = function(){
        if (XHR.readyState == 4 && XHR.status == 200){
            // convert JSON string into object
            var rate = JSON.parse(XHR.responseText).bpi;
            if (currency == "USD"){
                price.textContent = rate.USD.rate + " " + rate.USD.code;  
            } else if (currency == "GBP") {
                price.textContent = rate.GBP.rate + " " + rate.GBP.code;
            } else if (currency == "EUR") {
                price.textContent = rate.EUR.rate + " " + rate.EUR.code;
            }
        } else {
            console.log("There's an error."); // 404 result
        }
    }
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
}


// listen for onload
window.onload = function(){
    XHRresponse("USD");
}

// listen for refresh button click
btn.addEventListener("click", function(){
    XHRresponse("USD");
});

// listen for radio button click
USDbtn.addEventListener("click", function(){
    XHRresponse("USD");
});

GBPbtn.addEventListener("click", function(){
    XHRresponse("GBP");
});

EURbtn.addEventListener("click", function(){
    XHRresponse("EUR");
});



