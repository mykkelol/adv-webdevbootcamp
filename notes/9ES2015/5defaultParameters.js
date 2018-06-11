// default parameters are parameters that will be used if arguments are not specified

    // A1: No default parameters
        
        function add(a,b){
            return a + b;
        }
        add(); // returns NaN because a or b are not specified
    
    // A2: Default parameters
    
        function add(a = 1, b = 2){
            return a + b;
        }
        add(); // returns 3
        add(5); // returns 7
        