/*
    Fetch API
        - the update to XML
        
    Difference in old XHR and the iteration from the Fetch API
        - https://domenic.github.io/streams-demo/
            - in old XHR, this pi generator would iterate through all 1billion number before giving you the position
            - with Fetch API, this pi generator streams us the data/position before it runs through it all
            - that's one of the problem with XHR, it doesn't stream data--with Fetch, it's different story.
            
    THE PROBLEM WITH FETCH
        - browser support
*/

// Requesting with Fetch API
    fetch(url).then(function(res){ // fetch returns a promise
        console.log(res); // then runs after fetch 
    }).catch(function(error){
        console.log(error);
    });
    
// Requesting with Fetch API and extract the JSON
    // could take awhile to return our promise if its parsing large JSON
    fetch(url).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
    }).catch(function(){
        console.log("problem!"); 
    });
    
// Another example
    fetch(url)
    .then(function(res){
        console.log(res);
        return res.json(); // parsed return promise
    })
    .then(function(data){
        console.log(data);
        console.log(data.bpi.EUR.rate);
    })
    
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: 'blue',
                login:'bluecat',
            })
        })
        .then(function(res){
            console.log(res);
            return res.json(); // return promise
        })
        .then(function(data){
            console.log(data);
            console.log(data.bpi.EUR.rate);
        })
    
    
// Fetch Options
    // applying options to fetch
    // fetch options is when you can include object that provides key value pairs for the options that you want to proivde e.g. method, body
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({ // unnecessary but helps avoid having to specify ""
            name: 'blue',
            login: 'bluecat'
        })
    }).then(function(data){
       //do something 
    }).catch(function(err){
       //handle error 
    });