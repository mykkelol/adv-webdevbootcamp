var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if(XHR.readyState == 4) { /* there's 4 state to XHR. 1 = .open() executed, 2 = .send(), 3 = loading responsetext, 4 = done */
        if(XHR.status == 200) {
            console.log(XHR.responseText); /* status 200 is when things work perfectly */
        } else {
            console.log("There was a problem");
        }
    }
}

XHR.open("GET", "https://api.github.com/zen"); /*.open is what type of request to make*/
XHR.send(); /*.send is how we initiate everything*/