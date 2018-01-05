// Bad code where we nest async callbacks without using promise:
    var counter = 0;
    setTimeout(function() {
        counter++;
        console.log("Counter:", counter);
        setTimeout(function() {
            counter++;
            console.log("Counter:", counter);
            setTimeout(function() {
                counter++;
                console.log("Counter:", counter);
            }, 3000);
        }, 2000);
    }, 1000);
    
/*
    Promise chaining
        - allows multiple .then to be chained into a promise 
*/
    // alternative to counter with promise
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
    
    // basic calculator with promise chaining
    var p = new Promise(function(resolve, reject){
        resolve(5); 
    });
    
    p.then(function(data){
        return data * 2;
    }).then(function(data){
        return data + 20;
    }).then(function(data){
        console.log(data); 
    });
    