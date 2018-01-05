/*
    The Queue
        - an ordered list of functions waiting to be placed on the stack
        - functions in queue are processed in a FIFO basis.
        
    The Event Loop
        - Functionality in JS runtime that checks the queue when stack is empty
        - if stack is empty, front of the queue is placed on the stack
        - think of Event Loop being the Queue's moderator
*/

    function square(n) {
        return n * n;
    }
    setTimeout(function(){
        console.log("Callback was placed on the queue");
    }, 0); // the 0 indicates approximately 0. it will only invoke after the stack is empty
    console.log(square(2));
    
    // Stack process -- 15 > places 16/17 to queue even if callback is 0 due to eventloop > 18 > 12 > 13 
                    //  > pushes 18's console > 16/17 now on stack and 16 pushes to console
                    
/*
    - This process demonstrates that JS is a single-threaded language meaning that
    code execution is linear.
    - In other words, code that's running cannot be interrupted by something else 
    in the program -- hence, queue and event loop.
*/