/*
    setTimeout
        - a function that asynchronously invokes a callback after a delay in milliseconds
*/
        function callback() {
            console.log("callback function");
        }
        var delay = 5000; // in milliseconds
        setTimeout(callback, delay);
        
        /*--------------------------------------------------*/
        
        setTimeout(function(){
            console.log("runs in approx. 2000ms");
        }, 2000);
        
        /*--------------------------------------------------*/
        
        var timerId = setTimeout(function() {
            console.log("This function runs in 30s");
        }, 30000);
        
        // first setTimeout, timerId, will never run as the following setTimeout executes and clears it first in 2s
        
        setTimeout(function() {
            console.log("Canceling the first setTimeout", timerId);
            clearTimeout(timerId);
        }, 2000);
        
/*
    setInterval
        - a function like setTimeout, but repeats the delay instead of delaying and executing once
*/
        var num = 0;
        setInterval(function(){
            num++;
            console.log("num: ", num);
        }, 1000); // prints num of increment every 1s
        
        /*--------------------------------------------------*/

        var num = 0;
        var intervalId = setInterval(function(){
            num++;
            console.log("num: ", num);
            if (num === 3){
                clearInterval(intervalId);
            }
        }, 1000);
        
// exercise 

    function countDown(seconds){
        // declare intervalId to stop interval
        var intervalId = setInterval(function(){
            seconds--;
            if (seconds === 0){
                console.log("Ring ring ring!!!");
                clearInterval(intervalId);
            } else {
                // to avoid inclusion of 0 in the timer and instead return "ring ring ring"
                console.log("Timer: ", seconds);
            }
        }, 1000);
    }

    // function with one parameter
    countDown(3);