// Various enhancement of ES2015 from ES5

    // A: when keys and values are the same:
    
            var firstName = "Micheal";
            var lastName = "Sihavong";
        
        // A1: ES5
    
            var instructor = {
                firstName: firstName,
                lastName: lastName
            }
            
        // A2: ES2015
        
            var instructor = {
                firstName,
                lastName
            }
            
    // B: defining object method with function; remember not to use arrow fn with
    // object methods because it doesn't have its own keyword this.
    
        // B1: ES5
        
            var instructor = {
                sayHi: function(){
                    return "Hello";
                }
            }
        
        // B2: ES2015
        
            var instructor = {
                sayHi(){
                    return "Hello";
                }
            }
            
    // C: when assigning values to an object key
    
            var firstName = "Colt";
    
        // C1: ES5
        
            var instructor = {};
            instructor[firstName] = "That's me!";
        
        // C2: ES2015
        
            var instructor = {
                [firstName]: "That's me!"
            }