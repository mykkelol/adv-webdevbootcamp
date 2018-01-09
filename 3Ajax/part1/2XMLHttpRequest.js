var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    console.log("READY STATE IS... " + XHR.readyState);
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();

/* ---------------------------------------------------------------- */

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if (XHR.readyState == 4){
      if (XHR.status == 200){ // a status that everything functions properly; opposite of 404
        console.log(XHR.responseText);  
      } else {
        console.log("There's a problem."); 
      }
    }
}