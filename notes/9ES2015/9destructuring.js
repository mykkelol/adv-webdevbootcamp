// Destructuring is when we extract values from data stored in objects or arrays

// ----------------------------------- Object destructuring -----------------------------------
    
    // A: assigning variables with objects
        var instructor = {
            firstName: "Elie",
            lastName: "Schoppik"
        }
    
        // A1: ES5
            var firstName = instructor.firstName;   
            var lastName = instructor.lastName;   
        
        // A2: ES2015
            var {firstName, lastName} = instructor; // declaring new variables with names exactly like the object's keys.
            var {firstName:first, lastName:last} = instructor; // declaring new variables (first and last) with names different from object's keys
            
    // B: Default values with object
        // B1: ES5
            function createInstructor(options){
                var options = options || {}; // if options is specified then options otherwise options is an object
                var name = options.name || {first: "Matt", last: "Lane"}; // if options.name is specified then options.name otherwise name is Matt Lane
                var isHilarious = options.isHilarious || false; // if options.Hilarious is specified then options.isHilarious otherwise false
                return [name.first, name.last, isHilarious];
            }
                createInstructor() // ['Matt', 'Lane', false];
                createInstructor({name: {first: "Colt", last: "Steele"}}); // ['Colt', 'Steele', false]
                createInstructor({isHilarious: true}); // ['Matt', 'Lane', true];
                
        // B2: ES2015
            // by assining all of our default options below to equal to an empty object, we are telling ES2015 that this is an object destructuring
            
            function createInstructor({name = {first:"Matt",last: "Lane"}, isHilarious = false} = {}){
                return [name.first, name.last, isHilarious];
            };
                createInstructor() // ['Matt', 'Lane', false];
                
    // C: Object fields as parameters
            var instructor = {
                name: "Colt",
                favColor: "Purple"
            };
            
        // C1: ES5
            function displayInfo(obj){
                return [obj.name, obj.favColor];
            }

        // C2: ES2015
            function displayInfo({name, favColor}){
                return [name, favColor];
            }
            
            displayInfo(instructor); // ['Colt', 'Purple']
            
// ----------------------------------- Array destructuring -----------------------------------

    // A: split values of array into its own distinct variable
        var arr = [1,2,3];
        // A1: ES5
            var a = arr[0];
            var b = arr[1];
            var c = arr[2];
        
        // A2: ES2015
            var [a,b,c] = arr;
            
            a; // 1
            b; // 2 
            c; // 3
            
    // B: split values of array in functions into its own distinct variable
            function returnNums(a,b) {
                return [a, b];
            }
        // B1: ES5
            var first = returnNums(5,10)[0]
            var second = returnNums(5,10)[1]
        
        // B2: ES2015
            [first, second] = returnNums(5,10);
            
            first; // 5
            second; // 10
            
    // C: swapping values
        // C1: ES5
            function swap(a, b){
                var temp = a;
                a = b;
                b = temp;
                return [a, b];
            }
        
        // C2: ES2015
            function swap(a, b){
                return [a, b] = [b, a];
            }
            
            swap(10, 5); // [5, 10];