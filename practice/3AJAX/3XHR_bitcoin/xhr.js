var btn = document.querySelector("#btn");
var price = document.querySelector("#price");
var select = document.querySelector("#select");

btn.addEventListener("click", function(){
    var currency = select.options[select.selectedIndex].value;
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if (XHR.readyState == 4 && XHR.status == 200) {
            var url = JSON.parse(XHR.responseText).bpi[currency].rate;
            price.textContent = url + " " + currency;
        }   
    }
    
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});