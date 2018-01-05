/*
    Promise
        - an object that will be completed in the future.
        - you're getting an object that isn't your solution, but will be your solution in the future.

*/

    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var randomInt = Math.floor(Math.random() * 10);
            resolve(randomInt);
        }, 4000); 
    });
    
    promise.then(function(data){
        console.log("Random int passed to resolved: " + data);  
    });
    
// the promised object in the code above is the promise.then
// even though the setTimeout hasn't finish the 4000ms, we already have an object promised
    
    var p1 = new Promise(function(resolve, reject){
    var num = Math.random();
    if (num < .5){
        resolve(num);
    } else {
        reject(num);
    }
    });

    p1.then(function(result){
        console.log("Success:", result);
    }).catch(function(error){
        console.log("Error:", error);
    });
