    // counter
    var counter = 0;
    function intCounter() {
        counter++;
        console.log("Counter: ", counter);
    }
    
    // create promise using runLater
    // runLater to chain promise and then plug into setTimeout
    function runLater(callback, timeInMs){
        var p = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(callback());
            }, timeInMs); 
        });
        return p;
    }
    
    // runLater chaining promise
    runLater(intCounter, 1000).then(function(){
        return runLater(intCounter, 2000).then(function(){
            return runLater(intCounter, 3000).then(function(){
            });
        });
    });